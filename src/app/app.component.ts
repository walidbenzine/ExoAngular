import { Component, inject } from '@angular/core';
import { BoutonsService } from './services/boutons.service';
import { Observable } from 'rxjs';
import { Bouton } from './interfaces/bouton.interface';
import { InstructionsComponent } from './components/instructions/instructions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    InstructionsComponent,
  ],
})
export class AppComponent {

  private readonly boutonsService = inject(BoutonsService);

  get boutons(): Observable<Bouton[]> {
    return this.boutonsService.getBoutons();
  }
}
