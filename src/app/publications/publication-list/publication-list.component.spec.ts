import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {PublicationListComponent} from "./publication-list.component";
import {HttpClient} from "@angular/common/http";
import {PublicationService} from "../../shared/service/publication.service";

describe('Component: exported-pubbilcations-list', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [PublicationListComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the component', () => {
    let fixture = TestBed.createComponent(PublicationListComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should have the same publications', () => {
    let fixture = TestBed.createComponent(PublicationListComponent);
    let app = fixture.debugElement.componentInstance;
    let exportedPublicationsService = fixture.debugElement.injector.get(PublicationService);
    fixture.detectChanges();
    expect(exportedPublicationsService.getPublications()).toEqual(app.publications);
  })
})
