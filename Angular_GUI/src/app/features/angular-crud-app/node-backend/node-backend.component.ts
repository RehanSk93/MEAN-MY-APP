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
  isEditMode: boolean = false;

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
    this.getUserList();
    console.log(this.isEditMode);
    
  }

  getUserList() {
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

  onSubmit(): void {
    if (this.isEditMode) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  addUser() {
    this.nodeBackend.createUser(this.userDetails.value).subscribe(
      (res) => {
        this.userDetails.reset();
        this.getUserList();
        console.log(res);
      },
      (err) => {
        console.log('Add User',err);
      }
    );
  }

  updateUser() {
    this.nodeBackend.updateUserDetails(this.userDetails.value, this.userDetails)
  }

  userEdit(user: any) {
    this.isEditMode = true;
    this.userDetails.patchValue(user);
  }
  userDelete(userID: any) {
    console.log(userID);
  }
}
