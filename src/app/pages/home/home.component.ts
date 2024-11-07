import { Component, Inject } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { AuthService, User } from '@auth0/auth0-angular';
import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { Observable, throwError } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgIf, NavBarComponent, RouterOutlet, ReactiveFormsModule, CommonModule, MatIcon, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatGridListModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {

  itemForm: FormGroup;
  itens: Item[] = [];
  itens$: Observable<Item[]> = new Observable<Item[]>();
  itensComprados$: Observable<Item[]> = new Observable<Item[]>();

  

  constructor(public auth: AuthService, private itemService: ItemService,  
    @Inject(DOCUMENT) private doc: Document, private fb: FormBuilder) {
      this.itemForm = this.fb.group({
        nome: ['', Validators.required],
        quantidade: ['', Validators.required],
        comprado: false
      });

    }

  profile?: User | undefined | null;

 
  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;

    })

    this.carregarItens();
    
  }

  //Métodos-------------------------------------------//
  
  getItens(): void {
    this.itens$ = this.itemService.getItens().pipe(
      map(items => items.filter(item => item.comprado == false))
    );

    // this.itensComprados$ = this.itemService.getItens().pipe(
    //   map(items => items.filter(item => item.comprado == true))
    // );

    
    
    // this.itemService.getItens().pipe(
    // catchError((error=>{
    //   return throwError(error);
    // }))).subscribe((i: any) => {
    //   this.itens$ = i;
    // })
     
    
    // (
    //   map(items => items.filter(item => item.comprado == true))
    // );


    // this.itemService.getItens().pipe(
    //   catchError(error => {
    //     console.error("Erro ao carregar os itens:", error); // Log para depuração
    //     alert("Erro ao carregar os itens. Por favor, tente novamente mais tarde."); // Mensagem para o usuário
    //     return ([]); // Retorna um Observable de array vazio para o fluxo continuar
    //   })
    // ).subscribe((items: Item[]) => {
    //   // Filtra itens conforme o status 'comprado'
    //   this.itens$ = items.filter(item => !item.comprado);
    //   this.itensComprados$ = items.filter(item => item.comprado);
    // });




    
  }

  carregarItens() {
    this.itens$ = this.itemService.getItens().pipe(
      catchError(error => { 
        console.log()
        alert("Erro ao carregar os itens NÃO COMPRADOS. Por favor, tente novamente mais tarde.");
        return ([]);
      }),
      map(items => items.filter(item => item.comprado == false)) 
    );

    this.itensComprados$ = this.itemService.getItens().pipe(
      catchError(error => {
        alert("Erro ao carregar os itens COMPRADOS. Por favor, tente novamente mais tarde.");
        return ([]); 
      }),
      map(items => items.filter(item => item.comprado == true)) 
    );
  }


  addItem(): void {

    if (this.itemForm.invalid) { return; }
    
    this.itemForm.get('comprado')?.setValue(false);
    
    const newItem: Item = this.itemForm.value;
    this.itemService.addItem(newItem).subscribe(() => {
      this.itemForm.reset();
      this.carregarItens();
     
    });

  }

  comprarItem(item: Item): void{
    
    item.comprado = true
    
    this.itemService.updateItem(item).subscribe(() => {
      this.carregarItens();
    });
    
  }

  deletarItem(id: string): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.carregarItens();
    });
  }

  

 }




