import { Component, OnInit } from '@angular/core';
import { Address } from '../address'
import { AddressService } from '../address.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})

export class AddressListComponent implements OnInit {

  //addresss: Address[] | undefined;
  addresss: Array<Address> = [];
  //address: Address = new Address();

  constructor(private addressService: AddressService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAddresss();
  }

  private getAddresss(){
    this.addressService.getAddresssList().subscribe(data => {
      this.addresss = data;
    });
  }

  addressDetails(addressId: number){
    this.router.navigate(['address-details', addressId]);
  }

  updateAddressById(addressId: number){
    this.router.navigate(['update-address-id', addressId]);
  }

  deleteAddressById(addressId: number){
    this.addressService.deleteAddressById(addressId).subscribe( data => {
      console.log(data);
      this.getAddresss();
    })
  }



  addressDetailsByCity(addressCity: String){
    this.router.navigate(['address-details-city', addressCity]);
  }

}