const SubscriptionsDemo = `
    extend type Query {
        subscriptionsDemo: SubscriptionsDemo
    }

    type SubscriptionsDemo {
        id: ID!
        messages: [String]
    }

    extend type Mutation {
        addMessage(text: String!): String
    }

    extend type Subscription {
        messageAdded: SubscriptionsDemo
    }
`;

export default SubscriptionsDemo;
