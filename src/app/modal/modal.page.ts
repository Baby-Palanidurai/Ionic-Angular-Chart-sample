import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public primaryXAxis: Object;
  public chartData: Object[];
  public primaryYAxis: Object;
  public legendSettings: Object;
  public tooltip: Object;
  public title: string;
  public marker: Object;
  public border: Object;
  public margin: Object;
  public chartArea: Object;

  public load(args): void {
    debugger
    //args.chart.loaded = null;
    //args.chart.refresh();
    //args.chart.width = args.chart.element.parentElement.clientWidth +'px';
   // args.chart.height = args.chart.element.parentElement.clientHeight -(this.margin['top'] + this.margin['bottom']) +'px';
  }
  
  public resize(args): void {
    //args.chart.width = args.chart.element.parentElement.clientWidth +'px';
    //args.chart.height = args.chart.element.parentElement.clientHeight +'px';
  }
  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    // Tooltip for chart
    this.tooltip = {
      enable: true
    }
    // Data for chart series
    this.chartData = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      labelIntersectAction: 'Rotate45'
    };
    this.primaryYAxis = {
      labelFormat: '${value}K'
    };
    this.marker = {
      dataLabel: {
        visible: true
      }
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Sales Analysis';
    this.border = { width: 2, color: '#FF0000' };
    this.margin = { left: 40, right: 40, top: 40, bottom: 40 };
    this.chartArea = { background: 'lightgreen' };
  }

  close(){
    this.modalController.dismiss();
  }




}
