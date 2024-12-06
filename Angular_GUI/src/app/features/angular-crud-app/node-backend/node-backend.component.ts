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

  constructor(private nodeBackendService: NodeBackendService) {
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
  }

  getUserList() {
    this.nodeBackendService.getUserList().subscribe(
      (data) => {
        this.userList = data;
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
    this.nodeBackendService.createUser(this.userDetails.value).subscribe(
      (res) => {
        this.userDetails.reset({ state: '' });
        this.getUserList();
      },
      (err) => {
        console.log('Add User', err);
      }
    );
  }

  updateUser() {
    const _id = localStorage.getItem('UserID');
    this.nodeBackendService
      .updateUserDetails(_id, this.userDetails.value)
      .subscribe(
        (res) => {
          this.userDetails.reset({ state: '' });
          this.getUserList();
        },
        (err) => {
          console.log('Error Occurs while update User', err);
        }
      );
  }

  userEditDetails(user: any) {
    this.isEditMode = true;
    localStorage.setItem('UserID', user._id);
    this.userDetails.patchValue(user);
  }
  userDetailsDelete(userID: any) {
    let result = confirm('are you sure want to delete user!');
    if (result) {
      this.nodeBackendService.deleteUser(userID).subscribe(
        (res) => {
          if (res) {
            this.getUserList();
          }
        },
        (err) => {
          console.log('Error Occurs while delete user', err);
        }
      );
    }
  }
}
