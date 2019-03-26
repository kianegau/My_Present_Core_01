import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-present';
  skills = ['HTML', 'CSS', 'JavaScript'];
  digits = [];
  ViewMode = 'map';
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
  ];
  people = [
    {
      name: 'Douglas  Pace',
      country: 'UK'
    },
    {
      name: 'Mcleod  Mueller',
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      country: 'UK'
    },
    {
      name: 'Cook  Tyson',
      country: 'USA'
    }
  ];
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  getColor(country) {
    switch (country) {
      case 'UK':
        return 'brown';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }
}

