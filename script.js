// ==============================
// DWANGU COUNTDOWN
// ==============================

// Set your launch date.
// Change the year if needed.
const launchDate = new Date("July 20, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown(){

const now = new Date().getTime();

const distance = launchDate - now;

if(distance <= 0){

timer.innerHTML =
"<h2>🎉 WE ARE NOW LIVE! 🎉</h2>";

return;

}

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

timer.innerHTML =
`
<div class="count-box">

<div>
<h1>${days}</h1>
<p>Days</p>
</div>

<div>
<h1>${hours}</h1>
<p>Hours</p>
</div>

<div>
<h1>${minutes}</h1>
<p>Minutes</p>
</div>

<div>
<h1>${seconds}</h1>
<p>Seconds</p>
</div>

</div>
`;

}

setInterval(updateCountdown,1000);

updateCountdown();


// ==============================
// SCROLL ANIMATION
// ==============================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// ==============================
// IMAGE HOVER EFFECT
// ==============================

const images =
document.querySelectorAll(".images img");

images.forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});


// ==============================
// NAVIGATION HIGHLIGHT
// ==============================

const links =
document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(a=>a.classList.remove("active"));

link.classList.add("active");

});

});
