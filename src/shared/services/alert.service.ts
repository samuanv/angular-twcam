import { Injectable, Inject } from '@angular/core';


@Injectable()

export class AlertService {

    private alerts = [];
    constructor() { }
    public addAlert(title: string, body: string, type: string) {
        const alert = {
            title: title,
            body: body,
            class: type
        };
        this.alerts.push(alert);
        setTimeout(() => this.closeAlert(alert), 3000);
    }
    public getAlerts() {
        return this.alerts;
    }
    public closeAlert(alert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

}
