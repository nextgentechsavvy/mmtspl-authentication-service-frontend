import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent implements OnInit {

  address: Address = new Address();
  
  constructor(private addressService: AddressService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveAddress(){
    this.addressService.createAddress(this.address).subscribe( data =>{
        console.log(data);
        this.goToAddressList();
      },
      error => console.log(error));
  }

  goToAddressList(){
    this.router.navigate(['/addresss']);
  }

  onSubmit(){
    console.log(this.address);
    this.saveAddress();
  }
}