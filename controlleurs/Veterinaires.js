const models = require('../models');
const { CREATED } = require('../helpers/status_codes');


module.exports = {

    veterinaires: async (req, res) => {
        const where = {};
        if (req.query.lieux) {
            const villevete = await models.Veterinaire.findOne({
                where: { lieux: req.query.lieux },
                attributes: ['id'],
                raw: true,

            });
            where.id = villevete.id;
        }
        if (req.query.postal) {
            const villevete = await models.Veterinaire.findOne({
                where: { postal: req.query.postal },
                attributes: ['id'],
                raw: true,

            });
            where.id = villevete.id;
        }
        const findvete = await models.Veterinaire.findAll({
            raw: true,
            attributes: [
                "id",
                "nom",
                "adresse",
                "postal",
                "lieux",
                "phone",
                "pictures",
            ],
            where,
        });
        return res.status(CREATED).json(findvete);
    },

    veterinaire: async (req, res, next) => {
        await models.Veterinaire.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(veto => {
                if (veto) {
                    res.json(veto)
                } else {
                    res.send("Le veterinaire n'existe pas")
                }
            })
            .catch(err => {
                res.send('Erreur: ' + err)
            })
    },
}


