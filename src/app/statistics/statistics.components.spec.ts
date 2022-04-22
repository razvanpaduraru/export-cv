import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed, async} from "@angular/core/testing";
import {StatisticsComponent} from "./statistics.component";
import {HttpClient} from "@angular/common/http";

describe('Component: app-component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [StatisticsComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(StatisticsComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
})
