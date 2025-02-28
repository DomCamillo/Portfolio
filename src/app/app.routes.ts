
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent} from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    {
      path: 'home', 
      component: HomeComponent,
      children: [ 
        { path: 'aboutme', component: AboutMeComponent },
        { path: 'skills', component: SkillsComponent },
        { path: 'portfolio', component: PortfolioComponent },
      ],
    },
  ];
  