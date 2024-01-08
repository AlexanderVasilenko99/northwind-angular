import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { EmployeesListComponent } from './components/employees-area/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees-area/add-employee/add-employee.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "products", component: ProductListComponent },
    { path: "new-product", component: AddProductComponent },
    { path: "employees", component: EmployeesListComponent },
    { path: "new-employee", component: AddEmployeeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
];
