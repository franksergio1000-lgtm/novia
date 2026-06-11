function showPage(page){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document
.getElementById("page"+page)
.classList.add("active");

}

const noBtn =
document.getElementById("noBtn");

const yesBtn =
document.getElementById("yesBtn");

const question =
document.getElementById("question");

const phrases = [

"¿Estás segura? 🥺",
"Ayy mi corazoncito 💔",
"¿Pero estás segura? 😭",
"Batman estaría triste 🦇",
"Piénsalo otra vez ❤️",
"Frank se pondrá triste 😔",
"Una oportunidad 😭",
"No seas mala 🥺❤️"

];

let count = 0;

noBtn.addEventListener("mouseover",()=>{

const x =
Math.random()*300;

const y =
Math.random()*80;

noBtn.style.left =
x+"px";

noBtn.style.top =
y+"px";

noBtn.innerHTML =
phrases[count %
phrases.length];

count++;

yesBtn.style.transform =
`scale(${1+(count*0.1)})`;

if(count===3){

question.innerHTML =
"Mayly, piénsalo bien ❤️";

}

if(count===6){

question.innerHTML =
"Mi corazón está en tus manos 🥺";

}

if(count===9){

question.innerHTML =
"Prometo hacerte feliz ❤️";

}

});

yesBtn.addEventListener("click",()=>{

showPage(4);

for(let i=0;i<200;i++){

setTimeout(()=>{

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
Math.random()>0.5 ?
"❤️" :
"💖";

heart.style.left =
Math.random()*100+"vw";

heart.style.animationDuration =
(Math.random()*4+3)+"s";

document.body
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},i*30);

}

});

setInterval(()=>{

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=
Math.random()*100+"vw";

document.body
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},600);
