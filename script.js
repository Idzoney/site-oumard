// script.js

// Ajout d'une confirmation avant de rediriger sur les modules
document.querySelectorAll('.module').forEach((module) => {
    module.addEventListener('click', (e) => {
        const confirmation = confirm('Souhaitez-vous vraiment accéder à cette page de compétence ?');
        if (!confirmation) {
            e.preventDefault(); // Annule la redirection si l'utilisateur clique sur Annuler
        }
    });
});

// Affichage du formulaire de connexion
function showLogin() {
    document.getElementById('login-container').classList.add('active');
    document.getElementById('signup-container').classList.remove('active');
    document.querySelector('.overlay').classList.add('active');
}

// Affichage du formulaire d'inscription
function showSignup() {
    document.getElementById('signup-container').classList.add('active');
    document.getElementById('login-container').classList.remove('active');
    document.querySelector('.overlay').classList.add('active');
}

// Masquer les formulaires
function hideForms() {
    document.getElementById('login-container').classList.remove('active');
    document.getElementById('signup-container').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

// Gestion de la connexion
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert(`Bienvenue sur SkillShare Local, ${email} ! Connexion réussie.`);
        hideForms();
    } else {
        alert('Veuillez remplir tous les champs pour vous connecter.');
    }
}

// Gestion de l'inscription
function signup() {
    const firstname = document.getElementById('signup-firstname').value;
    const lastname = document.getElementById('signup-lastname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (firstname && lastname && email && password) {
        alert(`Merci pour votre inscription, ${firstname} ${lastname} ! Rejoignez SkillShare Local pour découvrir et partager des compétences.`);
        hideForms();
    } else {
        alert('Tous les champs sont obligatoires pour l\'inscription.');
    }
}

// Gestion du formulaire de contact
document.querySelector('.submit-button').addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert('Merci pour votre message ! Nous vous contacterons sous peu.');
});

// Gestion de la fermeture des formulaires via l'overlay
document.querySelector('.overlay').addEventListener('click', hideForms);

// Animation de bienvenue sur la page
window.onload = function () {
    alert('Bienvenue sur SkillShare Local ! Explorez et partagez vos compétences avec la communauté.');
};
