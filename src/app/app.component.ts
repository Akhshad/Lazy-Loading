import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loading1';

  constructor(private spinner: NgxSpinnerService) {}

openSpinner() {
  this.spinner.show(); 
  const showPeriods = () => {
  };
  showPeriods(); 
  setTimeout(() => {
    this.spinner.hide(); // Hide the spinner after 5 seconds
  },7000); 
}

}
