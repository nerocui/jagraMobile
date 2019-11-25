import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        marginBottom: 160,
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
    },
});

export default  styles;
