import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Journey } from '../../../shared/interfaces/journey';
import { JourneysService } from './journeys.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'journeys',
  templateUrl: './journeys.html',
  styleUrls: ['./journeys.scss']
})
export class Journeys implements OnInit {


  // journey==null -> Create ; journey = Object -> Edit;
  public journey: Journey;
  public journeys: Journey[];
  editing = {};

  constructor(private service: JourneysService, private alert: AlertService) { }

  ngOnInit() {
    this.service.getJourneys().subscribe(data => {
      this.journeys = data;
    });
  }

  public updateView(form: any): void {
    const joudata = new Journey();
    joudata.id = form.get('id').value;
    joudata.origen = form.get('from').value;
    joudata.destino = form.get('to').value;
    if (this.journey === null) {
      this.service.postJourney(joudata).subscribe(data => {
        this.ngOnInit();
        this.alert.addAlert('Congrats', 'The journey has been added successfully', 'success');
      }
      );
    } else {
      this.service.putJourney(joudata).subscribe(data => {
        this.ngOnInit();
        this.alert.addAlert('Congrats', 'The journey has been updated successfully', 'success');
      } );
    }
    // Hide form
    this.journey = undefined;
  }

}
