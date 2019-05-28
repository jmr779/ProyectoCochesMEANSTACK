import { Component, OnInit } from '@angular/core';
import { Coche } from '../coche';
import { CocheService } from '../coche.service';


@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  selectedCoche: Coche;
 
  coches: Coche[];

  constructor(private cocheService: CocheService) { }

  ngOnInit() {
    this.getCoches();
  }

  handleClick(coche: Coche) {
    console.log('Click!', coche.modelo);
  }

  getCoches(): void {
    this.cocheService.getCoches()
        .subscribe(coches => this.coches = coches);
  }

}
