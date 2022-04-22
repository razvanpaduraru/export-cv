import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {PublicationDetailComponent} from "./publication-detail.component";
import {HttpClient} from "@angular/common/http";
import {PublicationService} from "../../shared/service/publication.service";
import {RouterModule} from "@angular/router";

describe('Component: publication-detail', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterModule.forRoot([]) ],
      declarations: [PublicationDetailComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the component', () => {
    let fixture = TestBed.createComponent(PublicationDetailComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same publications', () => {
    let fixture = TestBed.createComponent(PublicationDetailComponent);
    let app = fixture.debugElement.componentInstance;
    let publicationsService = fixture.debugElement.injector.get(PublicationService);
    expect(publicationsService.getPublication(0)).toEqual(app.publication);
  })
})
