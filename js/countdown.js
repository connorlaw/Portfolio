var countdownDate = new Date("Aug 3, 2019 00:15:10").getTime();
console.log(countdownDate);

var x = setInterval(function () {
    var now = new Date().getTime();
    var difference = countdownDate - now;
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('target-days').innerHTML = days;
    document.getElementById('target-hours').innerHTML = hours;
    document.getElementById('target-minutes').innerHTML = minutes;
    document.getElementById('target-seconds').innerHTML = seconds;
    if (difference < 1000) {
        clearInterval(x);
        document.getElementById('countdown').style.display = "none";
        document.getElementById('surprise').style.display = "block";
        document.getElementById('destination').style.display = "block";
        var n = 0;
        var m = 0;
        var txt = ' MILAN';
        var txtIntro = " YOU"
        var speed = 500;
        var speedIntro = 300;

        function typeWriterIntro() {
            return new Promise(resolve => {
                if (m < txtIntro.length) {
                    document.getElementById("surprise").innerHTML += txtIntro.charAt(m);
                    m++;
                    setTimeout(typeWriterIntro, speedIntro);
                    if (m === txtIntro.length) {
                        resolve('Success!');
                        console.log("resolving");
                    }
                }
            })
        };
        
        async function typeWriter() {
            console.log("awaiting");
            await typeWriterIntro();
            console.log("awaited");
            if (n < txt.length) {
                document.getElementById("destination").innerHTML += txt.charAt(n);
                n++;
                setTimeout(typeWriter, speed);
            }
        }
        
        typeWriter();
    }
}, 1000);

let xhr = new XMLHttpRequest();
let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Milan&APPID=f5cc3895d0badad4fb074a429dec5528&units=metric';

xhr.response = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        alert("ready state = DONE");
        let response = JSON.parse(xhr.response);
        console.log(response.list);
        var i;
        for (i = 0; i < response.list.length; i++) {
            var newNum = response.list[i].dt_txt;
            var nextDayDate = new Date(newNum).getTime();
            var tomorrowHours = Math.floor((nextDayDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1;
            alert("loop and find first day with 12pm. newNum: " + newNum + ", nextDayDate: " + nextDayDate + ", tomorrowHours: " + tomorrowHours);
            console.log(tomorrowHours);
            if (tomorrowHours === 12) {
                alert("found it! stop!");
                break
            }
        }

        function weatherFunc(num) {
            document.getElementsByClassName('weather-temp')[j].innerHTML = response.list[num].main.temp + '°';
            document.getElementsByClassName('weather-img')[j].src = 'https://openweathermap.org/img/w/' + response.list[num].weather[0].icon + '.png'
            j++;
        }
        var j = 0;
        for (let p = 0; p < 5; p++) {
            weatherFunc(i);
            i += 8;
        }
    }
};
xhr.open('GET', url);
xhr.send();