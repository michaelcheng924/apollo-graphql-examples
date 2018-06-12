import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './src/graphql/schema';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
