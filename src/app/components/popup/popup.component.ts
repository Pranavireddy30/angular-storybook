import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

export type PopupPlacement = 'top' | 'bottom' | 'left' | 'right';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent implements OnChanges, AfterViewInit {
  @Input() open = false;
  @Input() title = '';
  @Input() variant: 'dialog' | 'menu' = 'dialog';
  @Input() placement: PopupPlacement = 'bottom';
  @Input() anchorRect: DOMRect | null = null;
  @Input() offset = 0;
  @Output() close = new EventEmitter<void>();

  @ViewChild('popupPanel') popupPanel?: ElementRef<HTMLElement>;
  panelStyle: Record<string, string> = {};

  ngAfterViewInit(): void {
    this.updateMenuPosition();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open'] || changes['placement'] || changes['anchorRect']) {
      requestAnimationFrame(() => this.updateMenuPosition());
    }
  }

  private updateMenuPosition(): void {
    if (this.variant !== 'menu' || !this.anchorRect) {
      this.panelStyle = {};
      return;
    }

    const panel = this.popupPanel?.nativeElement;
    const width = panel?.offsetWidth || 210;
    const height = panel?.offsetHeight || 140;
    const margin = 12;
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;

    let left = 0;
    let top = 0;

    switch (this.placement) {
      case 'top':
        left = this.anchorRect.width / 2 - width / 2;
        top = -height - this.offset;
        break;
      case 'bottom':
        left = this.anchorRect.width / 2 - width / 2;
        top = this.anchorRect.height + this.offset;
        break;
      case 'left':
        left = -width - this.offset;
        top = 0;
        break;
      case 'right':
      default:
        left = this.anchorRect.width + this.offset;
        top = 0;
        break;
    }

    this.panelStyle = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
    };
  }
}
