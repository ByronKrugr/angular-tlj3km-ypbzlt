import {Component, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample {
   empForm: FormGroup;

   @ViewChild('f') myNgForm : any;
  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      ename: ['', Validators.required],
      job: ['', Validators.required],
      sal: [1000]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // save to db - TBD
    this.myNgForm.resetForm();
  }


  onClear(){
    this.myNgForm.resetForm();
  }

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */