import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  products:Product [] = []
  filterText:string ="";

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(data=>{
      this.products = data

    })   
  }
}
