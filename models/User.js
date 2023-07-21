// models/User.js
const db = require('../db');


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  async save() {
    try {
      const result = await db.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [this.name, this.email]
      );
      return result.insertId;
    } catch (error) {
      throw new Error('Erreur lors de l\'enregistrement de l\'utilisateur');
    }
  }
  
//liste des inscrit
static async getAll() {
    try {
      const [rows] = await db.query('SELECT * FROM users');
      console.log('Résultat de la requête:', rows); // Vérifiez les résultats de la requête
      return rows;
    } catch (error) {
      console.error('Erreur de la requête:', error); // Affichez l'erreur dans la console
      throw new Error('Erreur lors de la récupération des utilisateurs depuis la table Users');
    }
  }

  //methode de suppression
  static async delete(userId) {
    try {
      await db.query('DELETE FROM users WHERE id = ?', [userId]);
    } catch (error) {
      throw new Error('Erreur lors de la suppression de l\'utilisateur');
    }
  }
  
}

module.exports = User;