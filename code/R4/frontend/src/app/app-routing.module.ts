import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: "", redirectTo: "/autenticacion/login", pathMatch: "full" },
  { path: "autenticacion", loadChildren: "./components/auth/auth.module#AuthModule" },
  {path: "producto", loadChildren: "./components/product/product.module#ProductModule"}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
