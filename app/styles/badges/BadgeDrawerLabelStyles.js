import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        margin: 16,
        fontWeight: 'bold'
    },
    focusedLabel: {
        color: 'red'
    }
});