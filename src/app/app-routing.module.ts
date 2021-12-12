import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsComponent } from './goods/goods.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'goods', component: GoodsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
