import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    userNotification: async (parent, { id }, { models: { chatMessageModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const chatMessage = await chatMessageModel.findById({ _id: id }).exec();
      return chatMessage;
    },
    userNotifications: async (parent, args, { models: { chatMessageModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const chatMessage = await chatMessageModel.find({ author: me.id }).exec();
      return chatMessage;
    },
  },
  Mutation: {
    createChatMessage: async (parent, { message }, { models: { chatMessageModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const chatMessage = await chatMessageModel.create({ message, author: me.id });
      return chatMessage;
    },
  },
  ChatMessage: {
    author: async ({ author }, args, { models: { userModel } }, info) => {
      const user = await userModel.findById({ _id: author }).exec();
      return user;
    },
  },
};