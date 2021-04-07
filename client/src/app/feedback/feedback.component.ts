import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  sentence1?: string;
  sentence2?: string;
  prediction?: number = 0;
  result?: string;

  feedbackForm = this.formBuilder.group({
    feedback: [""]
  });

  choices: string[] = ['sentence1', 'sentence2'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        this.sentence1 = params['sentence1'];
        this.sentence2 = params['sentence2'];
        this.prediction = params['prediction'];
        this.result = params['result'];
      });
  }

  onSubmit(): void {
    console.log(this.feedbackForm.value.feedback)
  }

}
