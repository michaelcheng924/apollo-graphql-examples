const Channel = `
    extend type Query {
        channel(id: ID!): Channel
    }

    type Channel {
        id: ID!
        name: String!
        messages: [String]
    }
`;

export default Channel;
