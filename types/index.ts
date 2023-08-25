export interface Contact {
  firstname: string;
  lastname: string;
  status: string;
  id: string;
}

export interface ContactState {
  Contacts: Contact[];
}
