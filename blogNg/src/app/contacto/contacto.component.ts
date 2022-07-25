import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  sendContact(event: Event) {
    event.preventDefault();


    this.openSnackBar('Gracias por contactarnos!', 'Cerrar', 3000);

  }

  openSnackBar(message: string, action?: string, duration?: number){
    this._snackBar.open(message, action, {
      duration
    });
  }
}
