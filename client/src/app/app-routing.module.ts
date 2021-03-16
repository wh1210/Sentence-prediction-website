import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { SentencesFormComponent } from './sentences-form/sentences-form.component';

const routes: Routes = [
  { path: '', component: SentencesFormComponent },
  { path: 'feedback', component:  FeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
