import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { CustomerService } from '../customer.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  //customers: Customer[] | undefined;
  customers: Array<Customer> = [];
  //customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers(){
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
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



  customerDetailsByName(customerName: String){
    this.router.navigate(['customer-details-name', customerName]);
  }

}