import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    userNotification: async (parent, { id }, { models: { userNotificationModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const userNotification = await userNotificationModel.findById({ _id: id }).exec();
      return userNotification;
    },
    userNotifications: async (parent, args, { models: { userNotificationModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const userNotifications = await userNotificationModel.find({ author: me.id }).exec();
      return userNotifications;
    },
  },
  Mutation: {
    createUserNotification: async (parent, { message }, { models: { userNotificationModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const userNotification = await userNotificationModel.create({ message, author: me.id });
      return userNotification;
    },
  },
  UserNotification: {
    author: async ({ author }, args, { models: { userModel } }, info) => {
      const user = await userModel.findById({ _id: author }).exec();
      return user;
    },
  },
};