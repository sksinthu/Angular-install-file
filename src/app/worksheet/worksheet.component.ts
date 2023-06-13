import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { WorksheetModel } from './worksheet.module';
import { CountryISO, SearchCountryField } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-worksheet',
  templateUrl: './worksheet.component.html',
  styleUrls: ['./worksheet.component.css'],
})
export class WorksheetComponent implements OnInit {
  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  formValue!: FormGroup;
  formModelobj: WorksheetModel = new WorksheetModel();
  constructor(
    public api: ApiService,
    public fb: FormBuilder,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      legalFullName: [''],
      sin: [''],
      date: [''],
      email: [''],
      address1: [''],
      address2: [''],
      city: [''],
      province: [''],
      zip: [''],
      country: [''],
      residency: [''],
      workingwithbroker: [false],
      hassolicitor: [false],
      rent_own: [],
      marital_status: [''],
      number_of_dependants: [''],
      reason_for_purchase: [''],
      deciding_factor: [''],
      comments: [''],
      project_name:[''],
      model_name:[''],
      level:[''],
      locker_required:[''],
      bicycle_required:[''],
      parking_required:[''],
      phone1:[''],
      phone2:[''],
      phone3:[''],


    });
  }
  postworksheetDetails() {
    // Assign the value to the property of formModelobj
    this.formModelobj.firstName = this.formValue.value.firstName;
    this.formModelobj.middleName = this.formValue.value.middleName;
    this.formModelobj.lastName = this.formValue.value.lastName;
    this.formModelobj.legalFullName = this.formValue.value.legalFullName;
    this.formModelobj.sin = this.formValue.value.sin;
    this.formModelobj.date = this.formValue.value.date;
    this.formModelobj.email = this.formValue.value.email;
    this.formModelobj.address1 = this.formValue.value.address1;
    this.formModelobj.address2 = this.formValue.value.address2;
    this.formModelobj.city = this.formValue.value.city;
    this.formModelobj.province = this.formValue.value.province;
    this.formModelobj.zip = this.formValue.value.zip;
    this.formModelobj.country = this.formValue.value.country;
    this.formModelobj.residency = this.formValue.value.residency;
    this.formModelobj.workingwithbroker =this.formValue.value.workingwithbroker;
    this.formModelobj.hassolicitor = this.formValue.value.hassolicitor;
    this.formModelobj.rent_own = this.formValue.value.rent_own;
    this.formModelobj.marital_status = this.formValue.value.marital_status;
    this.formModelobj.number_of_dependants = this.formValue.value.number_of_dependants;
    this.formModelobj.reason_for_purchase = this.formValue.value.reason_for_purchase;
    this.formModelobj.deciding_factor = this.formValue.value.deciding_factor;
    this.formModelobj.comments = this.formValue.value.comments;
    this.formModelobj.project_name = this.formValue.value.project_name;
    this.formModelobj.model_name = this.formValue.value.model_name;
    this.formModelobj.level = this.formValue.value.level;
    this.formModelobj.locker_required = this.formValue.value.locker_required;
    this.formModelobj.bicycle_required = this.formValue.value.bicycle_required;
    this.formModelobj.parking_required = this.formValue.value.parking_required;
    this.formModelobj.phone1 = this.formValue.value.phone1;
    this.formModelobj.phone2 = this.formValue.value.phone2;
    this.formModelobj.phone3 = this.formValue.value.phone3;



    this.api.postFormdata(this.formModelobj).subscribe(
      (res) => {
        console.log(res);
        alert('success fully created');
        this.formValue.reset();
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
}
