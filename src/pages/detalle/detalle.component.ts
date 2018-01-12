import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem} from '../../app/clases/index';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})

export class DetalleComponent implements OnInit {

idx: number;
lista: Lista;

  constructor(  public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public _listaDeseos:ListaDeseosService )
                {
                  console.log(navParams);
                  this.idx = this.navParams.get("idx");
                  this.lista = this.navParams.get("lista");
                }

  ngOnInit() {}

  actualizar( item:ListaItem ){
    item.completado = !item.completado;

    let todosMarcaados: boolean = true;

    for(let item of this.lista.items){
      if( !item.completado ){
        todosMarcaados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcaados;

    this._listaDeseos.actualizarData();
  }

  borrarLista(){
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      //message: '¿Esta seguro de borrar la lista?'+lista.nombre,
      message: `¿Está segudo de borrar la lista?`,
      buttons: ['Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseos.eliminarLista( this.idx );
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }

}
