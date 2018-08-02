export class LocationModel {
    lat: number;
    lng: number;

    constructor(data?: any) {
        if (data) {
            this.lat = data.lat;
            this.lng = data.lng;
        }
    }
}

export class LightningModel {
    date: number;
    distance: number;
    location: LocationModel;
    time: number;

    constructor(data?: any) {
        if (data) {
            this.date = data.date;
            this.distance = data.distance;
            this.location = new LocationModel(data.location);
            this.time = data.time;
        }
    }
}
