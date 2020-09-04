import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ForsideComponent } from './forside/forside.component';
import { TilmeldComponent } from './tilmeld/tilmeld.component';
import { DistancerComponent } from './distancer/distancer.component';
import { DeltagerListeComponent } from './deltager-liste/deltager-liste.component';
import { LoginComponent } from './login/login.component';
import { FejlComponent } from './fejl/fejl.component';
import { OmComponent } from './om/om.component';
import { TakComponent } from './tak/tak.component';


const routes: Routes = [{ path: '', redirectTo: 'forside', pathMatch: 'full' },
{ path: 'forside', component: ForsideComponent, pathMatch: 'full' },
{ path: 'tilmeld', component: TilmeldComponent, },
{ path: 'distancer/:id', component: DistancerComponent,  pathMatch: 'full' },
{ path: 'deltagerliste', component: DeltagerListeComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' },
{ path: 'fejl-404', component: FejlComponent, pathMatch: 'full' },
{ path: 'om', component: OmComponent, pathMatch: 'full' },
{ path: 'tak', component: TakComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
