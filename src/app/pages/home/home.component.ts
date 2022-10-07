import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any = null;
  userName: string ="hiteshchoudhary";
  error : any= null ;

  constructor(private ref: ChangeDetectorRef,
    private githubService: GithubService) { }

  ngOnInit(): void {
  }
  handleRefresh(){
    this.user =null;
    
  }
  handleFind(){
    
    
    this.githubService.getUserDetails(this.userName).subscribe(
      (user)=>{
       
        this.user = user;
      this.error = null;
      this.ref.detectChanges();
      }
      ,(_err)=>{
        this.user=null;
        this.error="user not found";
      }
    )
  }
}
