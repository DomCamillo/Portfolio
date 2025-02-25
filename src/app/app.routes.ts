
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent} from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Startseite
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'home', component: AboveTheFoldComponent },
    { path: 'header', component: HeaderComponent },
];
