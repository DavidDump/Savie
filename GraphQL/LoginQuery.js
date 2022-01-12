const LoginQuery = `
    query LOGIN($email: String!, $password: String!) {
        Login(email: $email, pass: $password){
            err
            token
            type
        }
    }
`;

export default LoginQuery;
