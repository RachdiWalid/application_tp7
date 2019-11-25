import { Injectable } from '@angular/core';
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  products =[
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier')
  ]
 public getProduitById(id:number):Produit{
   for (let i=0;i<this.products.length;i++){
     if (id==this.products[i].id)
     return this.products[i];
     else null;
   }
 }
 public addProduit(id:number,libelle:string):boolean{
   let p= new Produit(id,libelle);
   
   if (this.getProduitById(id)==null)
   {this.products.push(p);
   return true;}
   else return false; 

 }
 constructor() { }

}
