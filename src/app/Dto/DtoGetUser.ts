export interface DtoGetUser {
  id:         number;
  name:       string;
  email:      string;
  password:   string;
  project_id: number;
  created_at: Date;
  updated_at: Date;
}
