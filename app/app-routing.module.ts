import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';    
import { ServicesComponent } from './services/services.component';
import { PublicationsComponent } from './publications/publications.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { AideContactsComponent } from './aide-contacts/aide-contacts.component';
import { AProposComponent } from './a-propos/a-propos.component';

const routes: Routes = [
        { path: '', component: AppComponent },
        { path: 'client', component: ClientComponent },
        { path: 'service', component: ServicesComponent },
        { path: 'publication', component: PublicationsComponent },
        { path: 'secteur', component: SecteursComponent },
        { path: 'aide-contacts', component: AideContactsComponent },
        { path: 'a-propos', component: AProposComponent },
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }