import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";
import {HttpClient} from "@angular/common/http";

describe('Component: header-component', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [HeaderComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the component', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
})
