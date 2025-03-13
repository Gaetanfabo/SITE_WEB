import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import du fichier de routage
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Import du composant HeaderComponent

@NgModule({
  declarations: [
    // Ne pas inclure AppComponent ici s'il est autonome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ajout du module de routage
    HeaderComponent // Ajout de HeaderComponent dans les imports
  ],
  providers: [],
}) 
export class AppModule { }