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
  private Pages: any =[];
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

  getPosts(){
    this.get('wp/v2/posts').subscribe((data)=>{
      this.Posts = data;
      console.log(this.Posts);
      return this.Posts;
    });
  }

  getPages(){
    this.get('wp/v2/pages').subscribe((data)=>{
      this.Pages = data;
      console.log(this.Pages);
      return this.Pages;
    });
  }

}
