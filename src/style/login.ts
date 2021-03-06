import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#59acff',
    },
    header: {
        top: 0,
        width: '100%',
        height: '40%',
        backgroundColor: 'orange',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    title: {
        color: 'white',
        fontSize: 34,
    },
    subTitle: {
        color: 'white',
        fontSize: 24,
    },
    join: {
        color: 'white',
        fontSize: 16,
    },
    inputContainer: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 50,
    },
    input: {
        borderWidth: 2,
        width: '100%',
        height: 45,
        borderRadius: 10,
        borderColor: '#744efc',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 18
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: '#4aff98',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    link: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default  styles;
