import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Post {
  title: string
}

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient | null) {}

  create(post: Post): Observable<any> {
    return this.http!.post(``, post);
  }

  fetch(): Observable<any[]> {
    return this.http!.get<any[]>(``)
  }

  remove(id: number): Observable<any> {
    return this.http!.delete<void>(`${id}`)
  }
}
