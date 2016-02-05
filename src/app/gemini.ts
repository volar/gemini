import {Component} from 'angular2/core';


@Component({
  selector: 'gemini-app',
  providers: [],
  templateUrl: 'app/gemini.html',
  directives: [],
  pipes: []
})
export class GeminiApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
