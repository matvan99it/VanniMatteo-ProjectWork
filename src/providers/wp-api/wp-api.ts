import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpApiProvider {

  private API_URL: string="https://projectwork-vanni.000webhostapp.com/wp-json/";
  private Categories: any=[];
  private Posts: any =[];
  private PagesP: any =[];  
  private Pages: any =[];

  private SpecPage: any=[];

  constructor(public http: HttpClient) {
    console.log('Hello WpApiProvider Provider');
  }

  get(query: string=''){
    return this.http.get(this.API_URL + query);
  }

  getCategories(){
    this.get('wp/v2/categories').subscribe((data)=>{
      this.Categories = data;
    });
  }

  getSpecific(type: string, id:number, content:string, img: any){
    this.get('wp/v2/'+type+'/'+id+'?content'+content).subscribe((data)=>{
      this.SpecPage = data;
      return this.SpecPage;
    });
  }

  getPosts(){
    this.get('wp/v2/posts?_embed').subscribe((data)=>{
      this.Posts = data;
      return this.Posts;
    });
  }

  getPages(){
    this.get('wp/v2/pages?_embed').subscribe((data)=>{
      
      this.PagesP = data;
      let index = this.PagesP.length;
      
      for(let i=0; i<index; i++)
      {
        if(i==2 || i==3 || i==4)
        {
          this.Pages.push(this.PagesP[i]);
        }    
      }
      return this.Pages;
    });
  }

}
