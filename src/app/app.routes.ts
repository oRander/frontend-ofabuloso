import { Routes } from '@angular/router';
import { HomePage } from './pages/HomePage/home.page';
import { AboutPage } from './pages/AboutPage/about.page';
import { FranquiaPage } from './pages/FranquiaPage/franquia.page';
import { LoginPage } from './pages/LoginPage/login.page';
import { LojasPage } from './pages/LojasPage/lojas.page';
import { RevendasPage } from './pages/RevendasPage/revendas.page';


export const routes: Routes = [
  { path: '', component: HomePage }, // <- essa é a nova rota raiz
  { path: 'home', component: HomePage }, // opcional, se quiser manter /home funcionando também
  { path: 'franquia', component: FranquiaPage },
  { path: 'sobreNos', component: AboutPage },
  { path: 'login', component: LoginPage },
  { path: 'lojas', component: LojasPage },
  { path: 'revendas', component: RevendasPage },
];
