import { Component, OnInit } from '@angular/core';
import {random} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'typing';
  sentence = '';
  enteredNumber='';
  length=0;
  
  ngOnInit(): void {
    this.sentence = random.number().toString();
    this.length = this.sentence.length;
  }
  
  checkCharacter(letter:any,enteredNumber:any){



    if(!enteredNumber){
      return 'pending';
    }

    return letter === enteredNumber ? 'correct' : 'wrong';
  }

  onEnterValue(input:any){
    // console.log(input.value);
    this.enteredNumber = input.value;
    console.log(this.enteredNumber);
  }
}
