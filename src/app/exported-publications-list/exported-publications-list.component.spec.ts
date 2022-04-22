import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {TestBed} from "@angular/core/testing";
import {ExportedPublicationsListComponent} from "./exported-publications-list.component";
import {HttpClient} from "@angular/common/http";
import {ExportedPublicationsListService} from "../shared/service/exported-publications-list.service";

describe('Component: exported-pubbilcations-list', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ExportedPublicationsListComponent]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  })

  it('should create the component', () => {
    let fixture = TestBed.createComponent(ExportedPublicationsListComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should have the same exported publications', () => {
    let fixture = TestBed.createComponent(ExportedPublicationsListComponent);
    let app = fixture.debugElement.componentInstance;
    let exportedPublicationsService = fixture.debugElement.injector.get(ExportedPublicationsListService);
    fixture.detectChanges();
    expect(exportedPublicationsService.getExportedPublications()).toEqual(app.exportedPublications);
  })
})
