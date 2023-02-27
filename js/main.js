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