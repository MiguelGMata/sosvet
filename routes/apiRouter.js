const express = require('express');
require('express-async-errors');
const User = require('../controlleurs/Users');
const Animal = require('../controlleurs/Animal');
const Veterinaires = require('../controlleurs/Veterinaires');
const Assureur = require('../controlleurs/Assureurs');
const Soin = require('../controlleurs/Soin');
const jwtoken = require('../middlewares/jwt');

exports.router = (function () {
  const apiRouter = express.Router();


  //, jwtoken.parseAuthorization

  apiRouter.route('/inscription').post(User.inscription);
  apiRouter.route('/connexion').post(User.connexion);
  apiRouter.route('/profil').get(User.profil);

  //--------------------------Routes Animal------------------------
  apiRouter.route('/animal').post(Animal.animalAdd);
  apiRouter.route('/animals').get(Animal.animals);
  apiRouter.route('/animal/:id').get(Animal.animal);
  apiRouter.route('/animal/:id').delete(Animal.animalDelete);
  apiRouter.route('/animal/:id').put(Animal.animalPut);

  //--------------------------Nouvelle Routes Animal------------------------
  apiRouter.route('/animal').get(Animal.userAnimal);

  //--------------------------Routes Veterinaires-------------------
  apiRouter.route('/veterinaires').get(Veterinaires.veterinaires);
  apiRouter.route('/veterinaire/:id').get(Veterinaires.veterinaire);

  //--------------------------Routes Assureur----------------------- 
  apiRouter.route('/assureur').post(Assureur.assureurAdd);
  apiRouter.route('/assureurs').get(Assureur.assureurs);
  apiRouter.route('/assureur/:id').get(Assureur.assureur);
  apiRouter.route('/assureur/:id').delete(Assureur.assureurDelete);
  apiRouter.route('/assureur/:id').put(Assureur.assureurPut);

  //--------------------------Routes Soin-------------------------- 
  apiRouter.route('/soin').post(Soin.soinAdd);
  apiRouter.route('/soins').get(Soin.soins);
  apiRouter.route('/soin/:id').get(Soin.soin);
  apiRouter.route('/soin/:id').delete(Soin.soinDelete);
  apiRouter.route('/soin/:id').put(Soin.soinPut);

  return apiRouter;
})();

