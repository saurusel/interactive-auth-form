const loginForm = document.getElementById('loginForm');
const errorBox  = document.getElementById('error');

const VALID = { login:'user@example.com', password:'password' };

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const { login, password, remember } = loginForm;

  if (login.value.trim() === VALID.login && password.value === VALID.password) {
    remember.checked && localStorage.setItem('rememberLogin', login.value.trim());
    confetti({ spread: 70, origin: { y: 0.6 } });
    alert('Успех! Перенаправляем…');
    loginForm.reset();
    errorBox.textContent = '';
    return;
  }
  else {
    errorBox.hidden = false;
    errorBox.textContent = 'Неверная пара логин/пароль';
    password.value = '';
    password.focus();
  }
});
