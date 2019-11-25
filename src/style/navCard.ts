import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    titleContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
    },
    iconContainer: {
        width: '100%',
        justifyContent: 'center',
        marginTop: wp('6%'),
    },
    icon: {
        alignSelf: 'center',
        height: wp('25%'),
    }
});

export default  styles;
