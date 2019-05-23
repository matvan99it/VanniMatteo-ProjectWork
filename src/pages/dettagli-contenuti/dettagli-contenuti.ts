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
  public Posts:any=[];
  
  public wp_ricomposto: any=["", "", "", ""];

  constructor(public navCtrl: NavController, public api:WpApiProvider, public navParams: NavParams) {
    this.wp_id=navParams.get('item');
    this.wp_type=navParams.get('tipologia');
    
    this.api.get().subscribe((data)=>{
      console.log("banan" + data);
    });
    console.log("prova getSpecific dentro dettagli");
    console.log(this.api.getSpecific(this.wp_type, this.wp_id));
    this.Posts=this.api.getSpecific(this.wp_type, this.wp_id);
    console.log("dettagli: ");console.log(this.Posts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliContenutiPage');
  }

}
