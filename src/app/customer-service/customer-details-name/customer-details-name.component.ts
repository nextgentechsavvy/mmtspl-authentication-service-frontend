import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details-name',
  templateUrl: './customer-details-name.component.html',
  styleUrls: ['./customer-details-name.component.css']
})

export class CustomerDetailsNameComponent implements OnInit {

  customerName: String='';
  customer: Customer = new Customer();
  //customers: Customer[] | undefined;
  customers: Array<Customer> = [];

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }


  ngOnInit(): void {
    this.customerName = this.route.snapshot.params['customerName'];

    //this.customer = new Customer();
    this.customerService.getCustomerByName(this.customerName).subscribe( data => {
      this.customers = data;
    });
  }

  private getCustomers(){
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
    this.router.navigate(['customers']);
  }
  customerDetails(customerId: number){
    this.router.navigate(['customer-details', customerId]);
  }

  updateCustomerById(customerId: number){
    this.router.navigate(['update-customer-id', customerId]);
  }

  deleteCustomerById(customerId: number){
    this.customerService.deleteCustomerById(customerId).subscribe( data => {
      console.log(data);
      this.getCustomers();
    })
  }
}