import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auto-complete-dropdown',
  templateUrl: './auto-complete-dropdown.component.html',
  styleUrls: ['./auto-complete-dropdown.component.scss']
})
export class AutoCompleteDropdownComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: string[] = [];
  showOptions: boolean = false;

  ngOnInit() {
    this.filteredOptions = this.options;
  }

  onInput() {
    const inputValue: any = this.myControl.value?.toLowerCase();
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(inputValue)
    );
  }

  onOptionSelected(option: string) {
    this.myControl.setValue(option);
    this.filteredOptions = [];
    this.showOptions = false;
  }

  onBlur() {
    // Delay hiding the options to allow click event to register
    setTimeout(() => (this.showOptions = false), 200);
  }

  onFocus() {
    this.showOptions = true;
  }

  highlight(option: string): string {
    const inputValue = this.myControl.value?.toLowerCase();
    const regex = new RegExp(`(${inputValue})`, 'gi');
    return option.replace(regex, '<strong>$1</strong>');
  }

}
