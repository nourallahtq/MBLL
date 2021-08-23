import { Component, OnInit } from '@angular/core';
import { Hero } from '../dtos/Hero'

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    image_path : 'https://a-static.besthdwallpaper.com/skyblocker-kaja-mobile-legends-ml-wallpaper-3554x1999-67920_53.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
