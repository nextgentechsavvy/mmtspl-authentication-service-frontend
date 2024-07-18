import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

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
  }

/*   onSubmit(){
    //this.updateAddressSearchById(this.address.addressId);
     this.addressService.getAddressById(this.address.addressId).subscribe( data =>{
        //this.goToAddressList();
        this.updateAddressSearchById(this.address.addressId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToAddressList(){
    this.router.navigate(['/addresss']);
  } */


 /*  updateAddressSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateAddressSearchById(addressIdVal: number){
    this.router.navigate(['update-address-search-id', addressIdVal]);
    //this.updateAddressSearchByIdRefresh();
  }


  updateAddressSearchByCity(addressCityVal: String){
    //this.router.navigate(['address-details-name', addressCity]);
     this.router.navigate(['update-address-search-city', addressCityVal]);
  }

  updateAddressById(addressIdVal: number){
    this.router.navigate(['update-address-id', addressIdVal]);
  }

  
}