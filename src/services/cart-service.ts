import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { JwtHelperService  } from '@auth0/angular-jwt';
import { CartItem } from "src/models/cart-item";
import { Cart } from "src/models/cart";

@Injectable()
export class CartService{
    jwtHelperService: JwtHelperService  = new JwtHelperService ();
    constructor(
        public http : HttpClient,
        public storage : StorageService){

    }
    adicionar(cartItem:CartItem){
        this.storage.addItemCarrinho(cartItem);
    }
    getCarrinho():Cart{
        return this.storage.getCarrinho();
    }
    remover(){

    }
}