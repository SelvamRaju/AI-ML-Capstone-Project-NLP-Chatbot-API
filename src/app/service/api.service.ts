import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  firebaseRef: AngularFireList<any>;
  

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }
  /* getMessage(){    
   return this.http.get("https://9ccf-34-139-142-56.ngrok.io/accident-prediction");
  } */

  postMessage(url:string, messageFromUser: any) { 
    this.http.post<any>(url, { message: messageFromUser }).subscribe(data => {
      console.log("POST SUCCESS : ", data);
      return new Promise(resolve => {
        resolve(data.data.message);
    });
    })
   }

   getFireBaseData() {
    this.firebaseRef = this.db.list('/');
    return this.firebaseRef;
  }

}

