// Array Of Words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
  ];
  // Setting Levels
  const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
  };
  
  // Default Level
  let defaultLevelName = "Easy"; // Change Level From Here
  let defaultLevelSeconds = lvls[defaultLevelName];
  
  // Catch Selectors
  let startButton = document.querySelector(".start");
  let lvlNameSpan = document.querySelector(".message .lvl");
  let secondsSpan = document.querySelector(".message .seconds");
  let theWord = document.querySelector(".the-word");
  let upcomingWords = document.querySelector(".upcoming-words");
  let input = document.querySelector("#input");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .got");
  let scoreTotal = document.querySelector(".score .total");
  let finishMessage = document.querySelector(".finish");
  
  // Setting Level Name + Seconds + Score
  lvlNameSpan.innerHTML = defaultLevelName;
  secondsSpan.innerHTML = defaultLevelSeconds;
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  scoreTotal.innerHTML = words.length;

  // Remove Default On Paste For Input
  input.onpaste = () => {
     return false 
  }

  // Start Game
  startButton.onclick = (eo) => {
    eo.target.remove()
    generatorGame()
    input.focus()
  }

  function generatorGame() {
    
    // Show Random Word For Array
    let randomWord = Math.floor(Math.random() * words.length)
    theWord.innerText = words[randomWord]

    // Delete This Word For Array
    words.splice(words.indexOf(randomWord),1)

    // Empty upcomingWords
    upcomingWords.innerHTML = ""

    // Show The Words For Array
    for (let i = 0; i < words.length; i++) {
      upcomingWords.innerHTML += `<div>${words[i]}</div>`
    }

    // Control Time
    controlTime()
  }
  
  function controlTime() {
    // Default Seconds Number In The Level
    timeLeftSpan.innerHTML = defaultLevelSeconds;

    // Control Time Left Span
      let timed = setInterval(() => {
        timeLeftSpan.innerText--
        if(timeLeftSpan.innerText === "0") {
          // Stop Timed
          clearInterval(timed)
          // check User Reponse
          if (input.value.toLowerCase() == theWord.innerText.toLowerCase()) {
            if (upcomingWords.childElementCount == 0) {
              input.blur()
            finishMessage.innerHTML = `<div class="good">Game Finish</div>`
            } else {
              // Restart GenertorGame() Function
            setTimeout(() => {
              scoreGot.innerText++
              input.value = ""
              generatorGame()
            }, 1000);
            }
            

          } else {
            input.blur()
            finishMessage.innerHTML = `<div class="bad">Game Over</div>`
          }
          
        }
      }, 1000);
  }
  

  