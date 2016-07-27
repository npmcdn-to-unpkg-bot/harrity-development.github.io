import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app',
  directives: [AlertComponent],
  templateUrl:'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}