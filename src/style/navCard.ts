import { StyleSheet } from 'react-native';

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
        marginTop: 15,
    },
    icon: {
        alignSelf: 'center',
    }
});

export default  styles;
