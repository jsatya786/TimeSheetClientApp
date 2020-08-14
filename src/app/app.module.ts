import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EmployeeTimeSheetComponent } from './employee-time-sheet/employee-time-sheet.component';
import { NewTimeSheetSlotComponent } from './new-time-sheet-slot/new-time-sheet-slot.component';
import { TimesheetService} from '../../src/services/timesheet.service';

// Datepicker module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTimeSheetComponent,
    NewTimeSheetSlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
