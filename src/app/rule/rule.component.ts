import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rule } from '../Services/rule';
import { Router } from '@angular/router';
import { RuleService } from "../Services/rule.service";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {
  rules: Array<any>;
  rule: Observable<rule[]>;
  clickedEvent = false;

  constructor(private ruleService: RuleService,
    private router: Router) { }
  public isCollapsed = true;
  ngOnInit() {

  }


  getevent() {
    this.clickedEvent = true;
    this.ruleService.getevent().subscribe(data => {
    this.rule = data
      console.log(this.rule)
    });
    console.log('Deleted');
  }


}
