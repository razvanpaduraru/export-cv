import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import {PublicationService} from "../publication.service";
import {TestBed} from "@angular/core/testing";
import {HttpHeaders} from "@angular/common/http";
import {UserInfo} from "../../model/user-info.model";

describe('PublicationService', () => {
  let service: PublicationService;
  let httpController: HttpTestingController;

  let urlUI = 'http://localhost:8080/exportCV/getUserInfo';
  let urlPublications = 'http://localhost:8080/exportCV/getPublications';
  let urlSP = 'http://localhost:8080/exportCV/savePublications';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PublicationService);
    httpController = TestBed.inject(HttpTestingController);
  });


  it('should call fetchUserInfo and return the correct first_name', () => {

    // 1
    service.fetchUserInfo().subscribe((res) => {
      //2
      expect(res.first_name).toEqual('Florin');
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlUI}`,
    });

    //4
    req.flush(new UserInfo('', '', '', 'Florin', '', ''));
  });

  it('should call fetchUserInfo and return the correct last_name', () => {

    // 1
    service.fetchUserInfo().subscribe((res) => {
      //2
      expect(res.last_name).toEqual('Pop');
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlUI}`,
    });

    //4
    req.flush(new UserInfo('', 'Pop', '', '', '', ''));
  });

  it('should call fetchUserInfo and return the correct email', () => {

    // 1
    service.fetchUserInfo().subscribe((res) => {
      //2
      expect(res.email_address).toEqual('florin.pop@cs.pub.ro');
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlUI}`,
    });

    //4
    req.flush(new UserInfo('', '', '', '', 'florin.pop@cs.pub.ro', ''));
  });

  it('should call fetchUserInfo and return the correct id', () => {

    // 1
    service.fetchUserInfo().subscribe((res) => {
      //2
      expect(res.id).toEqual('562');
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlUI}`,
    });

    //4
    req.flush(new UserInfo('562', '', '', '', '', ''));
  });

  it('should call fetchPublicationsFromServer and return non empty array', () => {

    // 1
    service.fetchPublicationsFromServer().subscribe((res) => {
      //2
      expect(res).not.toBeNull();
    });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${urlPublications}`,
    });

    //4
    req.flush(new UserInfo('', 'Pop', '', '', '', ''));
  });
})
