/* ================= TYPING EFFECT ================= */

const nameText = "Anjali";
const roleText = "Full Stack Developer";

let nameIndex = 0;
let roleIndex = 0;
let isDeleting = false;

function typeEffect() {
  const nameEl = document.getElementById("name");
  const roleEl = document.getElementById("role");

  if (!nameEl || !roleEl) return;

  if (!isDeleting) {
    if (nameIndex < nameText.length) {
      nameEl.innerHTML += nameText.charAt(nameIndex);
      nameIndex++;
    } 
    else if (roleIndex < roleText.length) {
      roleEl.innerHTML += roleText.charAt(roleIndex);
      roleIndex++;
    } 
    else {
      setTimeout(() => isDeleting = true, 1200);
    }
  } 
  else {
    if (roleIndex > 0) {
      roleEl.innerHTML = roleText.substring(0, roleIndex - 1);
      roleIndex--;
    } 
    else if (nameIndex > 0) {
      nameEl.innerHTML = nameText.substring(0, nameIndex - 1);
      nameIndex--;
    } 
    else {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

window.addEventListener("load", typeEffect);



/* ================= MOBILE MENU ================= */

function toggleMenu(){
  const nav = document.getElementById("navMenu");
  if(nav){
    nav.classList.toggle("active");
  }
}



/* ================= SCROLL REVEAL (SMOOTH) ================= */

const projects = document.querySelectorAll(".unified-project");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

projects.forEach(project=>{
  observer.observe(project);
});