import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe( data =>{
        console.log(data);
        this.goToProductList();
      },
      error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products']);
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
}