import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { SingupComponent } from './pages/singup/singup.component';
import { NewsComponent } from './pages/news/news.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FemininoComponent } from './pages/feminino/feminino.component';
import { MasculinoComponent } from './pages/masculino/masculino.component';
import { InfantilComponent } from './pages/infantil/infantil.component';
import { CalcadosComponent } from './pages/calcados/calcados.component';
import { AcessoriosComponent } from './pages/acessorios/acessorios.component';
import { UnderConstructionsComponent } from './components/under-constructions/under-constructions.component';

import { NotificationAdminComponent } from './admin/pages/notification-admin/notification-admin.component';
import { LogOutAdminComponent } from './admin/pages/log-out-admin/log-out-admin.component';
import { AdminComponent } from './admin/admin.component';
import { UsersAdminComponent } from './admin/pages/users-admin/users-admin.component';
import { AdminGuard } from './guards/admin.guard';
import { HomeAdminComponent } from './admin/pages/home-admin/home-admin.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "LOGOLOGO"
    },
    {
        path: "login",
        component: LoginComponent,
        title: "LOGOLOGO - Login"
    },
    {
        path: "carrinho",
        component: CartComponent,
        title: "LOGOLOGO - Carrinho"
    },
    {
        path: "cadastrar",
        component: SingupComponent,
        title: "LOGOLOGO - Cadastrar"
    },
    {
        path: "novidades",
        component: NewsComponent,
        title: "LOGOLOGO - Novidades"
    },
    {
        path: "feminino",
        component: FemininoComponent,
        title: "LOGOLOGO - Feminino"
    },
    {
        path: "masculino",
        component: MasculinoComponent,
        title: "LOGOLOGO - Masculino"
    },
    {
        path: "infantil",
        component: InfantilComponent,
        title: "LOGOLOGO - Infantil"
    },
    {
        path: "calcados",
        component: CalcadosComponent,
        title: "LOGOLOGO - Calçados"
    },
    {
        path: "acessorios",
        component: AcessoriosComponent,
        title: "LOGOLOGO - Acessórios"
    },
    {
        path: "em-contrucao",
        component: UnderConstructionsComponent,
        title: "LOGOLOGO - Em contrução"
    },
    
         { path: 'admin', component: AdminComponent },
  {path: 'admin/home-admin', 
    component: HomeAdminComponent},
    
    {
        path: "notificacoes",
        component: NotificationAdminComponent,
        title: "LOGOLOGO - Notificações"
    },
    {
        path: "logout",
        component: LogOutAdminComponent,
        title: "LOGOLOGO - Log Out"
    },
    {
        path: "404",
        component: ErrorPageComponent,
        title: "LOGOLOGO - Pagina não encontrada"
    },
    {
        path: "**",
        redirectTo: "/404"
    }
];
