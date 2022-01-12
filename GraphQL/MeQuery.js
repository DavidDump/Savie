const MeQuery = `
    query ME($token: String!){
        Me(token: $token)
    }
`;

export default MeQuery;
