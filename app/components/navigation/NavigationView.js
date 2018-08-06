import { createDrawerNavigator } from 'react-navigation';

import EstadoAcademicoView from 'app/components/estado_academico/EstadoAcademicoView';
import HomeView from 'app/components/home/Home';
import ComunicadosView from 'app/components/comunicados/ComunicadosView';
import LogoutView from "app/components/auth/LogoutView";

export default createDrawerNavigator({
    Home: { screen: HomeView },
    Comunicados: { screen: ComunicadosView },
    EstadoAcademico: { screen: EstadoAcademicoView },
    Logout: { screen: LogoutView }
});
