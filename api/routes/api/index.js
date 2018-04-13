// @flow
import { Router } from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from '../../schema';

const apiRouter = Router();

apiRouter.use('/graphql', graphqlExpress({
  schema,
  context: {}
}));

if (process.env.NODE_ENV !== 'production') {
  apiRouter.use('/graphiql', graphiqlExpress({
    endpointURL: '/api/graphql'
  }));
}

export default apiRouter;