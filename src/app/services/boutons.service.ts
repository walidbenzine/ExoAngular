import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Bouton } from '../interfaces/bouton.interface';

@Injectable({
  providedIn: 'root'
})
export class BoutonsService {

  getBoutons(): Observable<Bouton[]> {
    return of([
      { id: 1, titre: 'Bouton 1', description: 'Description 1' },
      { id: 2, titre: 'Bouton 2', description: 'Description 2' },
      { id: 3, titre: 'Bouton 3', description: 'Description 3' },
      { id: 4, titre: 'Bouton 4', description: 'Description 4' },
      { id: 5, titre: 'Bouton 5', description: 'Description 5' }
    ]);
  }
}
