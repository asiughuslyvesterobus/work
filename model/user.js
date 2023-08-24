const mongoose = require("mongoose");

const userSchema = new mongoose.schema(
  {
    firstName: {
      type: string,
      maxlength: 50,
      trim: true,
      required: true,
    },
    lastName: {
      type: string,
      maxlength: 50,
      trim: true,
      required: true,
    },
    email: {
      type: string,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: string,
      maxlength: 15,
      trim: true,
      required: true,
      unique: true,
    },
    imgurl: {
      type: string,
      trim: true,
      default: "",
    },
    imgPath: {
      type: string,
      trim: true,
      default: "",
    },
    phoneNumber: { type: string, trim: true },
    password: {
      type: string,
      maxlength: 225,
      required: true,
    },
    role: {
      type: string,
      enum: ["user", "admin"],
      default: "user",
    },
    isAuthorizedAdmin: {
      type: Boolean,
      default: false,
    },
    hasLoanRequest: {
      type: Boolean,
      default: false,
    },
    hasUnFullfilledLoan: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports.user = user;
