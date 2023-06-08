class Cookies {
  constructor() { }

  init() {
    const cookieBtns = document.querySelectorAll('a[data-cookie-consent]');
    cookieBtns.forEach(btn => {
      btn.addEventListener('click', () => {
      let accepted = btn.getAttribute('data-cookie-consent');
      document.cookie = `cookie_notice_accepted=${accepted}`;
      if (accepted == 'true') {
        location.reload();
      } else {
        document.getElementById('cookie-banner').classList.remove('show');
      }
      });
    });

    if (this.getCookie('cookie_notice_accepted') === 'true') {
      let head = document.getElementsByTagName('head')[0];
      let js = document.createElement('script');
      js.type = 'text/javascript';
      js.src = 'https://www.googletagmanager.com/gtag/js?id=G-YRWY66FH14';
      head.appendChild(js);
        
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YRWY66FH14');
    } else if (this.getCookie('cookie_notice_accepted') !== 'false') {
      document.getElementById('cookie-banner').classList.add('show');
    }
  }

  getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}

export default Cookies;