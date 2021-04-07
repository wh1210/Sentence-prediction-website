import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor() { }

  predict(sentence1: string, sentence2: string): Number {
    console.log("sentence1: " + sentence1)
    console.log("sentence2: " + sentence2)
    // TODO: Call API to do the prediction
    return 0.01
  }
}
