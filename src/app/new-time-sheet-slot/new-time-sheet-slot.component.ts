import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimesheetService } from 'src/services/timesheet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-time-sheet-slot',
  templateUrl: './new-time-sheet-slot.component.html',
  styleUrls: ['./new-time-sheet-slot.component.css']
})
export class NewTimeSheetSlotComponent implements OnInit {
  saveTimeForm: FormGroup;
  personsList:any;
  constructor(private service:TimesheetService,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {

    this.buildFormControls();
    this.getPersonsList();

  }
  buildFormControls() {
    this.saveTimeForm=new FormGroup({    
      Id: new FormControl(0),  
      Pid: new FormControl('',Validators.required),
      Date: new FormControl('',Validators.required),
      HoursWorked:new FormControl('',Validators.required)
    });
  }
  getPersonsList(){
    this.service.getPersonsList().subscribe(res=>{
      console.log("res:",res);
      this.personsList=res;
      error=>{console.log('server error occured.',error)};
    }); 
  }
  navigaeToList() {
    this.router.navigate(["EmplyeesTimeSheet"]);
  }
  onAdd(){
    this.service.saveTime(this.saveTimeForm.value).subscribe(data=>{
      this.toaster.success('Data saved sucessfully.');
      this.router.navigate(['EmplyeesTimeSheet']);
      error=>{
        this.toaster.error('Server error occured please try after some time.');
        console.log('server error occured.',error);}
    });
  }

}
