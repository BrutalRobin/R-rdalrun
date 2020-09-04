import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tilmeld',
  templateUrl: './tilmeld.component.html',
  styleUrls: ['./tilmeld.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TilmeldComponent implements OnInit {
  koebForm = this.fb.group({
    løb: ['', Validators.required],
    username: ['', Validators.required],
    lastName: ['', Validators.required],
    adress: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    flex: ['', Validators.required],
    checkin: ['', Validators.required],
    comment: ['', Validators.required],
  });
  @ViewChild("form") form: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }
    content: any;

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/rordal/pages/3`)
    .subscribe(data => {
      this.content = data;
      console.log(this.content)
    });
  }
  onSubmit() {
    if (this.koebForm.valid) {
    const formData: any = new FormData();
    formData.append('run_id', this.koebForm.get('løb').value);
    formData.append('firstname', this.koebForm.get('username').value);
    formData.append('lastname', this.koebForm.get('lastName').value);
    formData.append('address', this.koebForm.get('adress').value);
    formData.append('zipcode', this.koebForm.get('zip').value);
    formData.append('city', this.koebForm.get('city').value);
    formData.append('email', this.koebForm.get('email').value);
    formData.append('phone', this.koebForm.get('phone').value);
    formData.append('birthdate', parseInt((new Date(this.koebForm.get('checkin').value).getTime() / 1000).toFixed(0)));
    formData.append('gender', this.koebForm.get('flex').value);
    formData.append('comment', this.koebForm.get('comment').value);
    console.log(formData);
    this.http.post(`https://api.mediehuset.net/rordal/registrations`, formData).subscribe((res: any) => {
      console.log(res);
      if (res.status === true) {
          console.log(res.status);
          this.router.navigate(['/tak'])
      }
    });
  }
  else{
    window.alert('Du skal udfylde felterne');
  }
}
  focus() {
    const errMessage = document.getElementsByClassName('error')[0].remove();
  }


}
