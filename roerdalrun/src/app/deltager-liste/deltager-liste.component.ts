import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-deltager-liste',
  templateUrl: './deltager-liste.component.html',
  styleUrls: ['./deltager-liste.component.scss']
})
export class DeltagerListeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }
  content: any;
  deltagere: any;
  deltagerarray: any;
  runner: any;
  status: any;
  birthdate: any;
  age: number;

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/rordal/pages/5`)
    .subscribe(data => {
      this.content = data;
      console.log(this.content)
    });
    this.http
    .get(`https://api.mediehuset.net/rordal/registrations`)
    .subscribe(data => {
      this.deltagere = data;
      this.deltagerarray = this.deltagere.items;

      console.log(this.deltagerarray)
    });
    this.seeUserdetails(2);
  }
  formatTime(time: number, format: string = 'DD.MM.YYYY') {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  seeUserdetails(id){
    this.http
    .get(`https://api.mediehuset.net/rordal/registrations/${id}`)
    .subscribe(data => {
      this.runner = data;
      console.log(this.runner)
    });
  }
  setUserRun(id) {
    switch (id) {
      case '1':
        return '10 Km rute';
      case '2':
        return '5 Km rute';
      case '3':
        return 'One Mile rute';
    }
  }
  setUserGender(id) {
    switch (id) {
      case 'f':
        return 'Kvinde';
      case 'm':
        return 'Mand';
      case '':
        return 'Andet';
    }
  }
  setGenderColor(id) {
    switch (id) {
      case 'm':
        return '#003F7F';
      case 'f':
        return '#FF007F';
      case '':
      return '#660095';
    }
  }
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.deltagerarray = this.deltagerarray.sort((low, high) => low.id - high.id);
          break;
        }
        case "Low2":
          {
            this.deltagerarray = this.deltagerarray.sort((low, high) => low.zipcode - high.zipcode);
            break;
          }

      case "High":
        {
          this.deltagerarray = this.deltagerarray.sort((low, high) => high.id - low.id);
          break;
        }
        case "High2":
          {
            this.deltagerarray = this.deltagerarray.sort((low, high) => high.zipcode - low.zipcode);
            break;
          }

      case "Firstname":
        {
          this.deltagerarray = this.deltagerarray.sort(function (low, high) {
            if (low.firstname.toLowerCase() < high.firstname.toLowerCase()) {
              return -1;
            }
            else if (low.firstname.toLowerCase() > high.firstname.toLowerCase()) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }
        case "Lastname":
          {
            this.deltagerarray = this.deltagerarray.sort(function (low, high) {
              if (low.lastname.toLowerCase() < high.lastname.toLowerCase()) {
                return -1;
              }
              else if (low.lastname.toLowerCase() > high.lastname.toLowerCase()) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }

      default: {
        this.deltagerarray = this.deltagerarray.sort((low, high) => low.id - high.id);
        break;
      }

    }
    return this.deltagerarray;

  }
  search(event: any){
    this.http
    .get(`https://api.mediehuset.net/rordal/search/${event.target.value}`)
    .subscribe(data => {
      this.deltagere = data;
      this.deltagerarray = this.deltagere.items;
    });
  }
}
