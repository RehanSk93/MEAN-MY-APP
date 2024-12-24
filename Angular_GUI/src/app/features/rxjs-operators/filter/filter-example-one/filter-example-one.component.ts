import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-example-one',
  templateUrl: './filter-example-one.component.html',
  styleUrls: ['./filter-example-one.component.scss'],
})
export class FilterExampleOneComponent {
  // URL of the API endpoint
  url = 'https://jsonplaceholder.typicode.com/users';

  // userPost
  userPosts: any[] = [];

  ngOnInit() {}

  onUserPosts() {
    fetch(this.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        this.userPosts = data;
      })
      .catch((err) => {
        console.log('There was a problem with the fetch operation:', err);
      });
  }
}
