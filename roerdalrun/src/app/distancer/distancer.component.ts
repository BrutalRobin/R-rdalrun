import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-distancer',
  templateUrl: './distancer.component.html',
  styleUrls: ['./distancer.component.scss']
})
export class DistancerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }
  content: any;
  runs: any;
  run: any;
  rundetails: any;

  ngOnInit(): void {
    this.run = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/rordal/pages/2`)
    .subscribe(data => {
      this.content = data;
      console.log(this.content)
    });
    this.http
    .get(`https://api.mediehuset.net/rordal/run`)
    .subscribe(data => {
      this.runs = data;
      console.log(this.runs)
    });
    this.findrun(this.run)
  }

  findrun(id){
    this.http
    .get(`https://api.mediehuset.net/rordal/run/${id}`)
    .subscribe(data => {
      this.rundetails = data;
      console.log(this.rundetails)
    });
  }

}
