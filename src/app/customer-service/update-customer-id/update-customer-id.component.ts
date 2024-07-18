import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer-id',
  templateUrl: './update-customer-id.component.html',
  styleUrls: ['./update-customer-id.component.css']
})

export class UpdateCustomerIdComponent implements OnInit {

  customerId: number=0;
  customer: Customer = new Customer();
  
  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];

    this.customerService.getCustomerById(this.customerId).subscribe(data => {
      this.customer = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.customerService.updateCustomerById(this.customerId, this.customer).subscribe( data =>{
        this.goToCustomerList();
      }
      , error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customers']);
  }
}