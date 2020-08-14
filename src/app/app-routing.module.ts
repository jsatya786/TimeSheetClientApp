import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeTimeSheetComponent } from './employee-time-sheet/employee-time-sheet.component';
import { NewTimeSheetSlotComponent } from './new-time-sheet-slot/new-time-sheet-slot.component';


const routes: Routes = [
  {path:'EmplyeesTimeSheet',component:EmployeeTimeSheetComponent},
  {path:'New', component:NewTimeSheetSlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
