import { createDrawerNavigator } from 'react-navigation';

import EstadoAcademicoView from 'app/components/estado_academico/EstadoAcademicoView';
import HomeView from 'app/components/home/Home';
import LogoutView from "app/components/auth/LogoutView";

export default createDrawerNavigator({
    Home: { screen: HomeView },
    EstadoAcademico: { screen: EstadoAcademicoView },
    Logout: { screen: LogoutView }
});
