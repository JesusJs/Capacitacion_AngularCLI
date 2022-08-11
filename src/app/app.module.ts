import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { InputFilterComponent } from './components/input-filter/input-filter.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CardComponent, FooterComponent, InputFilterComponent],
  imports: [BrowserModule, AppRoutingModule],
=======
import { PersonajesComponent } from './components/personajes/personajes.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, CardComponent, FooterComponent, PersonajesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
>>>>>>> c0d212ce9185c53bd40cbb7266cf01d43eee6d62
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
