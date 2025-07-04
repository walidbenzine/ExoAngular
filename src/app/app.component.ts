import { Component, inject } from '@angular/core';
import { BoutonsService } from './services/boutons.service';
import { Observable } from 'rxjs';
import { Bouton } from './interfaces/bouton.interface';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import { GraphComponent } from './components/graph/graph.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    InstructionsComponent,
    CommonModule,
    CardComponent,
    TitleComponent,
    GraphComponent
  ],
})
export class AppComponent {
  
  value : number = 0;
 
  private readonly boutonsService = inject(BoutonsService);

  get boutons(): Observable<Bouton[]> {
    return this.boutonsService.getBoutons();
  }

  getSelectedButton(boutons: Bouton[]): Bouton | undefined {
    return boutons.find(b => b.id === this.value);
  }

  clickButton(value:number){
    this.value =  value
  }
}
