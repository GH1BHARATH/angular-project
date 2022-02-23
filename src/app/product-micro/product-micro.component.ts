import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productmicro } from '../product-micro';
import { ProductMicroService } from './product-micro.service';

@Component({
  selector: 'app-product-micro',
  templateUrl: './product-micro.component.html',
  styleUrls: ['./product-micro.component.css'],
})
export class ProductMicroComponent implements OnInit {
  productsMicro: Observable<Productmicro []> | undefined;
  constructor(private productMicroService: ProductMicroService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productsMicro = this.productMicroService.getProductsList();
  }
}
