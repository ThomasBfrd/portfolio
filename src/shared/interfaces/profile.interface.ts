export interface Profile {
  name: string;
  email: string;
  skills: Skills[];
}

export interface Skills {
  name: string;
  background: string;
}