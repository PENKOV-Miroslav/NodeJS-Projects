const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const path = require('path');

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuration des fichiers statiques (CSS, images, etc.)
app.use('/contenu', express.static(path.join(__dirname, 'contenu')));

// Middleware pour traiter les données du formulaire
app.use(express.urlencoded({ extended: true }));

// Route pour la page d'accueil
app.get('/', userController.home);

// Route pour traiter la soumission du formulaire
app.post('/save', userController.save);

// Route pour supprimer un utilisateur (utilisez /delete/:userId)
app.post('/delete/:userId', userController.delete);

// Lancement du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
