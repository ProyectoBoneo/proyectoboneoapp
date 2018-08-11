import { StyleSheet } from 'react-native';

import { BADGE_COLOR } from 'app/styles/Constants';

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
    },
    badgeContainer: {
        backgroundColor: BADGE_COLOR,
        padding: 3,
        width: 28,
        marginRight: 8,
        borderRadius: 12,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    }
});