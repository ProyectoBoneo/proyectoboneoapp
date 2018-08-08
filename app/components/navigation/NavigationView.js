import { createDrawerNavigator } from 'react-navigation';

import PerfilAcademicoView from 'app/components/perfil_academico/PerfilAcademicoView';
import HomeView from 'app/components/home/Home';
import ComunicadosView from 'app/components/comunicados/ComunicadosView';
import LogoutView from "app/components/auth/LogoutView";

export default createDrawerNavigator({
    Home: { screen: HomeView },
    Comunicados: { screen: ComunicadosView },
    PerfilAcademico: { screen: PerfilAcademicoView },
    Logout: { screen: LogoutView }
});
