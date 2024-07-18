import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId: number=0;
  productName: String='';
  product: Product = new Product();

  productNameVal: String = "";
  productIdVal: number = 0;

  //products: Product[] | undefined;
   products: Array<Product> = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.productIdVal = this.route.snapshot.params['productIdVal'];
      this.productNameVal = this.route.snapshot.params['productNameVal'];

      if(this.productIdVal != null){
          this.productService.getProductById(this.productIdVal).subscribe(data => {
            this.product = data;
            this.products.push(this.product);
          }, error => console.log(error)); 
        //this.productIdVal = 0;

      }else{
        //this.product = new Product();
        this.productService.getProductByName(this.productNameVal).subscribe( data => {
          this.products = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateProductSearchById(this.product.productId);
     this.productService.getProductById(this.product.productId).subscribe( data =>{
        //this.goToProductList();
        this.updateProductSearchById(this.product.productId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToProductList(){
    this.router.navigate(['/products']);
  } */


 /*  updateProductSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateProductSearchById(productIdVal: number){
    this.router.navigate(['update-product-search-id', productIdVal]);
    //this.updateProductSearchByIdRefresh();
  }


  updateProductSearchByName(productNameVal: String){
    //this.router.navigate(['product-details-name', productName]);
     this.router.navigate(['update-product-search-name', productNameVal]);
  }

  updateProductById(productIdVal: number){
    this.router.navigate(['update-product-id', productIdVal]);
  }

  
}