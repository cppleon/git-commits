import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Commit } from 'src/app/classes/Commit';
import { Branch } from 'src/app/classes/Branch';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  readonly owner: string = 'googleforgames';
  readonly repo: string = 'open-match';

  commits: Commit[] = [];
  branches: Branch[] = [];

  selectedBranch: Branch;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this._githubService.getCommits(this.owner, this.repo).subscribe(res => {
      this.commits = res;
    });

    this._githubService.getBranches(this.owner, this.repo).subscribe(res => {
      this.branches = res;

      this.branches.forEach(branch => {
        if (branch.name === 'master') {
          this.selectedBranch = branch;
        }
      });
    });
  }

  isSelected({ name }) {
    return this.selectedBranch.name === name;
  }

}
