import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { MotorbikesComponent } from './motorbikes/motorbikes.component';

const routes: Routes = [
	{ path: 'welcome', component: WelcomeComponent},
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'about', component: AboutComponent},
	{ path: 'categories/:id', component: CategoryDetailsComponent},
	{ path: 'categories/:categoryId/motorcycles', component: MotorbikesComponent},
	{ path: '**', redirectTo: '/welcome', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }