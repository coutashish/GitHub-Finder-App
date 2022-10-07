import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  email : any = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    })
   }

  ngOnInit(): void {
  }
  async handleClick(){
    this.router.navigateByUrl('/signin')
  }
  async handleClickTwo(){
    this.router.navigateByUrl('/')
  }
}
