const Channel = `
    extend type Query {
        channel(id: ID!): Channel
    }

    type Channel {
        id: ID!
        name: String!
        messages: [String]
    }

    extend type Mutation {
        addMessage(channel: Int!, text: String!): String
    }
`;

export default Channel;
