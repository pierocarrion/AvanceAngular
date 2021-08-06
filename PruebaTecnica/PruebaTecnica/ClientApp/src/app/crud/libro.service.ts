import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Libro } from './libro';

@Injectable()
export class LibrosService {

  private apiURL = this.baseUrl + "api/libros";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiURL);
  }

  getLibro(libroId: string): Observable<Libro> {
    let params = new HttpParams().set('incluirDirecciones', "true");
    return this.http.get<Libro>(this.apiURL + '/' + libroId, { params: params });
  }

  createLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiURL, libro);
  }

  updateLibro(libro: Libro): Observable<Libro> {
    return this.http.put<Libro>(this.apiURL + "/" + libro.id.toString(), libro);
  }

  deleteLibro(libro: string): Observable<Libro> {
    return this.http.delete<Libro>(this.apiURL + "/" + libro);
  }

}
