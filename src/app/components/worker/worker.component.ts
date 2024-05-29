import { Component, OnInit } from '@angular/core';
import { Worker } from '../../models/worker.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-worker',
  standalone: true,
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})

export class WorkerComponent implements OnInit {
  title : string = "Massima Team";

  workers: Worker[] | undefined;

  private apiUrl = 'http://192.168.0.22:8000/worker/get-worker-roles';

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getWorkers();
  }

  getWorkers(): void {
    this._http.get<{ status: number, code: string, message: string, data: Worker[] }>(this.apiUrl).subscribe(
      response => {
        console.log('Response from API:', response);  // Log the complete response
        if (response.status === 200 && response.code === '1') {
          this.workers = response.data;
          console.log('Workers data:', this.workers);  // Log the workers data
        } else {
          console.error('Error fetching workers:', response.message);
        }
      },
      error => {
        console.error('Error fetching workers:', error);
      }
    );
  }
  
}