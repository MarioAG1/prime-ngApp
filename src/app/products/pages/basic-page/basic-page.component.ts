import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLowercase : string = "mario"
  public nameUppercase : string = "MARIO"
  public fullname: string = "MaRiO aLvArEz"
  public customDate : Date = new Date()
}
