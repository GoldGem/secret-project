// import {Injectable} from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {CompletionObserver, Observable} from 'rxjs';
// import { map } from 'rxjs/operators';
//
// import {User} from '../models/user.model';
//
//
//
// @Injectable()
// export class UsersService {
//   constructor(private http: HttpClient) {
//   }
//
//   getUserByEmail(email: string): Observable<User> {
//     return this.http.get(`http://localhost:3000/users?email=${email}`)
//       .pipe(map((response: Response) => response.json()))
//       .pipe(map((user: any) => user[0] ? user[0] : undefined));
//   }
// }
