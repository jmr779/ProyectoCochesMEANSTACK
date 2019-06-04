import { Component, OnInit } from '@angular/core';
import { Coche } from '../coche';
import { CocheService } from '../coche.service';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  selectedCoche: Coche;
 
  coches: Coche[];



  constructor(private cocheService: CocheService,
    public dialog: MatDialog) { }


  filterPost = '';

  ngOnInit() {
    this.getCoches();
  }

  handleClick(coche: Coche) {
    //console.log('Click!', coche.modelo);
    const dialogRef = this.dialog.open(PopupComponent, {
      data: coche
    });

  }

  getCoches(): void {
    this.cocheService.getCoches()
        .subscribe(coches => this.coches = coches);
  }

}
