import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { DomSanitizer } from '@angular/platform-browser';
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
  wp_text: any;
  wp_img: any;
  wp_title: any;
  public items:any=[];
  public dettagliato:any=[];

  constructor(public navCtrl: NavController, public api:WpApiProvider, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.wp_id=navParams.get('item');
    this.wp_type=navParams.get('tipologia');
    this.wp_text=navParams.get('testo_valido');
    this.wp_img=navParams.get('foto');
    this.wp_title=navParams.get('titolo');
    
    
    console.log("*************************");
    console.log(this.wp_img+" *** " +this.wp_text);
    
    this.api.get().subscribe((data)=>{
      console.log("banan" + data);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettagliContenutiPage');
  }

}
