import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
