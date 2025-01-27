const words = [
    "darpan",
    'piyush',
    "aman",
    "sahil",
    "dushyant",
    "prerna",
    "bharti",
    "priyanshu",
    "paramveer",
    "param",
    "vishal",
    "echo",
    "psychology",
    "frontend"
    
];
let score = 0
let time = 5
let currentword = document.getElementById("current-word");
let wordinput = document.getElementById("word-input")
let scoredisplay = document.getElementById("score")
let timedisplay = document.getElementById("time")
let message = document.getElementById("message")
let highestscore = document.getElementById("highestscore")

window.addEventListener("DOMContentLoaded",function(){init()})

function init (){
    newwords(words);
    wordinput.addEventListener("input",startmatch);
    setInterval(countdown,1000)
    // highestscores();
    setInterval(checkstatus,5)
}

function newwords (words){
    currentword.textContent = words[Math.floor(Math.random()* words.length)]

}

function startmatch(e){
    if(e.target.value===currentword.textContent){
        currentword.textContent = words[Math.floor(Math.random()* words.length)]
        wordinput.value = ""
        score++
        scoredisplay.textContent = score

        time = 5

        message.textContent = "Correct!!!"

    
    }
}

function checkstatus(){
    if(time==0){
        message.textContent= "Gameover!!!"
        score = 0
        // location.reload()
        
    }
}

function countdown (){
    if(time>0){
    time --
    timedisplay.textContent=time    
    
    }

}

// function highestscores(){
//     highestscore.textContent= score

// } 