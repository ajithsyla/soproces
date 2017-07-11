import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-kgrid',
  template: `
        <kendo-grid [data]="gridData" [height]="410">
            <kendo-grid-column field="ProductID" title="ID" width="40">
            </kendo-grid-column>
            <kendo-grid-column field="ProductName" title="Name" width="250">
            </kendo-grid-column>
            <kendo-grid-column field="Category.CategoryName" title="Category">
            </kendo-grid-column>
            <kendo-grid-column field="UnitPrice" title="Price" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="In stock" width="80">
            </kendo-grid-column>
            <kendo-grid-column field="Discontinued" title="Discontinued" width="120">
                <ng-template kendoGridCellTemplate let-dataItem>
                    <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `,
  styleUrls: ['./kgrid.component.css']
})
export class KgridComponent {
 private gridData: any[] = products;
  // constructor() { }

  // ngOnInit() {
  // }

}
