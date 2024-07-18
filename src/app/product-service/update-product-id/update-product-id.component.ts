import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product-id',
  templateUrl: './update-product-id.component.html',
  styleUrls: ['./update-product-id.component.css']
})

export class UpdateProductIdComponent implements OnInit {

  productId: number=0;
  product: Product = new Product();
  
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];

    this.productService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.productService.updateProductById(this.productId, this.product).subscribe( data =>{
        this.goToProductList();
      }
      , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products']);
  }
}