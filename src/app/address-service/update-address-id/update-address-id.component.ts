import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../address';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-address-id',
  templateUrl: './update-address-id.component.html',
  styleUrls: ['./update-address-id.component.css']
})

export class UpdateAddressIdComponent implements OnInit {

  addressId: number=0;
  address: Address = new Address();
  
  constructor(private addressService: AddressService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.addressId = this.route.snapshot.params['addressId'];

    this.addressService.getAddressById(this.addressId).subscribe(data => {
      this.address = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.addressService.updateAddressById(this.addressId, this.address).subscribe( data =>{
        this.goToAddressList();
      }
      , error => console.log(error));
  }

  goToAddressList(){
    this.router.navigate(['/addresss']);
  }
}