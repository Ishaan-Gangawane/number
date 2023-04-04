import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'number';

  mockData = {
    "names": [
      "John",
      "Emily",
      "Emily",
      "William",
      "John",
      "Emily",
      "David",
      "John",
      "William",
      "Emily",
      "Emily",
      "David",
      "David",
      "William",
      "John",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "ishaaaaaan",
      "rushi"
    ]
  };

  distinctNames = [];
  
  ngOnInit() {
    // Create an object that counts duplicates
    const counts = {};
    this.mockData.names.forEach(name => {
      counts[name] = counts[name] ? counts[name] + 1 : 1;
    });

    // Convert object to array and sort by number of duplicates
    this.distinctNames = Object.keys(counts).map(name => ({
      name,
      duplicates: counts[name]
    })).sort((a, b) => b.duplicates - a.duplicates);
  }

  getClass(duplicates: number) {
    if (duplicates > 0 && duplicates < 3) {
      return 'red';
    } else if (duplicates >= 3 && duplicates < 10) {
      return 'yellow';
    } else if (duplicates >= 10) {
      return 'green';
    }
    return 'green' 
  }
  
}