const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
console.log(email);

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
            console.log(data);
            // Gérer la réponse du backend
            if (data.token !== undefined) {
                console.log(data.token)
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
