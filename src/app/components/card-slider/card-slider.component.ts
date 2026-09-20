import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lib-card-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.scss',
})
export class CardSliderComponent implements AfterViewInit {
  @Input() gap = 12;
  @Input() cardsPerView = 3;
  @ViewChild('viewport') viewport?: ElementRef<HTMLDivElement>;

  current = 0;
  totalCards = 0;
  cardWidth = 250; // Default card width
  maxSlide = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.calculateDimensions();
  }

  private calculateDimensions() {
    if (!this.viewport) return;
    const viewport = this.viewport.nativeElement;
    const cards = viewport.querySelectorAll('lib-card');
    this.totalCards = cards.length;

    if (this.totalCards > 0) {
      // Use RAF to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const firstCard = cards[0] as HTMLElement;
        this.cardWidth = firstCard.offsetWidth || 250;
        this.maxSlide = Math.max(0, this.totalCards - this.cardsPerView);
        this.cdr.markForCheck();
      });
    }
  }

  prev() {
    if (this.current > 0) {
      this.current--;
      this.scrollToPosition();
    }
  }

  next() {
    if (this.current < this.maxSlide) {
      this.current++;
      this.scrollToPosition();
    }
  }

  private scrollToPosition() {
    if (!this.viewport) return;
    const scrollDistance = this.current * (this.cardWidth + this.gap);
    this.viewport.nativeElement.scrollLeft = scrollDistance;
  }

  get isPrevDisabled(): boolean {
    return this.current === 0;
  }

  get isNextDisabled(): boolean {
    return this.current >= this.maxSlide;
  }
}
