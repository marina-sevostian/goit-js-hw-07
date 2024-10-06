const registerForm = document.querySelector('form.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert(`All form fields must be filled in`);
  }
  const userInfo = {
    email: email.trim(),
    Password: password.trim(),
  };
  console.log(userInfo);
  form.reset();
}
