(function init() {
  var currentBR = true;
  var languageDiv = document.querySelector("#language");
  var faceDiv = document.querySelector("#face");
  var languageButton = document.querySelector("#language img");
  languageButton.addEventListener("click", function() {
    if (currentBR) {
      faceDiv.innerHTML = `<img class="temer" src="./assets/img/en_us.png" alt="">`;
      languageButton.src = "./assets/img/br_flag.png";
      document.body.classList.replace("brazil-body", "usa-body");
      currentBR = false;
    } else {
      faceDiv.innerHTML = `<img class="temer" src="./assets/img/pt_br.png" alt="">`;
      languageButton.src = "./assets/img/us_flag.png";
      document.body.classList.replace("usa-body", "brazil-body");
      currentBR = true;
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

const zg = document.querySelector('#zg');
  document.addEventListener('keypress', function(e) {
    if(e.keyCode === 122 ) {
      zg.play();
    }
  })
