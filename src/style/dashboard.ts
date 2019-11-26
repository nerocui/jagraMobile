import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginVertical: 10,
        marginLeft: 10,
        color: 'white',
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    background: {
        opacity: 0.95,
        width: '100%',
        height: '100%',
    }
});

export default  styles;
