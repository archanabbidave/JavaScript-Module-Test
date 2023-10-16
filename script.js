const handOptions = {
    "rock": "rockimage.png",
    "paper": "paperimg.png",
    "scissor": "simage.png"
  }

  const timerElement = document.getElementById("timer");
  let countdown = 0; 
  let timerInterval;
function updateTimer() {
  timerElement.textContent = countdown;

  if (countdown <= 0) {
      clearInterval(timerInterval);
      countdown = 0;
  } else {
      countdown--;
  }
}


  let uscore = 0;
  let cscore=0;

  const pickUserHand = (hand) => {
    let hands = document.querySelector(".choices");
    hands.style.display = "none";
    countdown = 3; 
    clearInterval(timerInterval); 
    updateTimer(); 
    timerInterval = setInterval(updateTimer, 1000); 
    closerule();
  
    let contest = document.querySelector(".result");
    contest.style.display = "flex";
  
    
    document.getElementById("userpicimage").src = handOptions[hand];
    setTimeout(() => {
    let pc=document.querySelector("#pcpickimage");
    pc.style. visibility=" visible";
    let winnerbox=document.querySelector(".win-result");
    winnerbox.style.display="flex";
    let counter=document.querySelector(".pulsecontainer");
    counter.style.visibility="hidden";
   
    pickComputerHand(hand);}
    ,3000);
  };
  
  const pickComputerHand = (hand) => {
      let hands = ["rock", "paper", "scissor"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
     
      document.getElementById("pcpickimage").src = handOptions[cpHand]
      
      referee(hand, cpHand);
  };
  
  const referee = (userHand, cpHand) => {

    
    if (userHand == "paper" && cpHand == "scissor") {
      setDecision("YOU LOST");
      increaseScore("cscore");
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN");
      increaseScore("uscore");
     
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("TIE UP");
    }
    if (userHand == "rock" && cpHand == "scissor") {
      setDecision("YOU WIN");
      increaseScore("uscore");
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOST");
      increaseScore("cscore");
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "scissor") {
      setDecision("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "rock") {
      setDecision("YOU LOST");
      increaseScore("cscore");
    }
    if (userHand == "scissor" && cpHand == "paper") {
      setDecision("YOU WIN");
      increaseScore("uscore");
    } 
  
};
  
  const restartGame = () => {
    let contest = document.querySelector(".result");
    contest.style.display = "none";
    let pc=document.querySelector("#pcpickimage");
    pc.style. visibility=" hidden";
    let hands = document.querySelector(".choices");
    hands.style.display = "flex";
    let winnerbox=document.querySelector(".win-result");
    winnerbox.style.display="none";
    let nextbutton=document.querySelector(".next-button");
    nextbutton.style.display="none";
    let counter=document.querySelector(".pulsecontainer");
    counter.style.visibility="visible";
    counter.style.background="#f8f40c32";
    let texthide=document.querySelector(".waitpc");
    texthide.style.display="flex";
    pulsevisibilityoff();
    pulseoff();
    
  }
  
  const setDecision = (decision) => {
    document.querySelector(".winresult h1").innerText = decision;
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    let currentScore = parseInt(localStorage.getItem('uscore')) || 0;
    document.getElementById('uscore').textContent = currentScore;
    let ccurrent=parseInt(localStorage.getItem('cscore')) || 0;
    document.getElementById('cscore').textContent = ccurrent;

});

  


function increaseScore(score) {
    
    let currentScore = parseInt(localStorage.getItem('uscore')) || 0;
    
    let ccurrentScore = parseInt(localStorage.getItem('cscore')) || 0;
 
    if(score=="uscore"){
        let nextbutton=document.querySelector(".next-button");
        nextbutton.style.display="flex";
        currentScore++;
        localStorage.setItem('uscore', currentScore);
        
        document.getElementById('uscore').textContent = currentScore;
        pulsevisibilityon();
    }
   
    else{
        ccurrentScore++;
        localStorage.setItem('cscore', ccurrentScore);

    document.getElementById('cscore').textContent = ccurrentScore;
     pulseon();
    }
    
}

function resetScore() {
  
  localStorage.removeItem('uscore');
  localStorage.removeItem('cscore');
  
  document.getElementById('uscore').textContent = 0;
  document.getElementById('cscore').textContent = 0;

}

function openrule(){
  let ruleopen=document.querySelector(".rules-container");

  ruleopen.style.display="flex";
}

function closerule(){
  let ruleopen=document.querySelector(".rules-container");

  ruleopen.style.display="none";
}


function pulsevisibilityon(){
  let pulse=document.querySelector(".pulsecontainer1>span");
  let container=document.querySelector(".pulsecontainer1");
  container.style.visibility="visible";
  pulse.style.visibility="visible";
}
function pulsevisibilityoff(){
  let pulse=document.querySelector(".pulsecontainer1>span");
  let container=document.querySelector(".pulsecontainer1");
  container.style.visibility="hidden";
  pulse.style.visibility="hidden";
}

function pulseon(){
  
  let pulse=document.querySelector(".pulsecontainer>span");
  let container=document.querySelector(".pulsecontainer");
  container.style.visibility="visible";
  pulse.style.visibility="visible";
  container.style.background="rgba(17, 174, 3, 0.45)";
  let texthide=document.querySelector(".waitpc");
  texthide.style.display="none";
  
}

function pulseoff(){
  let pulse=document.querySelector(".pulsecontainer>span");
  pulse.style.visibility="hidden";
}