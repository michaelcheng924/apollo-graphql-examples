const Channels = `
    extend type Query {
        channels: [Channel]
    }

    extend type Mutation {
        addChannel(name: String!): Channel
        deleteChannel(id: ID!): Channel
    }
`;

export default Channels;
