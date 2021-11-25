import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../models/api-response';
import { IState } from '../models/state';
import { ITodo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_BASE_URL = 'http://localhost:9000/api/todo'

  constructor(private http: HttpClient) { }

  states(): Observable<IState[]> {
    return this.http.get<IState[]>(`${this.API_BASE_URL}/status`)
  }

  list(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.API_BASE_URL}`)
  }

  detail(id: Number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.API_BASE_URL}/${id}`)
  }

  delete(id: Number): Observable<IApiResponse> {
    return this.http.delete<IApiResponse>(`${this.API_BASE_URL}/${id}`)
  }

  create(todo: ITodo): Observable<IApiResponse> {
    let body = `{
      "title": "${todo.title}",
      "body": "${todo.body}",
      "categoryId": ${todo.categoryId}
    }`

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<IApiResponse>(`${this.API_BASE_URL}/0`, body, { headers: headers })
  }

  update(todo: ITodo): Observable<IApiResponse> {
    let body = `{
      "id"   : ${todo.id},
      "title": "${todo.title}",
      "body": "${todo.body}",
      "categoryId": ${todo.categoryId},
      "state": ${todo.state}
    }`

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.put<IApiResponse>(`${this.API_BASE_URL}/${todo.id}`, body, { headers: headers })
  }

}
