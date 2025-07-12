
  function changeShot(imgName) {
      document.getElementById('main-shot').src = imgName;
      document.getElementById('shot-description').textContent = imgName.split('.')[0].replace('-', ' ');
    }

