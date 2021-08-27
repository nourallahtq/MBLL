import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroListComponent } from './Components/hero-list/hero-list.component';
import { ItemBuildComponent } from './Components/item-build/item-build.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddHeroComponent } from './Components/addHero/addHero.component';

@NgModule({
  declarations: [				
    AppComponent,
    HomeComponent,
    HeroListComponent,
    ItemBuildComponent,
      NavbarComponent,
      FooterComponent,
      AddHeroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
