import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  idProduct: any = this.actRouter.snapshot.paramMap.get('id');
  product: any;

  constructor(public apiService: ApiService,
              public actRouter: ActivatedRoute,
              private cartService : CartService) { }

  ngOnInit(): void {
    this.apiService.showProduct({"_id": this.idProduct}).subscribe(resp => {
      console.log(resp.productos[0]);
      this.product = resp.productos[0];
    })
  }

  addtocart(product: any){
    this.cartService.addtoCart(product);
  }

}
