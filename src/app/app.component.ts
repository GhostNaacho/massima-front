import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { BodyComponent } from './components/shared/body/body.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkerComponent } from './components/worker/worker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,NavigationComponent, BodyComponent, FooterComponent,WorkerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'massima-front';
}
