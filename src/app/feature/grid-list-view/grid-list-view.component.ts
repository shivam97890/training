import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { GridListService } from 'src/app/core/grid-list.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.scss']
})
export class GridListViewComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("grid", { read: TemplateRef }) grid: TemplateRef<any> | undefined;
  @ViewChild("list", { read: TemplateRef }) list: TemplateRef<any> | undefined;

  templates: any = {};
  show = 'grid';
  dataList: any[] = [];
  private subs = new SubSink();

  constructor(private cd: ChangeDetectorRef, public gridListService: GridListService) { }

  ngOnInit(): void {
    this.gridListService.getData().subscribe((data: any) => {
      this.dataList = data;
      if (this.dataList.length === 0) {
        this.getData();
      }
    })

  }

  getData(): void {
    this.subs.sink = this.gridListService.getData().subscribe((res: any) => {
      this.dataList = res;
      this.gridListService.setData(res)
    })
  }

  ngAfterViewInit(): void {
    this.templates['grid'] = this.grid;
    this.templates['list'] = this.list;
    this.cd.detectChanges();
  }



  showtemplate(selected: string): void {
    this.show = selected;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
