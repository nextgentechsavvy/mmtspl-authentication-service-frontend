import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';


import { EmployeeListComponent } from './employee-service/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee-service/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee-service/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-service/employee-details/employee-details.component';
import { EmployeeDetailsNameComponent } from './employee-service/employee-details-name/employee-details-name.component';
import { UpdateEmployeeIdComponent } from './employee-service/update-employee-id/update-employee-id.component';
import { DeleteEmployeeComponent } from './employee-service/delete-employee/delete-employee.component';


import { LoginUserComponent } from './login-user-service/login-user/login-user.component';
import { LoginUserListComponent } from './login-user-service/login-user-list/login-user-list.component';
import { RegistrationSuccessComponent } from './login-user-service/registration-success/registration-success.component';
import { CreateLoginuserComponent } from './login-user-service/create-loginuser/create-loginuser.component';
import { LoginUserUpdateIdComponent } from './login-user-service/login-user-update-id/login-user-update-id.component';
import { LoginUserDetailsComponent } from './login-user-service/login-user-details/login-user-details.component';

import { AddressListComponent } from './address-service/address-list/address-list.component';
import { CreateAddressComponent } from './address-service/create-address/create-address.component';
import { UpdateAddressComponent } from './address-service/update-address/update-address.component';
import { AddressDetailsComponent } from './address-service/address-details/address-details.component';
import { AddressDetailsNameComponent } from './address-service/address-details-name/address-details-name.component';
import { UpdateAddressIdComponent } from './address-service/update-address-id/update-address-id.component';
import { DeleteAddressComponent } from './address-service/delete-address/delete-address.component';
import { AddressDetailsCityComponent } from './address-service/address-details-city/address-details-city.component';

import { CustomerListComponent } from './customer-service/customer-list/customer-list.component';
import { CreateCustomerComponent } from './customer-service/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer-service/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './customer-service/customer-details/customer-details.component';
import { CustomerDetailsNameComponent } from './customer-service/customer-details-name/customer-details-name.component';
import { UpdateCustomerIdComponent } from './customer-service/update-customer-id/update-customer-id.component';
import { DeleteCustomerComponent } from './customer-service/delete-customer/delete-customer.component';

import { DepartmentListComponent } from './department-service/department-list/department-list.component';
import { CreateDepartmentComponent } from './department-service/create-department/create-department.component';
import { UpdateDepartmentComponent } from './department-service/update-department/update-department.component';
import { DepartmentDetailsComponent } from './department-service/department-details/department-details.component';
import { DepartmentDetailsNameComponent } from './department-service/department-details-name/department-details-name.component';
import { UpdateDepartmentIdComponent } from './department-service/update-department-id/update-department-id.component';
import { DeleteDepartmentComponent } from './department-service/delete-department/delete-department.component';

import { ProductListComponent } from './product-service/product-list/product-list.component';
import { CreateProductComponent } from './product-service/create-product/create-product.component';
import { UpdateProductComponent } from './product-service/update-product/update-product.component';
import { ProductDetailsComponent } from './product-service/product-details/product-details.component';
import { ProductDetailsNameComponent } from './product-service/product-details-name/product-details-name.component';
import { UpdateProductIdComponent } from './product-service/update-product-id/update-product-id.component';
import { DeleteProductComponent } from './product-service/delete-product/delete-product.component';

import { TripListComponent } from './trip-service/trip-list/trip-list.component';
import { CreateTripComponent } from './trip-service/create-trip/create-trip.component';
import { UpdateTripComponent } from './trip-service/update-trip/update-trip.component';
import { TripDetailsComponent } from './trip-service/trip-details/trip-details.component';
import { TripDetailsTypeComponent } from './trip-service/trip-details-type/trip-details-type.component';
import { UpdateTripIdComponent } from './trip-service/update-trip-id/update-trip-id.component';
import { DeleteTripComponent } from './trip-service/delete-trip/delete-trip.component';

import { UserListComponent } from './user-service/user-list/user-list.component';
import { CreateUserComponent } from './user-service/create-user/create-user.component';
import { UpdateUserComponent } from './user-service/update-user/update-user.component';
import { UserDetailsComponent } from './user-service/user-details/user-details.component';
import { UserDetailsNameComponent } from './user-service/user-details-name/user-details-name.component';
import { UpdateUserIdComponent } from './user-service/update-user-id/update-user-id.component';
import { DeleteUserComponent } from './user-service/delete-user/delete-user.component';

import { VehicleListComponent } from './vehicle-service/vehicle-list/vehicle-list.component';
import { CreateVehicleComponent } from './vehicle-service/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './vehicle-service/update-vehicle/update-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-service/vehicle-details/vehicle-details.component';
import { VehicleDetailsTypeComponent } from './vehicle-service/vehicle-details-type/vehicle-details-type.component';
import { UpdateVehicleIdComponent } from './vehicle-service/update-vehicle-id/update-vehicle-id.component';
import { DeleteVehicleComponent } from './vehicle-service/delete-vehicle/delete-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsNameComponent,
    UpdateEmployeeIdComponent,
    DeleteEmployeeComponent,
    
    LoginUserComponent,
    LoginUserListComponent,
    RegistrationSuccessComponent,
    CreateLoginuserComponent,
    CreateLoginuserComponent,
    LoginUserUpdateIdComponent,
    LoginUserDetailsComponent,
    
    AddressListComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    AddressDetailsComponent,
    AddressDetailsNameComponent,
    UpdateAddressIdComponent,
    DeleteAddressComponent,
    AddressDetailsCityComponent,
    
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CustomerDetailsComponent,
    CustomerDetailsNameComponent,
    UpdateCustomerIdComponent,
    DeleteCustomerComponent,
    
    DepartmentListComponent,
    CreateDepartmentComponent,
    UpdateDepartmentComponent,
    DepartmentDetailsComponent,
    DepartmentDetailsNameComponent,
    UpdateDepartmentIdComponent,
    DeleteDepartmentComponent,
    
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    ProductDetailsNameComponent,
    UpdateProductIdComponent,
    DeleteProductComponent,
    
    TripListComponent,
    CreateTripComponent,
    UpdateTripComponent,
    TripDetailsComponent,
    TripDetailsTypeComponent,
    UpdateTripIdComponent,
    DeleteTripComponent,
    
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    UserDetailsNameComponent,
    UpdateUserIdComponent,
    DeleteUserComponent,
    
    VehicleListComponent,
    CreateVehicleComponent,
    UpdateVehicleComponent,
    VehicleDetailsComponent,
    VehicleDetailsTypeComponent,
    UpdateVehicleIdComponent,
    DeleteVehicleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
