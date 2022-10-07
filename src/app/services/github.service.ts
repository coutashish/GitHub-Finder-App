import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';




//https://api.github.com/users/coutashish/repos

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private http: HttpClient) { }

  getUserDetails(userName:string){
    return this.http.get(`https://api.github.com/users/${userName}`)
  }
  getRepos(repoUrl:string){
  //  return this.http.get(`https://api.github.com/users/coutashish/repos`)
  return this.http.get(repoUrl);
  }
}

