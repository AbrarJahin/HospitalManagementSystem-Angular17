import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private AuthURL: string = 'https://restful-booker.herokuapp.com/auth';
  private GetAllURL: string = 'https://restful-booker.herokuapp.com/booking';
  private GetByIdURL: string = 'https://restful-booker.herokuapp.com/booking/';
  private CreateURL: string = 'https://restful-booker.herokuapp.com/booking';
  private UpdateURL: string = 'https://restful-booker.herokuapp.com/booking/';
  private DeleteURL: string = 'https://restful-booker.herokuapp.com/booking/';

  constructor(private httpclient: HttpClient) {}

  public tyAuthinticate(username: string, password: string) {
    // username : "admin",
    // password : "password123"
    const payload = {
      username: username,
      password: password,
    };

    return this.httpclient
      .post<any>(this.AuthURL, payload)
      .pipe(map((response) => response.token));
  }
}
