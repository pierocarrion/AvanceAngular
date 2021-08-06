import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Libro } from './libro';
import { LibrosService } from './libro.service';
@Component({
  selector: 'crud',
  templateUrl: "./crud.component.html"
})
export class CrudComponent implements OnInit {
  libros: Libro[];

  constructor(private librosService: LibrosService) { }

  ngOnInit() {
    this.cargarData();
  }

  delete(libro: Libro) {
    this.librosService.deleteLibro(libro.ID.toString())
      .subscribe(libro => this.cargarData(),
        error => console.error(error));
  }

  cargarData() {
    this.librosService.getLibros()
      .subscribe(librosDesdeWS => this.libros= librosDesdeWS,
        error => console.error(error));
  }
}

