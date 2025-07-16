
  document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.querySelector('.login-btn');

    loginBtn.addEventListener('click', function (e) {
      e.preventDefault(); // prevent navigation
      loginBtn.classList.add('clicked');
    });
  });

