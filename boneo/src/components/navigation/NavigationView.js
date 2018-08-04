import { createDrawerNavigator } from 'react-navigation';

import EstadoAcademicoView from 'boneo/src/components/estado_academico/EstadoAcademicoView';
import HomeView from 'boneo/src/components/home/Home';
import LogoutView from "boneo/src/components/auth/LogoutView";

export default createDrawerNavigator({
    Home: { screen: HomeView },
    EstadoAcademico: { screen: EstadoAcademicoView },
    Logout: { screen: LogoutView }
});
