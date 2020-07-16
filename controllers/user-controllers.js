const db = require("../models");

module.exports = {
    createUser: async (req, res) => {
        if (req.user) {
            try {
                const newUser = await db.User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.address,
                    password: req.body.passowrd,
                    // foreign ID to link user
                    UserId: req.user.id,
                });

                res.send(newUser);
            } catch (err) {
                res.send(err);
            }
        } else {
            res.redirect("/");
        }
    },

    getUser: async (req, res) => {
        db.User.findOne({
            where: {
                id: req.user.id,
            },
            include: [db.User],
        }).then((user) => res.send(user));
    },

   deleteUser: async (req, res) => {
        User.hasOne(models.Profile, {
            onDelete: "cascade",
        });
    },
};