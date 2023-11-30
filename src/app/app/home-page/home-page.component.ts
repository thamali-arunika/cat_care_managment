import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
constructor(){}
  ngOnInit(){

  }
url1="./assets/images/Picture-Home .png";
url2="./assets/images/Logo_Homepage.png";

}
