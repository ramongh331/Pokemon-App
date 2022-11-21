// Movement Animation to happen
const card = document.querySelector(".cardBox");
const container = document.querySelector(".container");

// Moving Animation Event
card.addEventListener("mousemove", (e) => {
  // console.log(e.pageX, e.pageY)
  let xAxis = ((window.innerWidth / 2) - e.pageX) / 8;
  let yAxis = ((window.innerHeight / 2) - e.pageY) / 11;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
