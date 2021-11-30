import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.scss']
})
export class GridListViewComponent implements OnInit, AfterViewInit {

  @ViewChild("grid", { read: TemplateRef }) grid: TemplateRef<any> | undefined;
  @ViewChild("list", { read: TemplateRef }) list: TemplateRef<any> | undefined;

  templates: any = {};
  show = 'grid';
  dataList = [
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    },
    {
      title: 'Max',
      subtitle: 'pet',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      longText: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
      from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
      originally bred for hunting.`
    }
  ];



  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.templates['grid'] = this.grid;
    this.templates['list'] = this.list;
    this.cd.detectChanges();
  }

  showtemplate(selected: string): void {
    this.show = selected;
  }
  
}
