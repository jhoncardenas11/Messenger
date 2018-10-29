import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [

  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'conversation/:uid', component: ConversationComponent },
  {path: 'profile', component: ProfileComponent },
  {path: '', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConversationComponent,
    ProfileComponent,
    MenuComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
