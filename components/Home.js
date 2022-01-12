import React from "react";
import { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, Text, Pressable, TextInput } from "react-native";
import { useManualQuery, useMutation } from "graphql-hooks";
import LoginQuery from "../GraphQL/LoginQuery";
import MeQuery from "../GraphQL/MeQuery";
import RegisterMutation from "../GraphQL/RegisterMutation";
import { UserContext } from "./UserContex";
import { SetLoginToken, GetLoginToken } from "../AsyStorage/Storage";

const Home = ({ history }) => {
    const [Login, loginData] = useManualQuery(LoginQuery);
    const [Me, meData] = useManualQuery(MeQuery);
    const [Register, registerData] = useMutation(RegisterMutation);
    
    const { setHomePage } = useContext(UserContext);
    const [loginView, setLoginView] = useState(false);
    const [registerView, setRegisterView] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [name, setName] = useState("");

    const DoALogin = () => {
        Login({variables: {email, password}});
    }

    const DoARegister = () => {
        Register({variables: {email, password, name}});
    }

    useEffect(() => {
        // valid email
        // password has minimum requirements
        // passwords match
    }, [email, password, passwordAgain, name]);

    useEffect(() => {
        if(loginData.data){
            if(!(loginData.data.Login.err)){
                SetLoginToken(loginData.data.Login.token);
                history.push("/Stores");
                setHomePage(false);
            }else{
                setErrorText(loginData.data.Login.err);
            }
        }
    }, [loginData.data]);

    useEffect(() => {
        if(registerData.data){
            if(registerData.data.Register.err){
                setErrorText(registerData.data.Register.err);
            }else if(registerData.data.Register.msg){
                console.log("succes");
                // redirect to main page but but still need to confirm email
            }
        }
    }, [registerData.data]);

    useEffect(() => {
        if(meData.data){
            history.push("/Stores");
            setHomePage(false);
            setErrorText("");
        }
    }, [meData.data]);

    useEffect(() => {
        const Verify = async () => {
            const token = await GetLoginToken();
            if(token){
                Me({variables: {token}});
            }else{
                setLoading(false);
            }
        }
        Verify();
    }, []);

    if(loginView){
        return ( // Login Page
            <View style={styles.container}>
                <Pressable style={styles.backContainer} onPress={() => {setLoginView(false); setRegisterView(false); setErrorText("");}}>
                    <Image source={require("../assets/arrow_back_ios_white_24dp.svg")} style={styles.backButton}/>
                </Pressable>
                <Image source={require("../assets/savie_logo.png")} style={styles.logo}/>

                <Text style={[styles.text, {marginTop: 80}]}>Email:</Text>
                <TextInput style={styles.input} onChangeText={setEmail} />

                <Text style={styles.text}>Password:</Text>
                <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry={true}/>

                <Text style={{color: "red"}}>{errorText}</Text>

                <Pressable style={[styles.button, styles.logButton, {marginTop: 25}]} onPress={DoALogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
            </View>
        );
    }else if(registerView){
        return ( // Register Page
            <View style={styles.container}>
                <Pressable style={styles.backContainer} onPress={() => {setLoginView(false); setRegisterView(false); setErrorText("");}}>
                    <Image source={require("../assets/arrow_back_ios_white_24dp.svg")} style={styles.backButton}/>
                </Pressable>
                <Image source={require("../assets/savie_logo.png")} style={styles.logo} />

                <Text style={[styles.text, {marginTop: 180}]}>Email:</Text>
                <TextInput style={styles.input} onChangeText={setEmail}/>

                <Text style={styles.text}>Name:</Text>
                <TextInput style={styles.input} onChangeText={setName}/>

                <Text style={styles.text}>Password:</Text>
                <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry={true}/>

                <Text style={styles.text}>Confirm Password:</Text>
                <TextInput style={styles.input} onChangeText={setPasswordAgain} secureTextEntry={true}/>

                <Text style={{color: "red"}}>{errorText}</Text>

                <Pressable style={[styles.button, styles.logButton, {marginTop: 25}]} onPress={DoARegister}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </Pressable>
            </View>
        );
    }else{ // Home Page
        return (
            <View style={styles.container}>
                <Image source={require("../assets/savie_logo.png")} style={styles.logo} />

                {loading &&
                    <Image source={require("../assets/loading.gif")} style={styles.loading}/>
                }
                {!loading &&
                    <View>
                        <Pressable style={[styles.button, styles.logButton, {marginTop: 120}]} onPress={() => {setLoginView(true)}}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.regButton]} onPress={() => {setRegisterView(true)}}>
                            <Text style={[styles.buttonText, styles.whiteTextOverride]}>REGISTER</Text>
                        </Pressable>
                    </View>
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#53C76C",
    },
    logo: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 50,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 210,
        height: 40,
        borderRadius: 20,
    },
    logButton: {
        backgroundColor: "white",
    },
    regButton: {
        backgroundColor: "#53C76C",
        borderColor: "white",
        borderWidth: 1,
        marginTop: 15,
    },
    backButton: {
        width : 40,
        height: 40,
    },
    backContainer: {
        position: "absolute",
        top: 15,
        left: 10,
    },
    buttonText: {
        color: "#53C76C",
        fontWeight: "bold",
        fontSize: 18,
    },
    whiteTextOverride: {
        color: "white",
    },
    input: {
        width: 210,
        height: 40,
        backgroundColor: "white",
    },
    text: {
        fontSize: 18,
    },
    loading: {
        height: 64,
        width: 64,
        position: "absolute",
        marginTop: 120
    }
});

export default Home;
