import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})


export class DeleteCustomerComponent {

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
      //this.router.navigate(['delete-customer']);
  }

/*   onSubmit(){
    //this.deleteCustomerSearchById(this.customer.customerId);
     this.customerService.getCustomerById(this.customer.customerId).subscribe( data =>{
        //this.goToCustomerList();
        this.deleteCustomerSearchById(this.customer.customerId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToCustomerList(){
    this.router.navigate(['/customers']);
  } */


 /*  deleteCustomerSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteCustomerSearchById(customerIdVal: number){
    this.router.navigate(['delete-customer-search-id', customerIdVal]);
    //this.deleteCustomerSearchByIdRefresh();
  }


  deleteCustomerSearchByName(customerNameVal: String){
    //this.router.navigate(['customer-details-name', customerName]);
     this.router.navigate(['delete-customer-search-name', customerNameVal]);
  }

  /* deleteCustomerById(customerIdVal: number){
    this.router.navigate(['delete-customer-id', customerIdVal]);
  } */

  deleteCustomerById(customerId: number){
    this.customerService.deleteCustomerById(customerId).subscribe( data => {
      console.log(data);
      //this.getCustomers();
      this.router.navigate(['delete-customer']);
    })
  }
  
}