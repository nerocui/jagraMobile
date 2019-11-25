import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignContent: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#f7f7f7",
        borderColor: "#faffff",
        borderWidth: 2,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset:{
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.44,
        shadowRadius: 3,
        elevation: 3,
    },
    horizontalStack: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    greeting: {
        fontSize: 18,
    },
});

export default  styles;
