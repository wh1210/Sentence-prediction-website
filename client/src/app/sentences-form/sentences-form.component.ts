import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Validators } from '@angular/forms';

import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-sentences-form',
  templateUrl: './sentences-form.component.html',
  styleUrls: ['./sentences-form.component.css']
})


export class SentencesFormComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    sentence1: ["", [Validators.required, Validators.minLength(1)]],
    sentence2: ["", [Validators.required, Validators.minLength(1)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private predictionService: PredictionService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  
  onSubmit(): void {
    // Call service to do prediction
    if (!this.checkoutForm.valid) {
      window.alert("Please fill out the sentences or check the sentence type (str).")
      return;
    }
    
    let prediction = this.predictionService.predict(this.checkoutForm.value.sentence1, this.checkoutForm.value.sentence2)
    let result = 'sentence1'
    if (prediction >= 0.05) result = 'sentence2'
    console.log(prediction)
    setTimeout(() => 
{
    this.router.navigate(['/feedback'], {queryParams: {
      sentence1: this.checkoutForm.value.sentence1,
      sentence2: this.checkoutForm.value.sentence2,
      prediction: prediction,
      result: result
    }});
  },
  500);
  }

}
