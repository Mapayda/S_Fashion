window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const imageContainer = document.querySelector('.image-container');
  
    // เมื่อเลื่อนสกอร์เกินความสูงของหน้าแรก
    if (scrollPosition > windowHeight * 0.5) {
      imageContainer.classList.add('scrolled');
    } else {
      imageContainer.classList.remove('scrolled');
    }
  });
