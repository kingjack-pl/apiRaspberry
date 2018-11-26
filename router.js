module.exports = function(app) {
    app.get("/", function(req, res) {
        const html = "<div>Hello! This is raspberry api. You can see raspberry app at this link <a href='https://raspberry-app.herokuapp.com'>Raspberry</a></a></div>";
        res.send(html);
    });
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
