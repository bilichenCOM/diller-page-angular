import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../_model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

	user: User;

	// form: new FormGroup({
				
	// });

  constructor() { }

  ngOnInit() {
  }



}
