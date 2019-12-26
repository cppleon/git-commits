export interface GitBranchesParams {
  protected?: boolean; // Setting to true returns only protected branches. When set to false, only unprotected branches are returned. Omitting this parameter returns all branches.
}
