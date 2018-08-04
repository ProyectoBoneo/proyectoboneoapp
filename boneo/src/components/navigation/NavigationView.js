import { createStackNavigator } from 'react-navigation';
import EstadoAcademicoView from 'boneo/src/components/estado_academico/EstadoAcademicoView';
import HomeView from 'boneo/src/components/home/Home';

export default createStackNavigator({
    Home: { screen: HomeView },
    EstadoAcademico: { screen: EstadoAcademicoView }
});