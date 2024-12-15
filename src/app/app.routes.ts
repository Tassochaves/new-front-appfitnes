import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { TreinoComponent } from './components/treino/treino.component';
import { MetaComponent } from './components/meta/meta.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: "dashboard", component: DashboardComponent},
  {path: "atividade", component: AtividadeComponent},
  {path: "treino", component: TreinoComponent},
  {path: "metas", component: MetaComponent}
];
