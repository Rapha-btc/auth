const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const userType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      user: {
          type: userType,
          resolve(parentValue, args, req) {
              return req.user;
          }
      },
      }
});

module.exports = RootQueryType;
