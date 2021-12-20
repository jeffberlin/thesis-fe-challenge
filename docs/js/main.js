// Handles hamburger/.nav-bars responsive menu
function openNav() {
  if (window.innerWidth <= 768) {
    const n = document.getElementById('collapseNav');
    if (n.className === 'navbar-list') {
      n.className += ' responsive';
    } else {
      n.className = 'navbar-list';
    }
  }
}

// Handles hide/show of password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon, but no image/icon available for this
  // this.classList.toggle('new_icon_would_go_here');
});
