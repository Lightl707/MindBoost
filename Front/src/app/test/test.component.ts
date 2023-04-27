import { Component } from '@angular/core';
import { Tests } from './tests'
import { Test } from './test'
import { __values } from 'tslib';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  test: Test[] = Tests;
  isTested: boolean = false;
  grade: number = 0;
  isChecked: boolean = true;
  fullgrade:number=0;

  check(item:string, test : Test) {
    if(item == test.answear && test.answeredCorrectly == false){
      
      this.grade++;
      test.answeredCorrectly = true
    }
  }

  getGrade() {
    this.Check();
    this.fullgrade=this.grade;
    this.grade=0;
    return this.fullgrade;

  }

  Check() {
    this.isChecked = !this.isChecked;
    return this.isChecked;
  }

}

