export interface GitCommitsParams {
  sha?: string;	// SHA or branch to start listing commits from. Default: the repository’s default branch (usually master).
  path?: string;	// Only commits containing this file path will be returned.
  author?: string;	// GitHub login or email address by which to filter by commit author.
  since?: string;	// Only commits after this date will be returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
  until?: string;	// Only commits before this date will be returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
}
