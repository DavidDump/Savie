const RegisterMutation = `
    mutation REGISER($email: String!, $password: String!, $name: String!){
        Register(email: $email, pass: $password, name: $name){
            err
            msg
        }
    }
  
`;

export default RegisterMutation;
