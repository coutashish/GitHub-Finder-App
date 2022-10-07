import { Component, OnInit , Input, OnChanges, ChangeDetectorRef} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements  OnChanges {

  @Input() 
  repoUrl: any ;
  repos: any = [] ;
  constructor(
    private gitHubService:GithubService,
    private ref:ChangeDetectorRef
  ) { }

 
  
  ngOnChanges(): void {
    
    
    if (this.repoUrl) {
      this.gitHubService.getRepos(this.repoUrl)
                        .subscribe(
                          //repos:[]
                            (repos:any) => {
                                                this.repos = repos;
                                                this.ref.detectChanges();
                                  }
                                  ,(err)=>{
                                              console.log(err);
                                  }
                            
                            )
      
    }
  }


}
