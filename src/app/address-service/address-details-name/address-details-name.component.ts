import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-details-name',
  templateUrl: './address-details-name.component.html',
  styleUrls: ['./address-details-name.component.css']
})

export class AddressDetailsNameComponent implements OnInit {

  /* addressCity: String='';
  address: Address = new Address();
  //addresss: Address[] | undefined;
  addresss: Array<Address> = [];

  constructor(private route: ActivatedRoute, private router: Router, private addressService: AddressService) { }
 */

  ngOnInit(): void {
  /*   this.addressCity = this.route.snapshot.params['addressCity'];

    //this.address = new Address();
    this.addressService.getAddressByCity(this.addressCity).subscribe( data => {
      this.addresss = data;
    });
 */  }
/*
  private getAddresss(){
    this.addressService.getAddresssList().subscribe(data => {
      this.addresss = data;
    });
    this.router.navigate(['addresss']);
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
  } */
}