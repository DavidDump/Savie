import AsyncStorage from '@react-native-async-storage/async-storage';

export const SetLoginToken = async (token) => {
    try {
        const jsonValue = JSON.stringify(token)
        await AsyncStorage.setItem("LoginToken", jsonValue)
    } catch (e) {
        console.log(e);
    }
}

export const GetLoginToken = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("LoginToken")
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e);
    }
}

export const RemoveLoginToken = async () => {
    try{
        await AsyncStorage.removeItem("LoginToken");
    }catch(e){
        console.log(e);
    }
}