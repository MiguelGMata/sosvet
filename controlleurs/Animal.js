const express = require('express');
const models = require('../models');
const moment = require('moment');
const jwttoken = require('../middlewares/jwt');
const { UnauthorizedError } = require('../helpers/errors');

const { User, Animal } = models;

module.exports = {

    animalAdd: async (req, res, next) => {
        try {
            var headerAuth = req.headers['authorization'];
            const decoded = jwttoken.getUserId(headerAuth);

            if (decoded < 0) {
                throw new UnauthorizedError(
                    'Non autorisé',
                    'Vous devez être connecté pour accéder à cette ressource.'
                );
            }

            const user = await User.findByPk(decoded);
            if (!user) {
                return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
            }

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
            };

            if (!animalData.nom || !animalData.espece) {
                return res.status(400).json({ success: false, message: 'Mauvaises données: nom et espece requis.' });
            }

            const newAnimal = await Animal.create(animalData);
            res.status(201).json({ success: true, data: newAnimal });

        } catch (error) {
            next(error);
        }
    },

    animals: async (req, res, next) => {
        try {
            const animals = await Animal.findAll({
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: ["id", "first_name", "last_name"],
                    },
                ],
            });
            res.json({ success: true, data: animals });
        } catch (error) {
            next(error);
        }
    },

    animal: async (req, res, next) => {
        try {
            const animal = await Animal.findOne({
                where: { id: req.params.id },
                include: [
                    {
                        model: User,
                        as: "user",
                        attributes: ["id", "first_name", "last_name"],
                    },
                ],
            });

            if (!animal) {
                return res.status(404).json({ success: false, message: "L'animal n'existe pas." });
            }

            res.json({ success: true, data: animal });
        } catch (error) {
            next(error);
        }
    },

    animalDelete: async (req, res, next) => {
        try {
            var headerAuth = req.headers['authorization'];
            const decoded = jwttoken.getUserId(headerAuth);

            if (decoded < 0) {
                throw new UnauthorizedError(
                    'Non autorisé',
                    'Vous devez être connecté pour accéder à cette ressource.'
                );
            }

            const user = await User.findByPk(decoded);
            if (!user) {
                return res.status(404).json({ success: false, message: 'Utilisateur non trouvé.' });
            }

            const result = await Animal.destroy({
                where: { id: req.params.id }
            });

            if (result === 0) {
                return res.status(404).json({ success: false, message: "L'animal n'existe pas ou déjà supprimé." });
            }

            res.json({ success: true, message: 'Animal supprimé!' });
        } catch (error) {
            next(error);
        }
    },

    animalPut: async (req, res, next) => {
        try {
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
            };

            const updated = await Animal.update(animalData, { where: { id } });

            if (!updated[0]) {
                return res.status(404).json({ success: false, message: "L'animal n'existe pas ou échec de mise à jour." });
            }

            res.json({ success: true, message: 'Animal mis à jour!' });
        } catch (error) {
            next(error);
        }
    },
};
