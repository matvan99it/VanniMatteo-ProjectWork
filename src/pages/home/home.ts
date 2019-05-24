import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { DettagliContenutiPage } from '../dettagli-contenuti/dettagli-contenuti';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any=[];
  public Posts:any=[];

  constructor(public navCtrl: NavController, public api:WpApiProvider, public navparams: NavParams, private sanitizer: DomSanitizer) {
    this.api.get().subscribe((data)=>{
    });
    this.Posts=this.api.getPosts(); 
  }

  openDetail(item){
    this.navCtrl.push(DettagliContenutiPage, {post: item});
  }
  testo_valido: any;
  public test(event ,item, tipologia, titolo, contenuto, foto){
    this.testo_valido = this.sanitizer.bypassSecurityTrustUrl(contenuto);
    this.navCtrl.push(DettagliContenutiPage,
    {
      item:item,
      tipologia: tipologia,
      titolo: titolo,
      testo_valido: contenuto,
      foto: foto
    });
  }

}
