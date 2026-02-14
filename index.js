function nextStep(){
  const steps = [
    document.getElementById("patient"),
    document.getElementById("appointment"),
    document.getElementById("doctor"),
    document.getElementById("confirm")
  ];

  steps.forEach(s => s.classList.remove("active"));

  steps[1].classList.add("active");
  setTimeout(()=>steps[2].classList.add("active"),1200);
  setTimeout(()=>steps[3].classList.add("active"),2400);
}