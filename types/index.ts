export interface Contact {
  firstname: string;
  lastname: string;
  status: string;
  id: string;
}

export interface ContactState {
  Contacts: Contact[];
}

export interface DateData {
  [date: string]: number;
}

export interface LineChartData {
  cases: DateData;
  deaths: DateData;
  recovered: DateData;
}
