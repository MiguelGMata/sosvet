const express = require('express');
const models = require('../models');

module.exports = {

    soinAdd: async (req, res, next) => {
        const soinData = {
            animalId: req.body.animalId,
            categorie: req.body.categorie,
            libelle: req.body.libelle,
            information: req.body.information,
            date: req.body.date,
            document: req.body.document
        }
        if (!soinData) {
            res.status(400)
            res.json({
                error: 'Mauvaises données'
            })

        } else {
            await models.Soin.create(soinData)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.json('Erreur : ' + err)
                })
        }
    },
    soins: async (req, res) => {
        await models.Soin.findAll({
            /*include: [
                {
                    model: User,
                    as: "user",
                    attributes: ["id", "first_name", "last_name"],
                },
            ],*/
        })
            .then(soin => {
                res.json(soin)
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
    soin: async (req, res, next) => {
        await models.Soin.findOne({
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
            .then(soin => {
                if (soin) {
                    res.json(soin)
                } else {
                    res.send("L'soin n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
    soinDelete: async (req, res, next) => {
        await models.Soin.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.json({ status: 'Soin supprimé!' })
            })
            .catch(err => {
                res.send('error: ' + err)
            })
    },
    soinPut: async (req, res, next) => {
        {
            const { id } = req.params;
            const soinData = {
                categorie: req.body.categorie,
                libelle: req.body.libelle,
                information: req.body.information,
                date: req.body.date,
                document: req.body.document
            }
            if (!soinData) {
                res.status(400)
                res.json({
                    error: 'Mauvaises données'
                })
            } else
                await models.Soin.update(
                    soinData,
                    { where: { id } }
                )
                    .then(() => {
                        res.json({ status: 'Soin mise à jour!' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
        }
    }
}