var countdownDate = new Date("Aug 2, 2019 20:38:35").getTime();
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
        var txt = ' MILAN';
        var speed = 1600;
    
         function typeWriter() {
            if (n < txt.length) {
                document.getElementById("destination").innerHTML += txt.charAt(n);
                n++;
                speed -= 250;
                setTimeout(typeWriter, speed);
            }
        }
        
        typeWriter();
        
        const confettiFactory = (speed, xPos, spin, color) => {
            return {
                'speed': speed,
                'xPos': xPos,
                'spin': spin,
                'color': color,
                move() {
                    var newDiv = document.createElement('div');
                    newDiv.classList.add('confetti');
                    var surprise = document.getElementById("surprise"); 
                    console.log(newDiv);
  document.body.insertBefore(newDiv, surprise); 
                    console.log('made a new confetti element');
                    //make multiple, give random color, speed for translateY, random start on x axis, random spin (between x and x, not too much spin). these need to be defined randomly by creating a loop and setting them using math.random, with the confettione call in this loop too
                }
            }
        }
        
        const confettiOne = confettiFactory(2, 3, 3, 'green');
        confettiOne.move();
        
    }
}, 1000);

let xhr = new XMLHttpRequest();
let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Milan&APPID=f5cc3895d0badad4fb074a429dec5528&units=metric';

xhr.response = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(xhr.response);
        console.log(response.list);
        var i;
        for (i = 0; i < response.list.length; i++) {
            var newNum = response.list[i].dt_txt;
            //var newNumFormatted = 
            var nextDayDate = new Date(newNum.replace(/-/g, '/')).getTime();
            var tomorrowHours = Math.floor((nextDayDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 1;
            if (tomorrowHours === 12) {
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