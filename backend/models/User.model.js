import { Schema, model } from "mongoose";

const UsersSchema = Schema(
  {
    username: {
      type: String,
      required: [true, "User name required"],
      unique: [true, "User must be unique"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: [true, "Email must be unique"],
      minLength: [5, "Email must have 5 char!"],
    },
    password: {
      type: String,
      required: [true, "Password must be provided!"],
      trim: true,
      select: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCodeValidation: {
      type: Number,
      default: null,
      select: false,
    },
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },

    status: {
      type: Boolean,
      default: 0,
    },
    googleId: {
      type: String,
      required: false,
    },
    password_reset_token: {
      type: String,
      default: null,
    },
    password_reset_token_expires: {
      type: Date,
      default: null,
    },
    image: {
      type: String,
      required: false,
    },
    apiKey: { type: String, unique: true },
    subscriptionPlan: {
      type: String,
      enum: ["free", "premium"],
      default: "free",
    },
    usageCount: { type: Number, default: 0 }, // Track API usage
    usageLimit: { type: Number, default: 100 },
  },
  {
    timestamps: true,
  }
);

UsersSchema.methods.isWithinUsageLimit = function () {
    return this.usageCount < this.usageLimit;
  };

const User = model("User", UsersSchema);

export default User;
