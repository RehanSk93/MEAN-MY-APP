import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NodeBackendService } from './services/node-backend.service';

@Component({
  selector: 'app-node-backend',
  templateUrl: './node-backend.component.html',
  styleUrls: ['./node-backend.component.scss'],
})
export class NodeBackendComponent implements OnInit {
  userList: any[] = [];
  userDetails: FormGroup;

  constructor(private nodeBackend: NodeBackendService) {
    this.userDetails = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.nodeBackend.getUserList().subscribe(
      (data) => {
        this.userList = data;
        console.log(this.userList);
      },
      (error) => {
        console.error('Error fetching posts', error);
      }
    );
  }

  onSubmit() {
    console.log(this.userDetails.value);
  }
}
