import { isValid } from './validation';
const loginForm = document.getElementById(
  'loginForm',
) as HTMLFormElement | null;
const errorBox = document.getElementById(
  'error',
) as HTMLParagraphElement | null;

declare const confetti: (opts?: Record<string, unknown>) => void;

if (loginForm && errorBox) {
  loginForm.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const login = target.login as HTMLInputElement;
    const password = target.password as HTMLInputElement;
    const remember = target.remember as HTMLInputElement;

    if (isValid(login.value.trim(), password.value)) {
      if (remember.checked) {
        localStorage.setItem('rememberLogin', login.value.trim());
      }
      confetti({ spread: 70, origin: { y: 0.6 } });
      alert('Успех! Перенаправляем…');
      target.reset();
      errorBox.textContent = '';
      errorBox.hidden = true;
      return;
    }
    errorBox.textContent = 'Неверная пара логин/пароль';
    errorBox.hidden = false;
    password.value = '';
    password.focus();
  });
}
