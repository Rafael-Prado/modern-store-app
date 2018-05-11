import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Componente
import { AppComponent } from './app.component';
import { HeadbarComponent } from './Componets/shared/headbar/headbar.component';
import { SubMenuComponent } from './Componets/shared/sub-menu/sub-menu.component';
import { ProductListComponent } from 'src/app/Componets/product-list/product-list.component';
import { FooterComponent } from 'src/app/Componets/shared/footer/footer.component';

//Pages
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { SignupPageComponent } from 'src/app/pages/signup-page/signup-page.component';
import { CartPageComponent } from 'src/app/pages/cart-page/cart-page.component';

//Rotas
import { Routing, RoutingProviders } from './app.routing';

//Services
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
