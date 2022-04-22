import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PublicationService } from 'src/app/shared/service/publication.service';

@Component({
  selector: 'app-productivity-line-chart',
  templateUrl: './productivity-line-chart.component.html',
  styleUrls: ['./productivity-line-chart.component.css']
})
export class ProductivityLineChartComponent {

  constructor(private publicationService: PublicationService) {}

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.publicationService.countProductivityByTypePerYear("journal-article"),
        label: 'Journal-Article',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.publicationService.countProductivityByTypePerYear("proceedings-article"),
        label: 'Proceedings-Article',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: this.publicationService.countProductivityByTypePerYear("book-chapter"),
        label: 'Book-Chapter',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.publicationService.countProductivityByTypePerYear("peer-review"),
        label: 'Peer-Review',
        backgroundColor: 'rgba(100,0,0,0.5)',
        borderColor: 'green',
        pointBackgroundColor: 'rgba(60,100,150,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(60,100,150,1)',
        fill: 'origin',
      },
      {
        data: this.publicationService.countProductivityByTypePerYear("book"),
        label: 'Book',
        backgroundColor: 'rgba(150,50,70,0.3)',
        borderColor: 'blue',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: this.publicationService.getYears()
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      y: {
        min: 0,
        max: 100
      },
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

}
