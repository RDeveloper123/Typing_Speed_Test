
let button = document.querySelector("#btn");
let textArea = document.querySelector("#textarea");
let message = document.querySelector("#message");

const setData = [
  "The evidence used to allegedly incarcerate the 16 persons in the Bhima Koregaon",
  "case was “likely to have been implanted remotely through a hacker-for-hire mercenary gang infrastructure that has clients all over the world, but whose epicentre is in India, a new book has claimed",
  "The mercenary hacker gang, headquartered in India, remotely implanted evidence, according to LSE professor’s book",
  "cites cybersecurity researchers to claim gang’s connection to a Pune police officer",
];

let startTime;
let endTime;





const playGame = () => {
  let random = Math.floor(Math.random() * setData.length);

  message.innerHTML = setData[random];
  btn.innerHTML="Submit";
 

  let date = new Date();
  startTime = date.getTime();
};

const wordCounter = (totalWords) => {
  let response = totalWords.split(" ").length;
  return response;
};

const endGame = () => {
  btn.innerHTML = "Start";

  let date = new Date();
  endTime = date.getTime();

  let totalTime = (endTime - startTime) / 1000;

  let totalWords = textArea.value;

  let wordCount = wordCounter(totalWords); // call function

  let speed = Math.round((wordCount / totalTime) * 60);

  message.innerHTML = `You are typed words are ${speed} per minute.`;
  btn.disabled = true;

  setInterval(() => {
    message.innerHTML = "";
    btn.disabled = false;
    message.style.backgroundColor="transparent";
  }, 50 * 1000);

  textArea.value = "";
};
button.addEventListener("click", function () {
  if (this.innerHTML == "Start") {
    textArea.disabled = false;
   message.style.backgroundColor="White";

    playGame();
  } else if (this.innerHTML == "Submit" && textArea.value.length > 0) {
    
    textArea.disabled = true;
    
    endGame();
  }
});

const refresh=()=>{
 textArea.value="";
 textArea.disabled=true;
}
