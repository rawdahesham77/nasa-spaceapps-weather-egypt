import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  formdata: FormGroup;
  constructor(
    private router: Router,
    private mapService: MapService,
    private fb: FormBuilder
  ) {
    this.formdata = fb.group({
      month: ['', Validators.required],
      weatherType: ['', Validators.required],
    });
  }
  private map!: L.Map;
  private marker!: L.Marker; // store one marker
  prob:any;

  ngAfterViewInit(): void {
    if (this.map) {
      this.map.remove();
    }

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
});

    // Initialize map
    this.map = L.map('map', {
      center: [30.0444, 31.2357], // القاهرة
      zoom: 6,
      zoomControl: true,
      zoomSnap: 0.25, // يخلي الزووم أنعم
      zoomDelta: 0.25, // يتحرك تدريجي مش بالقفزات
      wheelPxPerZoomLevel: 120, // يخلي عجلة الماوس أهدى
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 2,
      attribution: '© OpenStreetMap',
      noWrap: true,
    }).addTo(this.map);

    // بعد التحميل
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    // Handle map click
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      console.log('Clicked coords:', lat, lng);

      // Add / move marker on click
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        this.marker = L.marker([lat, lng]).addTo(this.map);
      }
      const latt = 30.0444;
      const langg = 31.2357;

      if (this.formdata.valid) {
        const { month, weatherType } = this.formdata.value;


        this.mapService
          .getWeatherProbability(latt, langg, month, weatherType)
          .subscribe({
            next: (res:any) => {
              console.log('Weather probabi  lity:', res);
              this.prob = res.probability;
            },
            error: (err) => {
              console.error('Error fetching probability:', err);
            },
          });
      }
    });
  }
}
