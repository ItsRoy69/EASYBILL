const express = require("express");
const router = express.Router();
const Store = require('../models/stores');
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");


router.get("/", (req, res) => {
  res.json({ message: "This is the store api" });
});

router.post("/register", async (req, res) => {
    const {
      country,
      number,
      code,
      password,
    } = req.body;

    if (
        !country||
        !number||
        !code||
        !password
    ) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }

    try {
      const userSearchByNumber = await Store.findOne({ number: number });

      if (userSearchByNumber) {
        return res.status(422).json({ error: "store already exists." });
      }


        const store = new Store({
            country,
            number,
            code,
            sname,
            password
        });

        const registered = await store.save();

        res.status(201).json({ message: "Registered Successfully!", store : store });

    } catch (e) {
      res.status(500).json({ message: `Could not create store! --> ${e}` });
    }
  });



  router.post("/login", async (req, res) => {
    try {
      const logNumber = req.body.number;
      const logPass = req.body.password;

      if (!logNumber || !logPass) {
        return res.status(422).json({ error: "Please fill all the fields." });
      }

      const userNumber = await Store.findOne({ number: logNumber });
      const passCheck = await bcrypt.compare(logPass, userNumber.password);

      const token = await userNumber.generateAuthToken();

      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 60000000),
        httpOnly: true,
      });

      if (passCheck) {
        res.status(200).json({
          message: "Logged In Successfully!",
          token: token,
          success: true,
          user: userNumber,
        });
      } else {
        res.status(400).json({ message: "Invalid login credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Invalid login credentials" });
    }
  });

  router.get("/logout", auth, async (req, res) => {
    try {
      console.log(req.rootUser.tokens);
      req.rootUser.tokens = req.rootUser.tokens.filter((currElem) => {
        return currElem.token != req.token;
      });
      res.status(200).send({ message: "logged out successfully!" });
      await req.rootUser.save();
    } catch (e) {
      res.status(500).send(e);
    }
  });


module.exports = router;