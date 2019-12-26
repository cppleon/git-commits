import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GitCommitsParams } from '../classes/GitCommitsParams';
import { GitBranchesParams } from '../classes/GitBranchesParams';
import { Commit } from '../classes/Commit';
import { Branch } from '../classes/Branch';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  getCommits(owner: string, repo: string, parameters: GitCommitsParams = {}) {
    const fromObject = {};

    for (const key in parameters) {
      fromObject[key] = String(parameters[key]);
    }

    return this._http.get<Commit[]>(`https://api.github.com/repos/${owner}/${repo}/commits`, {
      params: new HttpParams({ fromObject })
    });
  }

  getBranches(owner: string, repo: string, parameters: GitBranchesParams = {}) {
    const fromObject = {};

    for (const key in parameters) {
      fromObject[key] = String(parameters[key]);
    }

    return this._http.get<Branch[]>(`https://api.github.com/repos/${owner}/${repo}/branches`, {
      params: new HttpParams({ fromObject })
    });
  }

}
