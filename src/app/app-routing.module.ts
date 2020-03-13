import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleComponent } from './rule/rule.component';
import { StatComponent } from './stat/stat.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'rule', component: RuleComponent },
  { path: 'stat', component: StatComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
