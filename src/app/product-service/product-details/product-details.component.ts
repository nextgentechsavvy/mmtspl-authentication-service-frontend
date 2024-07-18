import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  productId: number=0;
  product: Product | undefined;
  //product: Product = new Product();
  //products: Product[] | undefined;
  products: Array<Product> = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];

    this.product = new Product();
    this.productService.getProductById(this.productId).subscribe( data => {
      this.product = data;
    });
  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    });
    this.router.navigate(['products']);
  }
  productDetails(productId: number){
    this.router.navigate(['product-details', productId]);
  }

  updateProductById(productId: number){
    this.router.navigate(['update-product-id', productId]);
  }

  deleteProductById(productId: number){
    this.productService.deleteProductById(productId).subscribe( data => {
      console.log(data);
      this.getProducts();
    })
  }
}