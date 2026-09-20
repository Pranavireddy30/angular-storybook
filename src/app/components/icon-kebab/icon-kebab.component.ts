import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PopupComponent, PopupPlacement } from '../popup/popup.component';

export interface KebabAction {
  label: string;
  icon?: string;
}

@Component({
  selector: 'lib-icon-kebab',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './icon-kebab.component.html',
  styleUrl: './icon-kebab.component.scss',
})
export class IconKebabComponent implements AfterViewInit {
  @Input() items: KebabAction[] = [
    { label: 'Add to Trip', icon: '+' },
    { label: 'Request Policy Exemption', icon: '!' },
    { label: 'Replay Transaction', icon: '↺' },
  ];

  @Input() placement: PopupPlacement = 'right';
  @Input() open = true;

  @Output() onClick = new EventEmitter<Event>();
  @Output() itemSelected = new EventEmitter<KebabAction>();

  @ViewChild('menuButton') menuButton?: ElementRef<HTMLButtonElement>;
  menuOpen = true;
  anchorRect: DOMRect | null = null;

  ngAfterViewInit(): void {
    this.syncAnchor();
  }

  ngOnChanges(): void {
    this.menuOpen = this.open;
    this.syncAnchor();
  }

  private syncAnchor(): void {
    if (this.menuOpen && this.menuButton) {
      this.anchorRect = this.menuButton.nativeElement.getBoundingClientRect();
    }
  }

  toggleMenu(event?: Event): void {
    if (event) {
      this.onClick.emit(event);
    }

    this.menuOpen = !this.menuOpen;
    this.open = this.menuOpen;
    this.syncAnchor();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.open = false;
  }

  selectItem(item: KebabAction): void {
    this.itemSelected.emit(item);
    this.closeMenu();
  }
}
