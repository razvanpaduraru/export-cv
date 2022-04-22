import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {PublicationStartComponent} from "./publication-start.component";
import {HttpClient} from "@angular/common/http";
import {PublicationService} from "../../shared/service/publication.service";

describe('Component: publication-start', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [PublicationStartComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the component', () => {
    let fixture = TestBed.createComponent(PublicationStartComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same user info', () => {
    let fixture = TestBed.createComponent(PublicationStartComponent);
    let app = fixture.debugElement.componentInstance;
    let exportedPublicationsService = fixture.debugElement.injector.get(PublicationService);
    exportedPublicationsService.fetchPublicationsFromServer();
    expect(exportedPublicationsService.getUserInfo()).toEqual(app.userInfo);
  });
})
