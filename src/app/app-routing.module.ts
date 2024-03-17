import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WaterComponent } from './component/water/water.component';
import { AirComponent } from './component/air/air.component';
import { SoilComponent } from './component/soil/soil.component';
import { SampleCreateComponent } from './component/sample-create/sample-create.component';
import { SampleListComponent } from './component/sample-list/sample-list.component';
import { SampleEditComponent } from './component/sample-edit/sample-edit.component';
import { ResearchComponent } from './component/research/research.component';
import { SamplingComponent } from './component/sampling/sampling.component';
import { RissoftComponent } from './component/rissoft/rissoft.component';
import { SampleanalysisComponent } from './component/sampleanalysis/sampleanalysis.component';
import { LabanalysisComponent } from './component/labanalysis/labanalysis.component';
import { ClockComponent } from './component/clock/clock.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { CompassComponent } from './component/compass/compass.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { Sample2CreateComponent } from './component/sample2-create/sample2-create.component';
import { Sample2ListComponent } from './component/sample2-list/sample2-list.component';
import { Sample2EditComponent } from './component/sample2-edit/sample2-edit.component';
import { Sample3CreateComponent } from './component/sample3-create/sample3-create.component';
import { Sample3ListComponent } from './component/sample3-list/sample3-list.component';
import { Sample3EditComponent } from './component/sample3-edit/sample3-edit.component';
import { QuestionnaireComponent } from './component/questionnaire/questionnaire.component';
import { AnswersheetComponent } from './component/answersheet/answersheet.component';
import { AnswersheetListComponent } from './component/answersheet-list/answersheet-list.component';
import { AnswersheetEditComponent } from './component/answersheet-edit/answersheet-edit.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'list', component: ListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: CreateComponent },
  { path: 'edit/:userId', component: EditComponent },

  { path: 'water', component: WaterComponent },
  { path: 'air', component: AirComponent },
  { path: 'soil', component: SoilComponent },


  { path: 'add2', component: SampleCreateComponent },
  { path: 'list2', component: SampleListComponent },
  { path: 'edit2/:testId2', component: SampleEditComponent },

  { path: 'add3', component: Sample2CreateComponent },
  { path: 'list3', component: Sample2ListComponent },
  { path: 'edit3/:test2Id3', component: Sample2EditComponent },

  { path: 'add4', component: Sample3CreateComponent },
  { path: 'list4', component: Sample3ListComponent },
  { path: 'edit4/:test3Id4', component: Sample3EditComponent },

  { path: 'add4', component: Sample3CreateComponent },
  { path: 'list4', component: Sample3ListComponent },
  { path: 'edit4/:test3Id4', component: Sample3EditComponent },

  { path: 'qa', component: AnswersheetComponent },
  { path: 'qalist', component: AnswersheetListComponent },
  { path: 'qaedit/:qaId', component: AnswersheetEditComponent },

  { path: 'research', component: ResearchComponent },
  { path: 'sampling', component: SamplingComponent },
  { path: 'rissoft', component: RissoftComponent },

  { path: 'sampleanalysis', component: SampleanalysisComponent },
  { path: 'lapanalysis', component: LabanalysisComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },

  { path: 'clock', component: ClockComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'compass', component: CompassComponent },
  { path: 'calculator', component: CalculatorComponent },

  { path: '**', component: HomeComponent },
  // { path: 'post/:postId/view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
