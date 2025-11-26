import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Replaced RouterOutlet with CommonModule

@Component({
  selector: 'app-data-binding',
  standalone: true, // IMPORTANT: Ensure standalone is set
  imports: [CommonModule, FormsModule], // Ensure CommonModule and FormsModule are included
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation & Main Title (from previous examples)
  message = 'Data Binding Demonstration';

  // Property Binding (from previous examples)
  imageUrl = 'https://thumbs.dreamstime.com/z/king-lion-png-download-showcasing-hyper-realistic-portraiture-captured-medium-format-lens-k-resolution-image-294411667.jpg';
  altText = 'cute cat';

  // Style and Class Binding (from previous examples)
  textColor = 'blue';
  isHighlighted = true;

  // Two-Way Binding (from previous examples)
  yourName = '';

  // Event Binding (from previous examples)
  count = 0;

  // Event Binding Methods (from previous examples)
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  studentName = "Nimmy";
  score = 95;
  imageUrl1 = "https://thumbs.dreamstime.com/z/king-lion-png-download-showcasing-hyper-realistic-portraiture-captured-medium-format-lens-k-resolution-image-294411667.jpg"
  isDisabled = true;
  colSpanValue = 3;
  isPassing = true;
  boxColor = "purple";
  boxSize = "150px";
}
