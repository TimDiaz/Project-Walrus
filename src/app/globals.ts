import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable()
export class Globals {
  appName = 'NTT Timesheet';
  maxWorkHoursPerWeek = 0;
  baseApiUrl: string

  constructor() {
    this.baseApiUrl = environment.baseApiUrl;
  }
}
