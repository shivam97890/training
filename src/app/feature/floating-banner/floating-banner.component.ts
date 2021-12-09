import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.scss']
})
export class FloatingBannerComponent implements OnInit, AfterViewInit {

  @ViewChild('one') one: TemplateRef<any> | undefined;
  @ViewChild('two') two: TemplateRef<any> | undefined;
  @ViewChild('three') three: TemplateRef<any> | undefined;
  @ViewChild('four') four: TemplateRef<any> | undefined;

  textToDisplay: any[] = [0]
  show: number = 0;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    
      this.textToDisplay = [
        this.one,
        this.two,
        this.three,
        this.four
      ];
    

    setInterval(() => {
      if (this.show >= 3) {
        this.show = 0;
      } else {
        this.show = this.show + 1;
      }
    }, 3000);
    this.cd.detectChanges();
  }
}
