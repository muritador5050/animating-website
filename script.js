document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const boxes = document.querySelectorAll('#rect');

  //randomColors
  const colors = ['white', 'lime', 'purple', 'white', 'black'];
  gsap.to('#randomColor', {
    duration: 4,
    ease: 'linear',
    repeat: -1,
    yoyo: true,
    backgroundImage: `linear-gradient(to left top, ${colors})`,
  });

  //line
  const line = gsap.timeline({
    scrollTrigger: {
      trigger: '#randomColor',
      animation: line,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: true,
    },
  });
  line.to('#line', { clipPath: '0 0 100% 0' });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section',
      start: 'top top',
      end: '+=1500 bottom',
      pin: true,
      scrub: 1,
      markers: true,
    },
  });

  tl.to('#circle', {
    scale: 7,
    duration: 4,
    ease: 'none',
    clipPath: 'inset(0 0 50% 0)',
  });
});
