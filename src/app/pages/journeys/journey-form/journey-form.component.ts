import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Journey } from '../../../../shared/interfaces/journey';
@Component({
  selector: 'journey-form',
  templateUrl: './journey-form.html',
  styleUrls: ['./journey-form.scss']
})
export class JourneyForm implements OnInit, OnChanges {

  @Input() journey: Journey;
  @Output() save = new EventEmitter();
  public form: FormGroup;

  public title: String;

  public airports = ['Valencia', 'Madrid', 'Barcelona', 'Bilbao', 'Alicante', 'Murcia', 'Sevilla', 'Vigo', 'Tarragona', 'Castellón'];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'from': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'to': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'id': [{value: '', disabled: true}]
    });
  }

  ngOnInit() {
    this.title = this.journey ? 'Edit journey' : 'Create journey';
    if ( this.journey ) {
      this.form = this.fb.group({
        'from': [this.journey.origen, Validators.compose([Validators.required, Validators.minLength(4)])],
        'to': [this.journey.destino, Validators.compose([Validators.required, Validators.minLength(4)])],
        'id': [{value: this.journey.id, disabled: true}]
      });
    } else {
      this.form = this.fb.group({
        'from': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'to': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'id': [{value: '', disabled: true}]
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.journey = changes.journey.currentValue;
    this.ngOnInit();
  }

  public onSubmit() {
    this.save.emit(this.form);
  }

}
