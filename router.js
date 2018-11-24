module.exports = function(app) {
    app.post("/login", function(req, res) {
        const login = req.body.login;
        const password = req.body.password;

        if (!login || !password) {
            return res.status(422).send({ error: "Please pass email and password" });
        }

        res.send({
            message: "Hello 😉! How are you?",
            status: "ok"
       });
    });
};
