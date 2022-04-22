import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import {PublicationService} from "../publication.service";
import {TestBed} from "@angular/core/testing";
import {HttpHeaders} from "@angular/common/http";
import {UserInfo} from "../../model/user-info.model";
import {ExportedPublicationsListService} from "../exported-publications-list.service";

describe('PublicationService', () => {
  let service: ExportedPublicationsListService;
  let httpController: HttpTestingController;

  let url = 'http://localhost:8080/exportCV/getExportedPublications';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ExportedPublicationsListService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call fetchExportedPublicationsFromServer and return non empty array', () => {

    // 1
    service.fetchExportedPublicationsFromServer().subscribe((res) => {
      //2
      expect(res).toBeTruthy();
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    //4
    req.flush(new UserInfo('', 'Pop', '', '', '', ''));
  });
})
