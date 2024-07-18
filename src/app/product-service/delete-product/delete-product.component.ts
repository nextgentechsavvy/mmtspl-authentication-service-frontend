import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})


export class DeleteProductComponent {

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
      //this.router.navigate(['delete-product']);
  }

/*   onSubmit(){
    //this.deleteProductSearchById(this.product.productId);
     this.productService.getProductById(this.product.productId).subscribe( data =>{
        //this.goToProductList();
        this.deleteProductSearchById(this.product.productId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToProductList(){
    this.router.navigate(['/products']);
  } */


 /*  deleteProductSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteProductSearchById(productIdVal: number){
    this.router.navigate(['delete-product-search-id', productIdVal]);
    //this.deleteProductSearchByIdRefresh();
  }


  deleteProductSearchByName(productNameVal: String){
    //this.router.navigate(['product-details-name', productName]);
     this.router.navigate(['delete-product-search-name', productNameVal]);
  }

  /* deleteProductById(productIdVal: number){
    this.router.navigate(['delete-product-id', productIdVal]);
  } */

  deleteProductById(productId: number){
    this.productService.deleteProductById(productId).subscribe( data => {
      console.log(data);
      //this.getProducts();
      this.router.navigate(['delete-product']);
    })
  }
  
}