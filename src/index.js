import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import sequelize from './config/postgresConnection'

import schemas from './schemas';
import resolvers from './resolvers';

import userModel from './models/userModel';
import chatMessageModel from './models/chatMessageModel';
import userNotificationModel from './models/userNotificationModel';
import counterpartyModel from './models/counterpartyModel';
import counterpartyTypeModel from './models/counterpartyTypeModel'


const app = express();
app.use(cors());

sequelize.authenticate()

const getUser = async (req) => {
  const token = req.headers['token'];
  if (token) {
    try {
      return await jwt.verify(token, 'riddlemethis');
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      const me = await getUser(req);
      return {
        me,
        models: {
          userModel,
          chatMessageModel,
          userNotificationModel,
          counterpartyModel,
          counterpartyTypeModel,
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(5000, () => {
  mongoose.connect('mongodb://localhost:27017/main_DB');
});