import { Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ServicesComponent } from './services/services.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { PublicationsComponent } from './publications/publications.component';
import { SecteursComponent } from './secteurs/secteurs.component';
import { AideContactsComponent } from './aide-contacts/aide-contacts.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
    
    { path: 'clients', component: ClientComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'publications', component:  PublicationsComponent },
    { path: 'secteurs', component: SecteursComponent }, 
    { path: 'aide-contacts', component: AideContactsComponent },
    { path: 'a-propos', component: AProposComponent },
    { path: 'IVAN FABO INC', component: AppComponent },
    { path: '', component: HomeComponent },
];
