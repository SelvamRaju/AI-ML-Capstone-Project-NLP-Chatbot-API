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
    this.http.post<any>(url, this.getRandomInputValues(messageFromUser)).subscribe(data => {
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

  getRandomInputValuesAPI(description: string) {
    let valueSet = {"month":["January","February","March","April","May","June","July","August","September","October","November","December"],"country":["Country_01","Country_02","Country_03"],"local":["Local_01","Local_02","Local_03","Local_04","Local_05","Local_06","Local_07","Local_08","Local_09","Local_10","Local_11","Local_12"],"industrySector":["Mining","Metals","Others"],"genre":["Male","Female"],"employeeType":["Employee","Third Party","Third Party (Remote)"],"criticalRisk":["Pressed","Pressurized Systems","Manual Tools","Others","Fall prevention (same level)","Chemical substances","Liquid Metal","Electrical installation","Confined space","Pressurized Systems / Chemical Substances","Blocking and isolation of energies","Suspended Loads","Poll","Cut","Fall","Bees","Fall prevention","Not applicable","Traffic","Projection","Venomous Animals","Plates","Projection/Burning","remains of choco","Vehicles and Mobile Equipment","Projection/Choco","Machine Protection","Power lock","Burn","Projection/Manual Tools","Individual protection equipment","Electrical Shock","Projection of fragments"]};
    
    return {
      month : valueSet.month[Math.floor(Math.random()*valueSet.month.length)],
      country : valueSet.country[Math.floor(Math.random()*valueSet.country.length)],
      local : valueSet.local[Math.floor(Math.random()*valueSet.local.length)],
      industrySector : valueSet.industrySector[Math.floor(Math.random()*valueSet.industrySector.length)],
      genre : valueSet.genre[Math.floor(Math.random()*valueSet.genre.length)],
      employeeType : valueSet.employeeType[Math.floor(Math.random()*valueSet.employeeType.length)],
      criticalRisk : valueSet.criticalRisk[Math.floor(Math.random()*valueSet.criticalRisk.length)],
      description : description
    }
  }

}

