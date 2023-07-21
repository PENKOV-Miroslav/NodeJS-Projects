// controllers/userController.js
const User = require('../models/User');

// Contrôleur pour la page d'accueil
const homeController = async (req, res) => {
  try {
    const users = await User.getAll();
    res.render('index', { users });
  } catch (error) {
    console.error(error); // Affiche l'erreur dans la console du serveur
    res.status(500).send('Erreur lors de la récupération des utilisateurs depuis le contrôleur');
  }
};

// Contrôleur pour traiter la soumission du formulaire
const saveController = async (req, res) => {
  const { name, email } = req.body;
  const user = new User(name, email);
  try {
    const userId = await user.save();
    console.log(`Utilisateur enregistré avec l'ID : ${userId}`);
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Erreur lors de l\'enregistrement de l\'utilisateur');
  }
};

// Contrôleur pour supprimer un utilisateur
const deleteController = async (req, res) => {
    const userId = req.params.userId;
    try {
      await User.delete(userId);
      console.log(`Utilisateur avec l'ID ${userId} supprimé`);
      res.redirect('/');
    } catch (error) {
      res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    }
  };
  
  module.exports = {
    home: homeController,
    save: saveController,
    delete: deleteController,
  };
