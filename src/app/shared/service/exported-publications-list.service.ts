import { ExportedPublication } from "../model/exported-publication.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ExportedPublicationsListService {
  exportedPublicationsChanged = new Subject<ExportedPublication[]>();
  startedEditing = new Subject<number>();
  private exportedPublications: ExportedPublication[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchExportedPublicationsFromServer() {
    return this.httpClient.get<ExportedPublication[]>('http://localhost:8080/exportCV/getExportedPublications')
    .pipe(
      tap(exportedPublications => {
        this.setExportedPublications(exportedPublications);
    }));
  }

  setExportedPublications(exportedPublications: ExportedPublication[]) {
    this.exportedPublications = exportedPublications;
    this.exportedPublicationsChanged.next(this.exportedPublications);
  }

  getExportedPublications() {
    return this.exportedPublications;
  }

  saveExportedPublications() {
    this.httpClient.put('http://localhost:8080/exportCV/saveExportedPublications', this.exportedPublications).subscribe();
  }

  exportCV() {
    this.httpClient.put('http://localhost:8080/exportCV/exportCV', this.exportedPublications).subscribe();
  }

  addExportedPublications(exportedPublication: ExportedPublication) {
    this.exportedPublications.push(exportedPublication);
    this.exportedPublicationsChanged.next(this.exportedPublications);
    this.saveExportedPublications();
  }

  deleteExportedPublication(id: string) {
    const index = this.exportedPublications.findIndex((publication) => publication.id === id);
    this.exportedPublications.splice(index, 1);
    this.exportedPublicationsChanged.next(this.exportedPublications);
    this.saveExportedPublications();
  }

  countPublicationsByType(type: string): number {
    const journals = this.exportedPublications.filter(publication => publication.publication_type === type);
    return journals.length;
  }

  countPublicationsByTypePerYear(type: string, years: string[]): number[] {
    let allYears: number[] = [];

    years.forEach(year => {
      let count: number = 0;
      this.exportedPublications.forEach(publication => {
        if (publication.publication_date != null &&
          publication.publication_date.substring(0,4) === year &&
          publication.publication_type === type)
        {
          count += 1;
        }
      });
      allYears.push(count);
    });

    return allYears;
  }
}
