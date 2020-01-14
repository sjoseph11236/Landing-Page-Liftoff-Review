const header = document.getElementsByTagName('header')[0];


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