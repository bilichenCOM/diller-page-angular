import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { MotorbikeDetailsComponent } from './motorbike-details/motorbike-details.component';
import { AboutComponent } from './about/about.component';
import { MotorbikesComponent } from './motorbikes/motorbikes.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    WelcomeComponent,
    CategoryDetailsComponent,
    MotorbikeDetailsComponent,
    AboutComponent,
    MotorbikesComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
