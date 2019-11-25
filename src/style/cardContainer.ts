import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: wp('45%'),
        alignContent: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#f7f7f7",
        borderColor: "#faffff",
        borderWidth: 2,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset:{
            width: -50,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
    },
});

export default  styles;
