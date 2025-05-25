import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  standalone: true,   
  imports: [],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
  @Input() caminhoImagem!: string;
  @Input() alt!: string;
  @Input() preco!: number | string;
  @Input() nome!: string;  
}
