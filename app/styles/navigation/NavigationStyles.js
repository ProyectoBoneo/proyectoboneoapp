import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        flex: 6,
        color: 'white',
    },
    navigationHeaderView: {
        height: 50,
        backgroundColor: '#2196F3',
        flexDirection: 'row',
        alignItems: 'center'
    },
    navigationHeaderTouchable: {
        flex: 1,
    },
    navigationHeaderIcon: {
        color: 'white',
        fontSize: 26,
        padding: 10,
        textAlign: 'center',
    }
});
