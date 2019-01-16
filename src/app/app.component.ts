import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'World';
  nameControl: FormControl;

  ngOnInit() {
    this.nameControl = new FormControl('John');
    this.nameControl.valueChanges.subscribe(value => console.log(value));
  }
}
