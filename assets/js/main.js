(function init() {
  var faceDiv = document.querySelector("#face");

  const country = document.querySelector('#country');
  country.addEventListener('change', function () {
    switch (this.value) {
      case 'pt_br':
        faceDiv.innerHTML = `<img class="temer" src="./assets/img/pt_br.png" alt="">`;
        document.body.className = "brazil-body";
        break;
        case 'us':
          faceDiv.innerHTML = `<img class="temer" src="./assets/img/en_us.png" alt="">`;
          document.body.className = "usa-body";
        break;
        case 'ko':
        console.log('ko');
        document.body.className = "korea-body";
        faceDiv.innerHTML = `<img class="temer" src="./assets/img/ko.png" alt="">`;
        break;
      default:
        faceDiv.innerHTML = `<img class="temer" src="./assets/img/pt_br.png" alt="">`;
        document.body.className = "brazil-body";
    }
  });


})();

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
  }(document, "script", "twitter-wjs"));



  // Player
  const player = document.querySelector('#player');
  const playerBtn = document.querySelector('#audio_button');

  playerBtn.addEventListener('click', function() {
      if (player.paused) {
        player.play();
        this.style.backgroundImage = 'url(assets/img/pause.png)'
      } else {
        player.pause();
        this.style.backgroundImage = 'url(assets/img/play.png)'
      }
  });

  setTimeout(() => {
    player.play();
  }, 100);

// Bonus audio
const zg = document.querySelector('#zg');
const ch = document.querySelector('#ch');
  document.addEventListener('keypress', function(e) {
    if(e.keyCode === 122 ) {
      zg.play();
    }
    if(e.keyCode === 99 ) {
      ch.play();
    }
  })
