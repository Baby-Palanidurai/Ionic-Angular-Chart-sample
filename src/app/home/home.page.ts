import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
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
    this.border = { width: 2, color: '#FF0000'};
    this.margin = { left: 40, right: 40, top: 40, bottom: 40 };
    this.chartArea = { background: 'silver'};
  }

  async openModal(){
    console.log('openModal triggered')
    const modal = await this.modalController.create({component: ModalPage})
    await modal.present();
  }
}
