import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-service/employee-list/employee-list.component';
import { EmployeeCompleteDetailsListComponent } from './employee-service/employee-complete-details-list/employee-complete-details-list.component';
import { CreateEmployeeComponent } from './employee-service/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee-service/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-service/employee-details/employee-details.component';
import { EmployeeDetailsNameComponent } from './employee-service/employee-details-name/employee-details-name.component';
import { UpdateEmployeeIdComponent } from './employee-service/update-employee-id/update-employee-id.component';
import { DeleteEmployeeComponent } from './employee-service/delete-employee/delete-employee.component';

import { LoginUserComponent } from './login-user-service/login-user/login-user.component';
import { LoginUserListComponent } from './login-user-service/login-user-list/login-user-list.component';
import { CreateLoginuserComponent } from './login-user-service/create-loginuser/create-loginuser.component';
import { RegistrationSuccessComponent } from './login-user-service/registration-success/registration-success.component';
import { LoginUserUpdateIdComponent } from './login-user-service/login-user-update-id/login-user-update-id.component';
import { LoginUserDetailsComponent } from './login-user-service/login-user-details/login-user-details.component';

import { AddressListComponent } from './address-service/address-list/address-list.component';
import { CreateAddressComponent } from './address-service/create-address/create-address.component';
import { UpdateAddressComponent } from './address-service/update-address/update-address.component';
import { AddressDetailsComponent } from './address-service/address-details/address-details.component';
import { AddressDetailsNameComponent } from './address-service/address-details-name/address-details-name.component';
import { AddressDetailsCityComponent } from './address-service/address-details-city/address-details-city.component';
import { UpdateAddressIdComponent } from './address-service/update-address-id/update-address-id.component';
import { DeleteAddressComponent } from './address-service/delete-address/delete-address.component';

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


const routes: Routes = [
                        
  {path: 'login-user', component: LoginUserComponent},
  {path: 'login-user-list', component: LoginUserListComponent},
  {path: 'create-login-user', component: CreateLoginuserComponent},
  {path: '', redirectTo: 'login-user', pathMatch: 'full'},
  {path: 'registration-success', component: RegistrationSuccessComponent},
  {path: 'login-user-update-id/:loginId', component: LoginUserUpdateIdComponent},
  {path: 'login-user-details/:loginId', component: LoginUserDetailsComponent},
                        
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee-complete-details-list', component: EmployeeCompleteDetailsListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  //{path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employee-details/:employeeId', component: EmployeeDetailsComponent},
  {path: 'employee-details-name/:employeeName', component: EmployeeDetailsNameComponent},
  {path: 'update-employee', component: UpdateEmployeeComponent},
  {path: 'update-employee-id/:employeeId', component: UpdateEmployeeIdComponent},
  {path: 'update-employee-search-id/:employeeIdVal', component: UpdateEmployeeComponent},
  {path: 'update-employee-search-name/:employeeNameVal', component: UpdateEmployeeComponent},
  {path: 'delete-employee', component: DeleteEmployeeComponent},
  {path: 'delete-employee-search-id/:employeeIdVal', component: DeleteEmployeeComponent},
  {path: 'delete-employee-search-name/:employeeNameVal', component: DeleteEmployeeComponent},
  
  {path: 'addresss', component: AddressListComponent},
  {path: 'create-address', component: CreateAddressComponent},
 // {path: '', redirectTo: 'addresss', pathMatch: 'full'},
  {path: 'address-details/:addressId', component: AddressDetailsComponent},
  {path: 'address-details-name/:addressCity', component: AddressDetailsNameComponent},
  {path: 'address-details-city/:addressCity', component: AddressDetailsCityComponent},
  {path: 'update-address', component: UpdateAddressComponent},
  {path: 'update-address-id/:addressId', component: UpdateAddressIdComponent},
  {path: 'update-address-search-id/:addressIdVal', component: UpdateAddressComponent},
  {path: 'update-address-search-city/:addressCityVal', component: UpdateAddressComponent},
  {path: 'delete-address', component: DeleteAddressComponent},
  {path: 'delete-address-search-id/:addressIdVal', component: DeleteAddressComponent},
  {path: 'delete-address-search-city/:addressCityVal', component: DeleteAddressComponent},

  {path: 'customers', component: CustomerListComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  //{path: '', redirectTo: 'customers', pathMatch: 'full'},
  {path: 'customer-details/:customerId', component: CustomerDetailsComponent},
  {path: 'customer-details-name/:customerName', component: CustomerDetailsNameComponent},
  {path: 'update-customer', component: UpdateCustomerComponent},
  {path: 'update-customer-id/:customerId', component: UpdateCustomerIdComponent},
  {path: 'update-customer-search-id/:customerIdVal', component: UpdateCustomerComponent},
  {path: 'update-customer-search-name/:customerNameVal', component: UpdateCustomerComponent},
  {path: 'delete-customer', component: DeleteCustomerComponent},
  {path: 'delete-customer-search-id/:customerIdVal', component: DeleteCustomerComponent},
  {path: 'delete-customer-search-name/:customerNameVal', component: DeleteCustomerComponent},
  
  {path: 'departments', component: DepartmentListComponent},
  {path: 'create-department', component: CreateDepartmentComponent},
  //{path: '', redirectTo: 'departments', pathMatch: 'full'},
  {path: 'department-details/:departmentId', component: DepartmentDetailsComponent},
  {path: 'department-details-name/:departmentName', component: DepartmentDetailsNameComponent},
  {path: 'update-department', component: UpdateDepartmentComponent},
  {path: 'update-department-id/:departmentId', component: UpdateDepartmentIdComponent},
  {path: 'update-department-search-id/:departmentIdVal', component: UpdateDepartmentComponent},
  {path: 'update-department-search-name/:departmentNameVal', component: UpdateDepartmentComponent},
  {path: 'delete-department', component: DeleteDepartmentComponent},
  {path: 'delete-department-search-id/:departmentIdVal', component: DeleteDepartmentComponent},
  {path: 'delete-department-search-name/:departmentNameVal', component: DeleteDepartmentComponent},
  
  {path: 'products', component: ProductListComponent},
  {path: 'create-product', component: CreateProductComponent},
  //{path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'product-details/:productId', component: ProductDetailsComponent},
  {path: 'product-details-name/:productName', component: ProductDetailsNameComponent},
  {path: 'update-product', component: UpdateProductComponent},
  {path: 'update-product-id/:productId', component: UpdateProductIdComponent},
  {path: 'update-product-search-id/:productIdVal', component: UpdateProductComponent},
  {path: 'update-product-search-name/:productNameVal', component: UpdateProductComponent},
  {path: 'delete-product', component: DeleteProductComponent},
  {path: 'delete-product-search-id/:productIdVal', component: DeleteProductComponent},
  {path: 'delete-product-search-name/:productNameVal', component: DeleteProductComponent},
  
  {path: 'trips', component: TripListComponent},
  {path: 'create-trip', component: CreateTripComponent},
  //{path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trip-details/:tripId', component: TripDetailsComponent},
  {path: 'trip-details-type/:tripType', component: TripDetailsTypeComponent},
  {path: 'update-trip', component: UpdateTripComponent},
  {path: 'update-trip-id/:tripId', component: UpdateTripIdComponent},
  {path: 'update-trip-search-id/:tripIdVal', component: UpdateTripComponent},
  {path: 'update-trip-search-type/:tripTypeVal', component: UpdateTripComponent},
  {path: 'delete-trip', component: DeleteTripComponent},
  {path: 'delete-trip-search-id/:tripIdVal', component: DeleteTripComponent},
  {path: 'delete-trip-search-type/:tripTypeVal', component: DeleteTripComponent},
  
  {path: 'users', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  //{path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'user-details-name/:userName', component: UserDetailsNameComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'update-user-id/:userId', component: UpdateUserIdComponent},
  {path: 'update-user-search-id/:userIdVal', component: UpdateUserComponent},
  {path: 'update-user-search-name/:userNameVal', component: UpdateUserComponent},
  {path: 'delete-user', component: DeleteUserComponent},
  {path: 'delete-user-search-id/:userIdVal', component: DeleteUserComponent},
  {path: 'delete-user-search-name/:userNameVal', component: DeleteUserComponent},
  
  
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'create-vehicle', component: CreateVehicleComponent},
  //{path: '', redirectTo: 'vehicles', pathMatch: 'full'},
  {path: 'vehicle-details/:vehicleId', component: VehicleDetailsComponent},
  {path: 'vehicle-details-type/:vehicleType', component: VehicleDetailsTypeComponent},
  {path: 'update-vehicle', component: UpdateVehicleComponent},
  {path: 'update-vehicle-id/:vehicleId', component: UpdateVehicleIdComponent},
  {path: 'update-vehicle-search-id/:vehicleIdVal', component: UpdateVehicleComponent},
  {path: 'update-vehicle-search-type/:vehicleTypeVal', component: UpdateVehicleComponent},
  {path: 'delete-vehicle', component: DeleteVehicleComponent},
  {path: 'delete-vehicle-search-id/:vehicleIdVal', component: DeleteVehicleComponent},
  {path: 'delete-vehicle-search-type/:vehicleTypeVal', component: DeleteVehicleComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
