import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-om',
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.scss']
})
export class OmComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }
  content: any;

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/rordal/pages/4`)
    .subscribe(data => {
      this.content = data;
      console.log(this.content)
    });
  }

}
