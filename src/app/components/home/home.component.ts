import { Component } from '@angular/core';
import {WorkerComponent} from '../worker/worker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WorkerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title :string = "Massima Home";

}
