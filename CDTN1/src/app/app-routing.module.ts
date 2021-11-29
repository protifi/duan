import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { ContactComponent } from './Component/contact/contact.component';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './Component/login/login.component';
import { ViewComponent } from './Component/view/view.component';

const routes: Routes = [
  {
    path:"",component:IndexComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"cart/checkout",component:CheckoutComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"view",component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
