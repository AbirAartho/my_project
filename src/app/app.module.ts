import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CreateComponent } from './component/create/create.component';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { ViewComponent } from './component/view/view.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { SampleListComponent } from './component/sample-list/sample-list.component';
import { SampleCreateComponent } from './component/sample-create/sample-create.component';
import { SampleEditComponent } from './component/sample-edit/sample-edit.component';
import { WaterComponent } from './component/water/water.component';
import { AirComponent } from './component/air/air.component';
import { SoilComponent } from './component/soil/soil.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
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
import { AnswersheetEditComponent } from './component/answersheet-edit/answersheet-edit.component';
import { AnswersheetListComponent } from './component/answersheet-list/answersheet-list.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    LoginComponent,
    SignUpComponent,
    ViewComponent,
    NavbarComponent,
    SampleListComponent,
    SampleCreateComponent,
    SampleEditComponent,
    WaterComponent,
    AirComponent,
    SoilComponent,
    SidebarComponent,
    ResearchComponent,
    SamplingComponent,
    RissoftComponent,
    SampleanalysisComponent,
    LabanalysisComponent,
    ClockComponent,
    CalendarComponent,
    CompassComponent,
    CalculatorComponent,
    Sample2CreateComponent,
    Sample2ListComponent,
    Sample2EditComponent,
    Sample3CreateComponent,
    Sample3ListComponent,
    Sample3EditComponent,
    QuestionnaireComponent,
    AnswersheetComponent,
    AnswersheetEditComponent,
    AnswersheetListComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
