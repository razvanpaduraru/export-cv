import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { PublicationService } from 'src/app/shared/service/publication.service';
import { ExportedPublicationsListService } from 'src/app/shared/service/exported-publications-list.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(private publicationService: PublicationService,
     private exportedPublicationsListService: ExportedPublicationsListService) {}

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max: 35
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Journal-Article', 'Peer-Review', 'Proceedings-Article', 'Book-Chapter', 'Book' ],
    datasets: [
      { data: [ this.publicationService.countDistinctPublishersPerType("journal-article"),
          this.publicationService.countDistinctPublishersPerType("peer-review"),
          this.publicationService.countDistinctPublishersPerType("proceedings-article"),
          this.publicationService.countDistinctPublishersPerType("book-chapter"),
          this.publicationService.countDistinctPublishersPerType("book")
        ], label: 'Publications' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
