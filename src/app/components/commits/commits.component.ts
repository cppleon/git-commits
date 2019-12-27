import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Commit } from 'src/app/classes/Commit';
import { Branch } from 'src/app/classes/Branch';
import { GitCommitsParams } from 'src/app/classes/GitCommitsParams';

import { groupBy } from 'lodash';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  readonly owner: string = 'cppleon';
  readonly repo: string = 'git-commits';

  commits: Commit[] = [];
  branches: Branch[] = [];

  grouppedCommits: { [key: string]: Commit[]; } = {};

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.getCommits('master');

    this._githubService.getBranches(this.owner, this.repo).subscribe(res => {
      this.branches = res;
    });
  }

  getCommits(sha: string, until?: string) {
    const parameters: GitCommitsParams = { sha };

    if (until) {
      parameters.until = new Date(Date.parse(until) - 1).toISOString();
    }

    this._githubService.getCommits(this.owner, this.repo, parameters).subscribe(res => {
      this.commits = res;

      this.grouppedCommits = groupBy(this.commits, (commit: any) => new Date(commit.commit.author.date).toLocaleDateString());
    });
  }

}
