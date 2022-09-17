const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const storeSchema = new mongoose.Schema({

  country: {
    type: String,
    required: true,
    trim: true,

  },
  number: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      if (!validator.isNumber(value)) {
        throw new Error("Invalid Number.");
      }
    },
  },
  code: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },  
  tokens: [
    {
      token: {
        type: String,
        required: false,
      },
    },
  ],
});

// Hashing Passwords

storeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
  next();
});

storeSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (e) {
    console.log(`Failed to generate token --> ${e}`);
  }
};

storeSchema.methods.deleteToken = async function (authToken) {
  try {
    this.tokens = this.tokens.filter((currElem) => {
    return currElem.token !== authToken;
    });
    await this.save();
    return authToken;
  } catch (e) {
    console.log(`Failed to delete token --> ${e}`);
  }
};


const Store = mongoose.model("STORE", storeSchema);

module.exports = Store;