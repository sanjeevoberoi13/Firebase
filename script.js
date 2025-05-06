function toggleRegister() {
  document.getElementById('auth-box').classList.add('hidden');
  document.getElementById('register-box').classList.remove('hidden');
}

function toggleLogin() {
  document.getElementById('register-box').classList.add('hidden');
  document.getElementById('auth-box').classList.remove('hidden');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Login successful!';
    })
    .catch(error => {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = error.message;
    });
}

function register() {
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById('regMessage').style.color = 'green';
      document.getElementById('regMessage').textContent = 'Registration successful!';
    })
    .catch(error => {
      document.getElementById('regMessage').style.color = 'red';
      document.getElementById('regMessage').textContent = error.message;
    });
}
