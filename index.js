const header = document.getElementsByTagName('header')[0];
const images = document.querySelectorAll('.carousel-image');
let  currentImageIndex = 0; 

setInterval(() => {
  console.log('WORKS');

  images[currentImageIndex].classList.add('hidden');

  currentImageIndex++;
  
  if(currentImageIndex > 3) {
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.remove('hidden');
}, 5000);

window.addEventListener('scroll', () => {
  // check the window object scrollY prop for when it is greater than equal to 50.
  if(window.scrollY >= 50) {
    // toggle class to add active.
    header.classList.add('active');
  }
  else { 
    // toggle class to remove active if scrollY is less than 50. 
    header.classList.remove('active');
  }
});