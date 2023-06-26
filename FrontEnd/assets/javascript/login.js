const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.token !== undefined) {
                localStorage.setItem("token", data.token);
                // Rediriger l'utilisateur vers une autre page
                window.location.href = 'index.html';
            } else {
                // Afficher un message d'erreur à l'utilisateur
                alert('Erreur dans l’identifiant ou le mot de passe.');
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
        });

});
