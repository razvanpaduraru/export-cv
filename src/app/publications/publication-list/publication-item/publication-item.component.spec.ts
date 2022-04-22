import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {PublicationItemComponent} from "./publication-item.component";
import {HttpClient} from "@angular/common/http";

describe('Component: publications-item', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [PublicationItemComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the component', () => {
    let fixture = TestBed.createComponent(PublicationItemComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same publication', () => {
    let fixture = TestBed.createComponent(PublicationItemComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toEqual('');
  })
})
