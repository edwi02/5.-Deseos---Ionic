import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string = "";
  nombreItem: string = "";

  items: ListaItem [] = [];

  constructor( public alertCtrl: AlertController,
               public navCtrl: NavController,
               public _listaDeseos: ListaDeseosService

  ) {  }

  ngOnInit() {}

  agregar(){

    if( this.nombreItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = "";

  }

  eliminar(idx:number){
    this.items.splice(idx, 1);
  }

  guardarLista(){

    if( this.nombreLista.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre lista',
        subTitle: 'Ingrese un nombre para la lista.',
        buttons:['Acepatar']
      });
      alert.present();
      return;
    }

    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

    //this._listaDeseos.listas.push( lista );
    this._listaDeseos.agregarLista( lista );
    this.navCtrl.pop();

  }

}
