import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string = "mario"
  public gender: "male" | "female" = "male"
  public invitationMap = {
    male: "saludarlo",
    female: "saludarla"
  }


  changeClient(): void {
    this.name = "Melisa"
    this.gender = "female"
  }

  //i18nPlural
  public clientes: string[] = ["Maria", "Pedro", "Fernando", "Jose", "Manuel",]
  public clientesMap = {
    "=0": "no tenemos ningun cliente",
    "=1": "tenemos 1 cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    "other": "tenemos # clientes esperando",

  }

  deleteClient(): void {
    this.clientes.shift()
  }

  //KeyValuePipe
  public person = {
    name: "mario",
    age: 22,
    address: "Que miras bobo"
  }

  //AsyncPipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log("tap", value))
    )
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa")
      reject("Rechzado")
    }, 3500)
  })
}
