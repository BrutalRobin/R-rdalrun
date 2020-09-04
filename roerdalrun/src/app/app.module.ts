import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForsideComponent } from './forside/forside.component';
import { TilmeldComponent } from './tilmeld/tilmeld.component';
import { DistancerComponent } from './distancer/distancer.component';
import { DeltagerListeComponent } from './deltager-liste/deltager-liste.component';
import { LoginComponent } from './login/login.component';
import { FejlComponent } from './fejl/fejl.component';
import { OmComponent } from './om/om.component';
import { TakComponent } from './tak/tak.component';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    TilmeldComponent,
    DistancerComponent,
    DeltagerListeComponent,
    LoginComponent,
    FejlComponent,
    OmComponent,
    TakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
