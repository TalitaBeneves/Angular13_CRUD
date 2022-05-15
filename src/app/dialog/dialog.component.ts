import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  productForm!: FormGroup;
  actionBtn: string = 'Salvar';

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit() {
    this.montarForm();

    if (this.editData) this.edit();
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

  edit() {
    this.actionBtn = 'Editar';
    this.productForm.controls['nome'].setValue(this.editData.nome);
    this.productForm.controls['categoria'].setValue(this.editData.categoria);
    this.productForm.controls['data'].setValue(this.editData.data);
    this.productForm.controls['produto'].setValue(this.editData.produto);
    this.productForm.controls['preco'].setValue(this.editData.preco);
    this.productForm.controls['comentario'].setValue(this.editData.comentario);
  }

  addProduct() {
    if (this.productForm.invalid) {
      alert('Por Favor Preenche todos os campos obrigatorios');
      return;
    }

    if (!this.editData) {
      this.api.postProduct(this.productForm.value).subscribe({
        next: (res) => {
          alert('O Produto foi adicionado com Sucesso');
          this.productForm.reset();
          this.dialogRef.close('Salvar');
        },
        error: () => {
          alert('Não foi possivel adicionar o Produto');
        },
      });
    } else {
      this.updateProduct();
    }
  }

  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert(`O Produto ${this.editData.nome} foi atualizado com Sucesso`);
        this.productForm.reset();
        this.dialogRef.close('Editar');
      },
      error: () => {
        alert('Erro ao editar Produto');
      },
    });
  }
  
}
