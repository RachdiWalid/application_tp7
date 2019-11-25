import { Component, OnInit } from '@angular/core';
import {ProduitsService} from './../produits.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  Identifiant:number;
  libelle:string;
  submitted:boolean=false;
  message:string;
  constructor(private produitservice:ProduitsService) { }
  onSubmit(f:NgForm)
  { this.submitted=this.produitservice.addProduit(this.Identifiant,this.libelle);
    if (this.submitted)
    {this.message="Votre nouveau produit "+this.libelle+" a bien été ajouté";}
    else this.message="Le produit d’id "+this.Identifiant+" existe déjà";
 }
 vider(){this.message="";}
  ngOnInit() {}

  }


