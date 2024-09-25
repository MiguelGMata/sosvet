const express = require('express')
const users = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
const models = require('../models')
const jwttoken = require('../middlewares/jwt');
const { OK } = require('../helpers/status_codes');
const { BadRequestError, UnauthorizedError, ForbiddenError } = require('../helpers/errors');
const { Animal } = models;

users.use(cors())

process.env.SECRET_KEY = 'secret'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
const FIRSTNAME_REGEX = /^[a-zA-Z]{1,}$/;
module.exports = {
    inscription: async (req, res) => {
        const userData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,

        }
        if (userData.first_name == null || userData.last_name == null) {
            throw new BadRequestError(
                'Mauvaise Requête',
                'Les champs prenom  et/ou nom ne sont pas renseignés , veuillez recommencer.'
            );
        }
        if (!FIRSTNAME_REGEX.test(userData.first_name)) {
            throw new BadRequestError(
                'Mauvaise Requête',
                'Le champ prenom doit être une chaîne de caractères'
            );
        }
        if (!EMAIL_REGEX.test(userData.email)) {
            throw new BadRequestError(
                'Mauvaise Requête',
                "L'email n'est pas valide, veuillez recommencer."
            );
        }
        if (!PASSWORD_REGEX.test(userData.password)) {
            throw new BadRequestError(
                'Mauvaise Requête',
                'Mot de passe invalide (doit avoir une longueur de 4 à 8 caractères et inclure au moins un chiffre)'
            );
        }

        await models.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        userData.password = hash
                        models.User.create(userData)
                            .then(user => {
                                res.json({ status: user.email + ' Inscrit!' })
                            })
                            .catch(err => {
                                res.send('Erreur : ' + err)
                            })
                    })
                } else {
                    res.json({ error: "L'utilisateur existe déjà" })
                }
            })
            .catch(err => {
                res.send('Erreur : ' + err)
            })

    },
    connexion: async (req, res) => {
        const { email, password } = req.body;
        if (email == null || password == null) {
            throw new BadRequestError(
                "Mauvaise Requête",
                "Les champs e-mail et/ou mot de passes sont manquants, veuillez recommencer."
            );
        }
        const token = await models.User.findOne({
            where: { email: email },
        });
        if (!token) {
            throw new BadRequestError(
                "Mauvaise Requête",
                "Cet utilisateur n'existe pas, vérifiez votre email"
            );
        }
        const pass = await bcrypt.compare(password, token.password);
        if (!pass) {
            throw new ForbiddenError(
                "Accès refusé",
                "Le mot de passe est incorrect, vérifiez votre mot de passe."
            );
        }
        return res.status(OK).json({
            user: {
                id: token.id,
                first_name: token.first_name,
                last_name: token.last_name,
                email: token.email,
            },
            token: jwttoken.generateTokenForUser(token),
        });
    },
    profil: async (req, res) => {
        var headerAuth = req.headers['authorization']
        const decoded = jwttoken.getUserId(headerAuth);
        console.log(decoded);
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
                    attributes: ["nom", "espece", "race", "sexe"],
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


