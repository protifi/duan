import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './Component/login/login.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { CartComponent } from './Component/cart/cart.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ViewComponent } from './Component/view/view.component';
import { ChatboxComponent } from './Component/chatbox/chatbox.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    CheckoutComponent,
    CartComponent,
    ContactComponent,
    ViewComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
