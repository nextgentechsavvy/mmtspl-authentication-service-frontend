import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerId: number=0;
  customerName: String='';
  customer: Customer = new Customer();

  customerNameVal: String = "";
  customerIdVal: number = 0;

  //customers: Customer[] | undefined;
   customers: Array<Customer> = [];

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.customerIdVal = this.route.snapshot.params['customerIdVal'];
      this.customerNameVal = this.route.snapshot.params['customerNameVal'];

      if(this.customerIdVal != null){
          this.customerService.getCustomerById(this.customerIdVal).subscribe(data => {
            this.customer = data;
            this.customers.push(this.customer);
          }, error => console.log(error)); 
        //this.customerIdVal = 0;

      }else{
        //this.customer = new Customer();
        this.customerService.getCustomerByName(this.customerNameVal).subscribe( data => {
          this.customers = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateCustomerSearchById(this.customer.customerId);
     this.customerService.getCustomerById(this.customer.customerId).subscribe( data =>{
        //this.goToCustomerList();
        this.updateCustomerSearchById(this.customer.customerId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToCustomerList(){
    this.router.navigate(['/customers']);
  } */


 /*  updateCustomerSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateCustomerSearchById(customerIdVal: number){
    this.router.navigate(['update-customer-search-id', customerIdVal]);
    //this.updateCustomerSearchByIdRefresh();
  }


  updateCustomerSearchByName(customerNameVal: String){
    //this.router.navigate(['customer-details-name', customerName]);
     this.router.navigate(['update-customer-search-name', customerNameVal]);
  }

  updateCustomerById(customerIdVal: number){
    this.router.navigate(['update-customer-id', customerIdVal]);
  }

  
}