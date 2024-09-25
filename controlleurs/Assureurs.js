const express = require('express');
const models = require('../models');



const { User } = models;
const { Animal } = models;
const { Assureur } = models;

module.exports = {

    assureurAdd: async (req, res, next) => {
        const assureurData = {
            animalId: req.body.animalId,
            nomContrat: req.body.nomContrat,
            nomAssureur: req.body.nomAssureur,
            emailAssureur: req.body.emailAssureur,
            numeroContrat: req.body.numeroContrat,
            telephone: req.body.telephone
        }
        if (!assureurData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })

        } else {
            await models.Assureur.create(assureurData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },
    assureurs: async (req, res) => {
        await models.Assureur.findAll({
            /*include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],*/
        })
            .then(assureur => {
                res.json(assureur)
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
    assureur: async (req, res, next) => {
        await models.Assureur.findOne({
            where: {
                id: req.params.id
            }/*,
            include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],*/
        })
            .then(assureur => {
                if (assureur) {
                    res.json(assureur)
                } else {
                    res.send("L'assureur n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
    assureurDelete: async (req, res, next) => {
        await models.Assureur.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Assureur supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },
    assureurPut: async (req, res, next) => {
        {
            const { id } = req.params;
            const assureurData = {
                nomContrat: req.body.nomContrat,
                nomAssureur: req.body.nomAssureur,
                emailAssureur: req.body.emailAssureur,
                numeroContrat: req.body.numeroContrat,
                telephone: req.body.telephone
            }
            if (!assureurData) {
                res.status(400)
                res.json({
                    error: 'Mauvaises données'
                })
            } else
                await models.Assureur.update(
                    assureurData,
                    { where: { id } }
                )
                    .then(() => {
                        res.json({ status: 'Assureur mise à jour!' })
                    })
                    //.catch(err => handleError(err))
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        }
    }
}