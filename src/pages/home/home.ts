import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { DettagliContenutiPage } from '../dettagli-contenuti/dettagli-contenuti';

//import { ElencoContenuti } from './../elenco-contenuti/elenco-contenuti'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any=[];
  public Posts:any=[];

  constructor(public navCtrl: NavController, public api:WpApiProvider, public navparams: NavParams) {
    this.api.get().subscribe((data)=>{
      console.log(data);
    });
    this.Posts=this.api.getPosts();
    
  }

  openDetail(item){
    this.navCtrl.push(DettagliContenutiPage, {post: item});
  }

}
