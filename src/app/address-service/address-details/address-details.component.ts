import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ActivatedRoute } from '@angular/router';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})

export class AddressDetailsComponent implements OnInit {

  addressId: number=0;
  address: Address | undefined;
  //address: Address = new Address();
  //addresss: Address[] | undefined;
  addresss: Array<Address> = [];

  constructor(private route: ActivatedRoute, private router: Router, private employeService: AddressService) { }

  ngOnInit(): void {
    this.addressId = this.route.snapshot.params['addressId'];

    this.address = new Address();
    this.employeService.getAddressById(this.addressId).subscribe( data => {
      this.address = data;
    });
  }

  private getAddresss(){
    this.employeService.getAddresssList().subscribe(data => {
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
    this.employeService.deleteAddressById(addressId).subscribe( data => {
      console.log(data);
      this.getAddresss();
    })
  }
}