import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }
  content: any;
  runs: any;

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/rordal/pages/1`)
    .subscribe(data => {
      this.content = data;
      console.log(this.content)
    });
    this.http
    .get(`https://api.mediehuset.net/rordal/run`)
    .subscribe(data => {
      this.runs = data;
      console.log(this.content)
    });
  }

}
