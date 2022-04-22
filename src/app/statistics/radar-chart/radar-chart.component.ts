import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import {PublicationService} from "../../shared/service/publication.service";
import {ExportedPublicationsListService} from "../../shared/service/exported-publications-list.service";

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: [ './radar-chart.component.css' ]
})
export class RadarChartComponent {
  // Radar

  constructor(private publicationService: PublicationService,
              private exportedPublicationsListService: ExportedPublicationsListService) {}

  public radarChartOptions: ChartConfiguration['options'] = {
    scales: {
      r: {
        angleLines: {
          display: false
        },
        suggestedMin: 0,
        suggestedMax: 8
      }
    },
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Journal-Article', 'Peer-Review', 'Proceedings-Article', 'Book-Chapter', 'Book'  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [ {
      data: [
        this.exportedPublicationsListService.countPublicationsByType("journal-article"),
        this.exportedPublicationsListService.countPublicationsByType("peer-review"),
        this.exportedPublicationsListService.countPublicationsByType("proceedings-article"),
        this.exportedPublicationsListService.countPublicationsByType("book-chapter"),
        this.exportedPublicationsListService.countPublicationsByType("book") ], label: 'Exported'
    }
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
