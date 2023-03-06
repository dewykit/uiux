/* -- Glow effect -- */

const blobs = document.querySelectorAll("#blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blobs.forEach(blob => {
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  });
}

// magic words 

let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 2000);
  }, index++ * (interval / 3))
}

// let timeouts = [],
// intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
// let index = 1;
  
// for(const star of document.getElementsByClassName("magic-star")) {
// timeouts.push(setTimeout(() => {  
// animate(star);
      
// intervals.push(setInterval(() => animate(star), 1000));
// }, index++ * 300));
// };
// }

// magic.onmouseleave = onMouseLeave = () => {
// for(const t of timeouts) clearTimeout(t);  
// for(const i of intervals) clearInterval(i);
  
// timeouts = [];
// intervals = [];
// }

// welcome page

const images = document.getElementsByClassName("image");

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;

  image.dataset.status = "active";

  last = { x, y };
}

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
}

const handleOnMove = e => {
  if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
    const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if(tail) tail.dataset.status = "inactive";
    
    globalIndex++;
  }
}

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);