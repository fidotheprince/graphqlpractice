//Data Types: int, float, string, boolean, ID 

export const typeDefs = `#graphql
    type Game {
        id: ID! # ! means required
        title: String 
        platform: [String!]! # array of strings
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!  
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {# Query type is the entry point for all queries. Required]
        reviews: [Review]
        review(id: ID!): Review # find a review by id
        game (id: ID!): Game
        games: [Game]
        authors: [Author]
        author(id: ID!): Author
    }
`

