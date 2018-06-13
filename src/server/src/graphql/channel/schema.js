const Channel = `
    extend type Query {
        channel: Channel
    }

    type Channel {
        id: ID!
        name: String!
        messages: [String]
    }
`;

export default Channel;
