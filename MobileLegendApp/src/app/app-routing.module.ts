import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './Components/addHero/addHero.component';
import { HeroListComponent } from './Components/hero-list/hero-list.component';
import { HomeComponent } from './Components/home/home.component';
import { ItemBuildComponent } from './Components/item-build/item-build.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'heroList', component: HeroListComponent},
  {path:'itemBuild', component: ItemBuildComponent},
  {path:'addHero', component: AddHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
