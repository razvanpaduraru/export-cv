import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {PieChartComponent} from "./pie-chart.component";
import {HttpClient} from "@angular/common/http";

describe('Component: app-component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [PieChartComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(PieChartComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
})
