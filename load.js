window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(function() {
      loader.classList.add('fade-out');
      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000);
    }, 1500); 
  });
  
