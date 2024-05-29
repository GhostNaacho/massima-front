import { Component } from '@angular/core';
import {footer} from '../../../data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footer : any = footer;
  

}
