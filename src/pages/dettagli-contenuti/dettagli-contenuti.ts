import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
/**
 * Generated class for the DettagliContenutiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-dettagli-contenuti',
  templateUrl: 'dettagli-contenuti.html',
})
export class DettagliContenutiPage {
  wp_id: any;
  wp_type: any;
  public items:any=[];
  public dettagliato:any=[];
  
  public wp_ricomposto: any=["", "", "", ""];

  constructor(public navCtrl: NavController, public api:WpApiProvider, public navParams: NavParams) {
    this.wp_id=navParams.get('item');
    this.wp_type=navParams.get('tipologia');
    
    this.api.get().subscribe((data)=>{
      console.log("banan" + data);
    });
    this.dettagliato=this.api.getSpecific(this.wp_type, this.wp_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliContenutiPage');
  }

}
