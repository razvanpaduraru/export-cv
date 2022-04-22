import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {BarChartComponent} from "./bar-chart.component";
import {HttpClient} from "@angular/common/http";

describe('Component: app-component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [BarChartComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(BarChartComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
})
