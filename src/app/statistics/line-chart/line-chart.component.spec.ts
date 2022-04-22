import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {LineChartComponent} from "./line-chart.component";
import {HttpClient} from "@angular/common/http";

describe('Component: app-component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [LineChartComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(LineChartComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
})
