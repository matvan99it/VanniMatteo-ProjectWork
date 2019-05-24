import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { DettagliContenutiPage } from '../dettagli-contenuti/dettagli-contenuti';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items:any=[];
  public Posts:any=[];

  constructor(public navCtrl: NavController, public api:WpApiProvider, public navparams: NavParams) {
    this.api.get().subscribe((data)=>{
      console.log("banan" + data);
    });
    this.Posts=this.api.getPosts();
    console.log(this.Posts);    
  }

  openDetail(item){
    this.navCtrl.push(DettagliContenutiPage, {post: item});
  }

  public test(event ,item, tipologia, contenuto, foto){
    this.navCtrl.push(DettagliContenutiPage,
    {
      item:item,
      tipologia: tipologia,
      contenuto: contenuto,
      foto: foto
    });
  console.log("***********")
    console.log(foto+" **** "+contenuto);
    }

}
