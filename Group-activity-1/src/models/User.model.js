const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: [true, "First name is required."],
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, "Last name is required."],
    },
    phonenumber: {
      type: Number,
      trim: true,
      required: false,
    },
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."]
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", userSchema);
