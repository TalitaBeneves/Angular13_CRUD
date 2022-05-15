import { ApiService } from './../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-visualizar',
  templateUrl: './dialog-visualizar.component.html',
  styleUrls: ['./dialog-visualizar.component.css'],
})
export class DialogVisualizarComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public visualizar: any
  ) {}

  ngOnInit(): void {
    this.montarForm();

    if (this.visualizar)
      this.visualizarProduto();

    this.desabilitandoCampo();
  }

  montarForm() {
    this.productForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      data: ['', Validators.required],
      produto: ['', Validators.required],
      preco: ['', Validators.required],
      comentario: [''],
    });
  }

  visualizarProduto() {
    this.productForm.controls['nome'].setValue(this.visualizar.nome);
    this.productForm.controls['categoria'].setValue(this.visualizar.categoria);
    this.productForm.controls['data'].setValue(this.visualizar.data);
    this.productForm.controls['produto'].setValue(this.visualizar.produto);
    this.productForm.controls['preco'].setValue(this.visualizar.preco);
    this.productForm.controls['comentario'].setValue(
      this.visualizar.comentario
    );
  }

  desabilitandoCampo() {
    this.productForm.controls['nome'].disable();
    this.productForm.controls['categoria'].disable();
    this.productForm.controls['data'].disable();
    this.productForm.controls['produto'].disable();
    this.productForm.controls['preco'].disable();
    this.productForm.controls['comentario'].disable();
  }
}
