

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el))



  document.querySelectorAll('.video-container video').forEach(vid => {
    vid.onclick = () => {
      document.querySelector('.popup-video').style.display = "block";
      document.querySelector('.popup-video video').src = vid.getAttribute('src');
      document.querySelector('.popup-video video').load()
    }
  });
  
  document.querySelector('.popup-video span').onclick = () => {
    document.querySelector('.popup-video').style.display = 'none';
    document.querySelector('.popup-video video').pause()
    document.querySelector('.popup-video video').currentTime = 0
    
  }


document.querySelectorAll('.video-containerVertical video').forEach(vid => {
  vid.onclick = () => {
    document.querySelector('.popup-videoVertical').style.display = "block";
    document.querySelector('.popup-videoVertical video').src = vid.getAttribute('src');
    document.querySelector('.popup-videoVertical video').load()
  }
});

document.querySelector('.popup-videoVertical span').onclick = () => {
  document.querySelector('.popup-videoVertical').style.display = 'none';
  document.querySelector('.popup-videoVertical video').pause()
  document.querySelector('.popup-videoVertical video').currentTime = 0
  
}