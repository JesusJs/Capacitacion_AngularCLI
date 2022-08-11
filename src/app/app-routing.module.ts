import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personaje', component: PersonajesComponent },
  { path: 'ngIf', component: NgIfComponent },
  { path: 'ngClass', component: NgClassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
