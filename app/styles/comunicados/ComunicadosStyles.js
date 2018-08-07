import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    comunicadosListViewTitle: {
        fontSize: 24,
        padding: 10
    },
    comunicadoItemView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 50
    },
    comunicadoItemAsuntoView: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    comunicadoItemAsunto: {
        width: 150,
        fontSize: 16,
    },
    comunicadoItemAsuntoNoLeido: {
        fontWeight: 'bold',
    },
    comunicadoItemFecha: {
        width: 150,
        fontSize: 12,
        textAlign: 'right'
    },
    comunicadoItemEmisor: {
        width: 150,
        fontSize: 12,
    },
});
