import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export default {
  Query: {
    user: async (parent, { id }, { models: { userModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },
    login: async (parent, { name, password }, { models: { userModel } }, info) => {
      const user = await userModel.findOne({ name }).exec();

      if (!user) {
        throw new AuthenticationError('Invalid credentials');
      }

      const matchPasswords = bcrypt.compareSync(password, user.password);

      if (!matchPasswords) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = jwt.sign({ id: user.id }, 'riddlemethis', { expiresIn: 24 * 10 * 50 });

      return {
        token,
      };
    },
  },
  Mutation: {
    createUser: async (parent, { name, password }, { models: { userModel } }, info) => {
      const user = await userModel.create({ name, password });
      return user;
    },
  },
  User: {
    chatMessage: async ({ id }, args, { models: { chatMessageModel } }, info) => {
      const chatMessage = await chatMessageModel.find({ author: id }).exec();
      return chatMessage;
    },
    userNotification: async ({ id }, args, { models: { userNotificationModel } }, info) => {
      const userNotification = await userNotificationModel.find({ author: id }).exec();
      return userNotification;
    },
    counterparty: async ({ counterparty }, args, { models: { counterpartyModel } }, info) => {
      const userNotification = await counterpartyModel.findAll( { where: { id: { [Op.in]: counterparty } } } )
      return userNotification;
    },
  },
};