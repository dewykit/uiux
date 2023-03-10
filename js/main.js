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


// see more 

const seeMoreBtn = document.getElementById('see-more-btn');
const hiddenContent = document.getElementById('hidden-content');

seeMoreBtn.addEventListener('click', function() {
  hiddenContent.style.display = 'block';
});