const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const bcrypt = require('bcryptjs');

const HttpError = require('../models/http-error.model');
const User = require('../schemas/user.schema');

const authentication= async (req, res, next) => {
  const { email, password } = req.body;
  let user = null;
  try{
      user = await User.findOne({ email: email });
      if(!user) {
        res.status(401).send({ message: 'UNAUTHORIZED: E-mail or password is incorrect' });
      }
    } catch(err) {
      const error = new HttpError(
        'Something went wrong, could not find user.',
        500
      );
      return error;
    }
    const match = await bcrypt.compare(password, user.password);
    if(match) {
      const { password, ...userWithoutPassword } = user;
      res.status(200).send({ data: userWithoutPassword });
    } else {
      res.status(401).send({ message: 'UNAUTHORIZED: E-mail or password is incorrect' });
    }
}

const registerUser = async (req, res, next) => {
    console.log('Adding the user');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(new HttpError('Invalid inputs! Please check again.', 422));
    }

    const { 
        name,
        email,
        password,
        mobile,
        role,
        holdername,
        cardnumber,
        expdate,
        cvv } = req.body;

    let existingUser;
    try{
      existingUser = await User.findOne({ email: email});
    } catch(err) {
      const error = new HttpError(
        'Something went wrong, could not sign up.',
        500
      );
      return next(error);
    }

    if(existingUser) {
        const error = new HttpError(
          'User already exists, please sign in.',
          422
        );
        return next(error);
      }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser = new User({
        userid: uuid(),
        name,
        email,
        password: hashedPassword,
        mobile,
        role,
        holdername,
        cardnumber,
        expdate,
        cvv
    });

    let registerUser

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        registerUser = await newUser.save({ session: session });
        await session.commitTransaction();
    } catch (err) {
        const error = new HttpError(
            'Error occured while saving details. Please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ User: registerUser });
};

exports.registerUser = registerUser;
exports.authentication = authentication;