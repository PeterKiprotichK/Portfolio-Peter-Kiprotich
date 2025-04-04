import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {'path':'','title':'Home',component:HomeComponent},
    {'path':'skills','title':'skills',component:SkillsComponent},
    {'path':'projects','title':'projects',component:ProjectsComponent},
    {'path':'contact','title':'contact',component:ContactComponent},
    {'path':'about','title':'about' ,component:AboutComponent}
];
