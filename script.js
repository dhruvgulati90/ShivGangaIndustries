// ✅ Typewriter Effect
let i = 0;
const txt = '35 Years of Legacy and Excellence';
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("lpfirstinfo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function observeElements() {
  const gradeSets = document.querySelectorAll('.grade-set');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay based on index (staggered effect)
        setTimeout(() => {
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.opacity = '1';
        }, index * 200); // 200ms delay between each set

        // Stop observing so it doesn't animate again
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  gradeSets.forEach(set => {
    set.style.transform = 'translateX(-200px)';
    set.style.opacity = '0';
    set.style.transition = 'all 0.8s ease-in-out';
    observer.observe(set);
  });
}

window.onload = () => {
  typeWriter();
  observeElements();
};


