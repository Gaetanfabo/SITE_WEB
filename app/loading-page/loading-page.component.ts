import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-loading-page',
  imports: [
    BrowserModule,
    FormsModule
  ],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.css'
})
export class LoadingPageComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  confirmationMessage: string = '';

  onSubmit() {
    if (this.newPassword === this.confirmPassword) {
      this.confirmationMessage = 'Mot de passe réinitialisé avec succès.';
    } else {
      this.confirmationMessage = 'Les mots de passe ne correspondent pas.';
    }
  }

}
