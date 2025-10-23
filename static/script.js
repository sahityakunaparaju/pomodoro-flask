// Timer elements
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let statusText = document.getElementById('statusText');

let modes = ["pomodoro", "shortBreak", "pomodoro", "longBreak"]; // cycle sequence
let cycleIndex = 0; // index in cycle

let pomodoroTime = 25;
let shortBreakTime = 5;
let longBreakTime = 15;

let currentMinutes = pomodoroTime;
let currentSeconds = 0;
let timerInterval;
let timerRunning = false;

// Task elements
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

// Colors
const colors = {
    pomodoro: "#d75a70",
    shortBreak: "#6ec1e4",
    longBreak: "#4caf50"
};

// Set colors
function setColors(mode){
    let container = document.querySelector('.container');
    let navButtons = document.querySelectorAll('.nav button');
    container.style.backgroundColor = colors[mode];
    startBtn.style.backgroundColor = colors[mode];
    navButtons.forEach(btn => btn.style.backgroundColor = "#e0e0e0");
    document.getElementById(mode + "Btn").style.backgroundColor = colors[mode];
}

// Set Timer
function setTimer(minutes, status, mode){
    clearInterval(timerInterval);
    timerRunning = false;
    startBtn.textContent = "START";
    currentMinutes = minutes;
    currentSeconds = 0;
    timerDisplay.textContent = `${currentMinutes.toString().padStart(2,'0')}:${currentSeconds.toString().padStart(2,'0')}`;
    statusText.textContent = status;
    setColors(mode);
}

// Start/Pause
startBtn.addEventListener('click', () => {
    if(!timerRunning){
        timerRunning = true;
        startBtn.textContent = "PAUSE";
        timerInterval = setInterval(runTimer, 1000);
    } else {
        timerRunning = false;
        startBtn.textContent = "START";
        clearInterval(timerInterval);
    }
});

// Timer function
function runTimer(){
    if(currentSeconds === 0){
        if(currentMinutes === 0){
            clearInterval(timerInterval);
            timerRunning = false;
            startBtn.textContent = "START";

            let audio = new Audio("https://www.soundjay.com/buttons/sounds/beep-07.mp3");
            audio.play();

            // Decide next timer based on cycle
            cycleIndex = (cycleIndex + 1) % modes.length;
            let nextMode = modes[cycleIndex];
            if(nextMode === "pomodoro") {
                alert("Time to focus! Pomodoro starts now.");
                setTimer(pomodoroTime,"Time to focus!","pomodoro");
            } else if(nextMode === "shortBreak") {
                alert("Hydrate Yourself! Relax a bit.");
                setTimer(shortBreakTime,"Hydrate Yourself!","shortBreak");
            } else if(nextMode === "longBreak") {
                alert("Long break time! Relax more.");
                setTimer(longBreakTime,"Long Break! Relax","longBreak");
            }

            return;
        }
        currentMinutes--;
        currentSeconds = 59;
    } else {
        currentSeconds--;
    }
    timerDisplay.textContent = `${currentMinutes.toString().padStart(2,'0')}:${currentSeconds.toString().padStart(2,'0')}`;
}

// Navigation buttons
document.getElementById('pomodoroBtn').addEventListener('click', () => { cycleIndex = 0; setTimer(pomodoroTime, "Time to focus!", "pomodoro"); });
document.getElementById('shortBreakBtn').addEventListener('click', () => { cycleIndex = 1; setTimer(shortBreakTime, "Hydrate Yourself!", "shortBreak"); });
document.getElementById('longBreakBtn').addEventListener('click', () => { cycleIndex = 3; setTimer(longBreakTime, "Long Break! Relax", "longBreak"); });

// Prev / Next buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    cycleIndex = (cycleIndex - 1 + modes.length) % modes.length;
    let mode = modes[cycleIndex];
    if(mode==="pomodoro") setTimer(pomodoroTime,"Time to focus!",mode);
    else if(mode==="shortBreak") setTimer(shortBreakTime,"Hydrate Yourself!",mode);
    else setTimer(longBreakTime,"Long Break! Relax",mode);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    cycleIndex = (cycleIndex + 1) % modes.length;
    let mode = modes[cycleIndex];
    if(mode==="pomodoro") setTimer(pomodoroTime,"Time to focus!",mode);
    else if(mode==="shortBreak") setTimer(shortBreakTime,"Hydrate Yourself!",mode);
    else setTimer(longBreakTime,"Long Break! Relax",mode);
});

// Tasks and dropdown same as before
document.getElementById('addTaskBtn').addEventListener('click',()=>{
    let taskText = taskInput.value.trim();
    if(taskText!==""){
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = taskText;
        let completeBtn = document.createElement('button');
        completeBtn.textContent = "✔";
        completeBtn.style.marginLeft = "10px";
        completeBtn.addEventListener('click',()=>{
            span.style.textDecoration = span.style.textDecoration==="line-through"?"":"line-through";
        });
        li.appendChild(span);
        li.appendChild(completeBtn);
        taskList.appendChild(li);
        taskInput.value="";
    }
});
function clearFinishedTasks(){
    Array.from(taskList.children).forEach(li=>{
        if(li.querySelector('span').style.textDecoration==='line-through'){
            taskList.removeChild(li);
        }
    });
    dropdownMenu.style.display='none';
}
function clearAllTasks(){
    taskList.innerHTML="";
    dropdownMenu.style.display='none';
}

// Dropdown
let menuBtn = document.getElementById('menuBtn');
let dropdownMenu = document.getElementById('dropdownMenu');
menuBtn.addEventListener('click',()=>dropdownMenu.style.display = dropdownMenu.style.display==='block'?'none':'block');
document.addEventListener('click',function(event){
    if(!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)){
        dropdownMenu.style.display='none';
    }
});

// Settings (same as before)
let settingsBtn = document.getElementById('settingsBtn');
let settingsPopup = document.getElementById('settingsPopup');
let closeSettingsBtn = document.getElementById('closeSettingsBtn');
let saveSettingsBtn = document.getElementById('saveSettingsBtn');

settingsBtn.addEventListener('click',()=>settingsPopup.style.display='block');
closeSettingsBtn.addEventListener('click',()=>settingsPopup.style.display='none');

saveSettingsBtn.addEventListener('click',()=>{
    let pTime = parseInt(document.getElementById('pomodoroInput').value);
    let sTime = parseInt(document.getElementById('shortBreakInput').value);
    let lTime = parseInt(document.getElementById('longBreakInput').value);

    if(pTime>0) pomodoroTime = pTime;
    if(sTime>0) shortBreakTime = sTime;
    if(lTime>0) longBreakTime = lTime;

    cycleIndex = 0; // reset cycle to Pomodoro after changing times
    setTimer(pomodoroTime,"Time to focus!","pomodoro");
    settingsPopup.style.display='none';
});
