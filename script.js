const vidContainer=document.querySelector('.vide-container');
const playerContainer=document.querySelector('.player-container');
const soundAButton=document.querySelector('#sound-a');
const soundBButton=document.querySelector('#sound-b');
const smallerMinsButton=document.querySelector('#smaller-mins');
const mediumMinsButton=document.querySelector('#medium-mins');
const longMinsButton=document.querySelector('#long-mins');
const timeDisplay=document.querySelector('.time-display');
const playButton=document.querySelector('.play');

soundAbutton.addEventListener('click',playSoundA);
soundBbutton.addEventListener('click',playSoundB);
smallerMinsButton.addEventListener('click',setTimeTo2Mins);
mediumMinsButton.addEventListener('click',setTimeTo5Mins);
longMinsButton.addEventListener('click',setTimeTo10Mins);
playButton.addEventListener('click',togglePlay);

function playSoundA(){
	const audio=new Audio('');
	audio.play();
}