import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit {

  ticketForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.ticketForm = this.fb.group({
      assignmentOverrule: [false],
      assignedTo: [false],
      firstCallResolution: [],
      source: ['', Validators.required],
      type: [''],
      category: ['', Validators.required],
      productServices: ['', Validators.required],
      nature: ['', Validators.required],
      status: [''],
      priority: ['', Validators.required],
      subject: ['', Validators.required],
      suggestions: [''],
      nonCustomer: [false],
      customer: ['', Validators.required],
      accountNo: [''],
      doNotSendNotification: [false],
      description: [''],
      resolution: [''],
      additionalComments: [''],
      accounts: [''],
      assignedUser: [''],
    })
  }

}
