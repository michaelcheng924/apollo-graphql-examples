const Channels = `
    extend type Query {
        channels: [Channel]
    }

    extend type Mutation {
        addChannel(name: String!): Channel
    }
`;

export default Channels;
