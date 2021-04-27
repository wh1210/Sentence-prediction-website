import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor() { }

  predict(sentence1: string, sentence2: string): Number {
    console.log("sentence1: " + sentence1)
    console.log("sentence2: " + sentence2)

    if (sentence1==sentence2){
      return 1
    }
    var prob = Math.random()
    return Number(prob.toFixed(4))
  }
}
