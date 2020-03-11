import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleComponent } from './rule/rule.component';
import { StatComponent } from './stat/stat.component';

const routes: Routes = [
  { path: 'rule', component: RuleComponent },
  { path: 'stat', component: StatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
