import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.css']
})


export class DeleteAddressComponent {

  addressId: number=0;
  addressCity: String='';
  address: Address = new Address();

  addressCityVal: String = "";
  addressIdVal: number = 0;

  //addresss: Address[] | undefined;
   addresss: Array<Address> = [];

  constructor(private addressService: AddressService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.addressIdVal = this.route.snapshot.params['addressIdVal'];
      this.addressCityVal = this.route.snapshot.params['addressCityVal'];

      if(this.addressIdVal != null){
          this.addressService.getAddressById(this.addressIdVal).subscribe(data => {
            this.address = data;
            this.addresss.push(this.address);
          }, error => console.log(error)); 
        //this.addressIdVal = 0;

      }else{
        //this.address = new Address();
        this.addressService.getAddressByCity(this.addressCityVal).subscribe( data => {
          this.addresss = data;
        }, error => console.log(error)); 
      }
      //this.router.navigate(['delete-address']);
  }

/*   onSubmit(){
    //this.deleteAddressSearchById(this.address.addressId);
     this.addressService.getAddressById(this.address.addressId).subscribe( data =>{
        //this.goToAddressList();
        this.deleteAddressSearchById(this.address.addressId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToAddressList(){
    this.router.navigate(['/addresss']);
  } */


 /*  deleteAddressSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteAddressSearchById(addressIdVal: number){
    this.router.navigate(['delete-address-search-id', addressIdVal]);
    //this.deleteAddressSearchByIdRefresh();
  }


  deleteAddressSearchByCity(addressCityVal: String){
    //this.router.navigate(['address-details-name', addressName]);
     this.router.navigate(['delete-address-search-city', addressCityVal]);
  }

  /* deleteAddressById(addressIdVal: number){
    this.router.navigate(['delete-address-id', addressIdVal]);
  } */

  deleteAddressById(addressId: number){
    this.addressService.deleteAddressById(addressId).subscribe( data => {
      console.log(data);
      //this.getAddresss();
      this.router.navigate(['delete-address']);
    })
  }
  
}