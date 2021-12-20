import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Appointment } from 'src/app/models/meeting.model';
import { EntityService } from 'src/app/shared/entity.service';
import { catchError } from 'rxjs';

const httpOptions = {
	observe: 'body',
	responseType: 'json',
};

@Injectable({ providedIn: 'root' })
export class CalendarService extends EntityService<Appointment>
{
	constructor(http: HttpClient)
	{
		super(http, environment.apiUrl, "meetings")
	}
}