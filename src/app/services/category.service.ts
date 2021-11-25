import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IColor } from '../models/color';
import { ICategory } from '../models/category';
import { IApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_BASE_URL = 'http://localhost:9000/api/category'

  constructor(private http: HttpClient) { }

  colors(): Observable<IColor[]> {
    return this.http.get<IColor[]>(`${this.API_BASE_URL}/color`)
  }

  list(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.API_BASE_URL}`)
  }

  detail(id: Number): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.API_BASE_URL}/${id}`)
  }

  delete(id: Number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(`${this.API_BASE_URL}/${id}`)
  }

  create(category: ICategory): Observable<IApiResponse> {
    let body = `{
      "name": "${category.name}",
      "slug": "${category.slug}",
      "color": ${category.color}
    }`

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<IApiResponse>(`${this.API_BASE_URL}/0`, body, { headers: headers })
  }

  update(category: ICategory): Observable<IApiResponse> {
    let body = `{
      "id"   : ${category.id},
      "name" : "${category.name}",
      "slug" : "${category.slug}",
      "color": ${category.color}
    }`

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.put<IApiResponse>(`${this.API_BASE_URL}/${category.id}`, body, { headers: headers })
  }

}
