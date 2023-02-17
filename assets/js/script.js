function clock() {
  function switchColor() {
    const switchButton = document.querySelector("#switch");

    switchButton.addEventListener("click", function toggleMode() {
      const html = document.documentElement;
      html.classList.toggle("light");
    })
  }
  switchColor();

  function clickButtons() {
    const startButton = document.querySelector("#start");
    const pauseButton = document.querySelector("#pause");
    const resetButton = document.querySelector("#reset");
    const startDiv = document.querySelector("#container-start-effect");
    const pauseDiv = document.querySelector("#container-pause-effect");
    const resetDiv = document.querySelector("#container-reset-effect");
    const borderEffect = document.querySelector("#container-stopwatch");

    const stopwatch = document.querySelector("#stopwatch");
    let seconds = 0;
    let timer;

    function StopEffectPause() {
      if (pauseDiv.classList.contains("click-effect-pause")) {
        pauseDiv.classList.remove("click-effect-pause");
      }
    }

    function StopEffectReset() {
      if (resetDiv.classList.contains("click-effect-reset")) {
        resetDiv.classList.remove("click-effect-reset");
      }
    }

    function StopEffectStart() {
      if (startDiv.classList.contains("click-effect-start")) {
        startDiv.classList.remove("click-effect-start");
      }
    }

    function changeIconStart() {
      const ionIconStart = document.querySelector("ion-icon");
      ionIconStart.setAttribute("name", "reload-outline");
    }

    function backIconStart() {
      const ionIconStart = document.querySelector("ion-icon");
      ionIconStart.setAttribute("name", "caret-forward-outline");
    }

    function startBorderEffect() {
      borderEffect.classList.add("border-effect");
    }

    function stopBorderEffect() {
      if (borderEffect.classList.contains("border-effect")) {
        borderEffect.classList.remove("border-effect");
      }
    }

    function createSeconds(seconds) {
      const date = new Date(seconds * 1000);
      return date.toLocaleTimeString("pt-BR", {
        hor12: false,
        timeZone: "GMT",
      });
    }

    function startClock() {
      timer = setInterval(function () {
        seconds++;
        stopwatch.innerHTML = createSeconds(seconds)
      }, 1000);
    }

    startButton.addEventListener("click", function () {
      startDiv.classList.add("click-effect-start");

      clearInterval(timer);
      startClock();

      backIconStart();
      StopEffectPause();
      StopEffectReset();
      startBorderEffect();
    });

    pauseButton.addEventListener("click", function () {
      pauseDiv.classList.add("click-effect-pause");

      clearInterval(timer);

      StopEffectStart();
      changeIconStart();
      StopEffectReset();
      stopBorderEffect();
    });

    resetButton.addEventListener("click", function () {
      resetDiv.classList.add("click-effect-reset");

      clearInterval(timer);
      stopwatch.innerHTML = "00:00:00";
      seconds = 0;

      StopEffectPause();
      StopEffectStart();
      stopBorderEffect();
      backIconStart();

      setTimeout(function () {
        resetDiv.classList.remove("click-effect-reset")
      }, 2000);
    });
  }

  clickButtons();
}
clock();
