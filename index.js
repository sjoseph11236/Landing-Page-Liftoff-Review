const header = document.getElementsByTagName('header')[0];


window.addEventListener('scroll', () => {
 
  console.log("TCL: scrollY ", scrollY);
  if(window.scrollY >= 50) {
    header.classList.add('active');
  }
  else { 
    header.classList.remove('active');
  }
});