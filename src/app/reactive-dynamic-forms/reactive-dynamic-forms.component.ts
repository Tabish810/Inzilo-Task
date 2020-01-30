import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reactive-dynamic-forms',
  templateUrl: './reactive-dynamic-forms.component.html',
  styleUrls: ['./reactive-dynamic-forms.component.scss']
})
export class ReactiveDynamicFormsComponent implements OnInit {

  myform: FormGroup
  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  addRow() {
    this.f.push(
      this.fb.group({
        address1: [null, [Validators.required]],
        address2: [null, [Validators.required]]
      })
    )
  }
  array: any = {
    name: "tabish",
    age: 232,
    addresses: [
      { address1: "my address", address2: "my address" },
      { address1: "myaddress", address2: "my address" }
    ]
  }
  deleteRow(index) {
    this.f.removeAt(index);
  }
  get f() {
    return this.myform.controls.addresses as FormArray;
  }
  submit() {
    console.log(this.myform.value);
    localStorage.setItem("data", JSON.stringify(this.myform.value));
  }
  update() {
    let dataSet = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < dataSet.addresses.length; i++){
      this.f.push(
        this.fb.group({
          address1: ['',[Validators.required]],
          address2: ['',[Validators.required]],
        })
      )
    }
    this.myform.patchValue(this.array);
    console.log(this.myform.value);
  }
  ngOnInit() {
    this.myform = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      addresses: new FormArray([])
    })
  }
}
