import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';
import { HostDetails } from '../host-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
	  
  private localHostAddress: any;
		  
  //MMTSPL Service call REST API
  //private product_service_baseUrl = "http://192.168.1.4:9005/restapiproductservices/";
  
  //MMTSPL Service call Zull API Gateway
  private product_service_baseUrl = "http://localhost:8765/mmtspl-product-service/restapiproductservices/";
  //private product_service_baseUrl = "http://192.168.1.4:8765/mmtspl-product-service/restapiproductservices/";


  private product_service_baseUrlgetAllProductUrl = "getAllProduct";
  private product_service_baseUrlgetProductByIdUrl = "getProductById/";
  private product_service_baseUrladdProductUrl = "addProduct/";
  private product_service_baseUrlupdateProductUrl = "updateProduct/";
  private product_service_baseUrlupdateProductByIdUrl = "updateProductById/";
  private product_service_baseUrldeleteProductUrl = "deleteProduct/";
  private product_service_baseUrlgetProductByNameUrl = "getProductByName/";
  
  
  
  
  
  
  serverIPv4Address: String="localhost";
 
  
  //MMTSPL Service call REST API
  //private image_service_baseUrl = "http://192.168.1.4:9005/restapiimageservice/";
  
  //MMTSPL Service call Zull API Gateway
  private image_service_baseUrl = "http://localhost:8765/mmtspl-product-image-service/restapiproductimageservice/";
  //private image_service_baseUrl = "http://192.168.1.4:8765/mmtspl-product-image-service/restapiproductimageservice/";


  private image_service_baseUrluploadImage = "uploadImage";
  private image_service_baseUrlgetImageByName = "getImageByName/";
  
  
  
  
  
  
  
  
  
  

  constructor(private httpClient: HttpClient) { }
  
  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.product_service_baseUrl + this.product_service_baseUrlgetAllProductUrl}`);
  }


  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.product_service_baseUrl + this.product_service_baseUrlgetProductByIdUrl} ${productId}`);
  }

  createProduct(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.product_service_baseUrl + this.product_service_baseUrladdProductUrl}`, product);
  }

  
  updateProductById(productId: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.product_service_baseUrl + this.product_service_baseUrlupdateProductByIdUrl} ${productId}`, product);
  }

  deleteProductById(productId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.product_service_baseUrl + this.product_service_baseUrldeleteProductUrl} ${productId}`);
    return this.httpClient.get(`${this.product_service_baseUrl + this.product_service_baseUrldeleteProductUrl} ${productId}`);
  }



  getProductByName(productName: String): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.product_service_baseUrl + this.product_service_baseUrlgetProductByNameUrl} ${productName}`);
  }
  updateProduct(productId: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.product_service_baseUrl + this.product_service_baseUrlupdateProductUrl} ${productId}`, product);
  }

  deleteProduct(productId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.product_service_baseUrl + this.product_service_baseUrldeleteProductUrl} ${productId}`);
    return this.httpClient.get(`${this.product_service_baseUrl + this.product_service_baseUrldeleteProductUrl} ${productId}`);
  }
  
  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
	  
  setLocalHostAddress(hostDetails: HostDetails){
    this.product_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9005/restapiproductservices/";
  }
  
  
  
  


/*
	  onUpload() {
	    console.log(this.selectedFile);
	    const uploadImageData = new FormData();
	    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
	  

	    //this.httpClient.post('http://'+ this.serverIPv4Address + ':9011/restapiproductimageservice/uploadImage', uploadImageData, { observe: 'response' })
	    this.httpClient.post(this.image_service_baseUrl + this.image_service_baseUrluploadImage, uploadImageData, { observe: 'response' })
	      .subscribe((response) => {
	        if (response.status === 200) {
	          this.message = 'Image uploaded successfully';
	        }else if (response.status === 208) {
	            this.message = 'Duplicate image name found...';
	        }else {
	          this.message = 'Image not uploaded successfully';
	        }
	      }
	      );
	  }
*/
	  getImage(imageName:String):Observable<Object> {
	    //this.httpClient.get('http://'+ this.serverIPv4Address + ':9011/restapiproductimageservice/getImageByName/' + this.imageName)
	    return this.httpClient.get(this.image_service_baseUrl + this.image_service_baseUrlgetImageByName + imageName);
	      
	  }
}