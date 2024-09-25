const express = require('express');
const models = require('../models');
const moment = require('moment');
const jwttoken = require('../middlewares/jwt');
const { UnauthorizedError } = require('../helpers/errors');

const { User } = models;
const { Animal } = models;

module.exports = {

    animalAdd: async (req, res, next) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        //console.log(decoded);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        //console.log('tutu', user.id)
        const animalData = {
            userId: user.id,
            nom: req.body.nom,
            espece: req.body.espece,
            race: req.body.race,
            couleur: req.body.couleur,
            sexe: req.body.sexe,
            poids: req.body.poids,
            sterilisation: req.body.sterilisation,
            information: req.body.information,
            date_naissance: req.body.date_naissance,
            //createAt: moment().add(5, 'minutes').unix() date_naissance: moment().unix(),
        }

        if (!animalData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })

        } else {
            await models.Animal.create(animalData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },

    animals: async (req, res) => {
        await models.Animal.findAll({
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],
        })
            .then(animals => {
                res.json(animals)
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },

    animal: async (req, res, next) => {
        await models.Animal.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],
        })
            .then(animal => {
                if (animal) {
                    res.json(animal)
                } else {
                    res.send("L'animal n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },


    animalDelete: async (req, res, next) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        //console.log(decoded);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        console.log('tutu', user.id)
        await models.Animal.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Animal supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },

    animalPut: async (req, res, next) => {
        {
            const { id } = req.params;
            const animalData = {
                nom: req.body.nom,
                espece: req.body.espece,
                race: req.body.race,
                couleur: req.body.couleur,
                sexe: req.body.sexe,
                poids: req.body.poids,
                sterilisation: req.body.sterilisation,
                information: req.body.information,
                date_naissance: req.body.date_naissance,
            }
            if (!animalData) {
                res.status(400)
                res.json({
                    error: 'Mauvaises données'
                })
            } else
                await models.Animal.update(
                    animalData,
                    { where: { id } }
                )
                    .then(() => {
                        res.json({ status: 'Animal mise à jour!' })
                    })
                    //.catch(err => handleError(err))
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        }
    },
    /********************************************************** Nouvelle Code **************************************************************************/

    userAnimal: async (req, res) => {

        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        //console.log(decoded);
        if (decoded < 0) {
            throw new UnauthorizedError(
                'Non autorisé',
                'Vous devez être connecté pour accéder à cette ressource.'
            );
        };
        const user = await models.User.findByPk(decoded);
        await models.User.findOne({
            where: {
                id: user.id
            },
            include: [
                {
                    model: Animal,
                    as: "Animals",
                    attributes: [
                        "id",
                        "nom",
                        "espece",
                        "race",
                        "couleur",
                        "sexe",
                        "poids",
                        "sterilisation",
                        "information",
                        "date_naissance",
                    ],
                },
            ],
        })
            .then(user => {
                if (user) {
                    res.json(user)
                } else {
                    res.send("L'utilisateur n'existe pas")
                }
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    }
}

