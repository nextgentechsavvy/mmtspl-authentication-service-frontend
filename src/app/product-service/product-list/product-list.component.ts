import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  //products: Product[] | undefined;
  products: Array<Product> = [];
  //product: Product = new Product();

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBaseImage("nikon-d7500-01.jpg");
  }

  private getProducts(){
    this.productService.getProductsList().subscribe(data => {
      this.products = data;
    });
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



  productDetailsByName(productName: String){
    this.router.navigate(['product-details-name', productName]);
  }
  
  
  
  selectedFile!: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  imageType: string = "image/jpeg";
  
  public onFileChanged(event:any) {
	    //Select File
	    this.selectedFile = event.target.files[0];
	  }
  //private onUpload(){
	//  this.productService.onUpload();
  //}

  
  getBaseImage(imageName:String){
	  this.productService.getImage(imageName).subscribe((response) => {
    	  
    	  if (response != null) {
              this.message = 'Image found successfully';
              this.retrieveResonse = response;
              this.base64Data = this.retrieveResonse.imageRawByte;
              this.imageType = this.retrieveResonse.imageType;
              if(this.imageType = "image/png")
              	this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              else if(this.imageType = "image/jpeg")
            	  this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            	  else
            		  this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            } else {
              this.message = 'Image not found....';
            }
        }
      );
  }
  
  getImage(){
	  this.productService.getImage(this.imageName).subscribe((response) => {
    	  
    	  if (response != null) {
              this.message = 'Image found successfully';
              this.retrieveResonse = response;
              this.base64Data = this.retrieveResonse.imageRawByte;
              this.imageType = this.retrieveResonse.imageType;
              if(this.imageType = "image/png")
              	this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              else if(this.imageType = "image/jpeg")
            	  this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            	  else
            		  this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
            } else {
              this.message = 'Image not found....';
            }
        }
      );
  }
  
  

}