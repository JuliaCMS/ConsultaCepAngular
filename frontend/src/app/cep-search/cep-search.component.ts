import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cep } from '../models/cep';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css']
})
  
export class CepSearchComponent implements OnInit {
  @ViewChild('cepForm') cepForm!: NgForm;
  addresses: Cep[] = [];
  currentAddress = -1;
  cepInput: string = '';
  errorMessage: string = '';

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  private fillAddressFields(address: Cep) {
    this.cepForm.controls['cep'].setValue(address.cep);
    this.cepForm.controls['publicArea'].setValue(address.logradouro);
    this.cepForm.controls['addressLine2'].setValue(address.complemento);
    this.cepForm.controls['Neighborhood'].setValue(address.bairro);
    this.cepForm.controls['city'].setValue(address.localidade);
    this.cepForm.controls['state'].setValue(address.uf);
    this.cepForm.controls['ibge'].setValue(address.ibge);
    this.cepForm.controls['gia'].setValue(address.gia);
    this.cepForm.controls['ddd'].setValue(address.ddd);
    this.cepForm.controls['siafi'].setValue(address.siafi);
  }
  
  cepSearch() {
    this.addresses = [];
    this.currentAddress = -1;
    this.errorMessage = '';

    const ceps = this.cepInput.split(';').map(cep => cep.trim().replace(/\D/g, ''));
    console.log('CEPs:', ceps);
    
    if (ceps.some(cep => cep === '')) {
      this.errorMessage = `A busca deve conter pelo menos um CEP.`;
      console.log('Error message:', this.errorMessage);
      return;
    }

    if (ceps.some(cep => cep.length < 8)) {
      this.errorMessage = 'Cada CEP deve ter pelo menos 8 dígitos.';
      console.log('Error message:', this.errorMessage);
      return;
    }

    for (const cep of ceps) {
      console.log('continuando a busca');
      this.cepService.getCepData(cep).subscribe(
        (address: Cep) => {
          if (address.cep) {
            this.addresses.push(address);

            if (this.addresses.length === 1) {
              this.currentAddress = 0;
              this.fillAddressFields(this.addresses[this.currentAddress]);
            }
          }
          else {
            this.errorMessage = `CEP ${cep} inválido ou inexistente.`;
            console.log('Error message:', this.errorMessage);
            return;
          }
        },
      );
    }
  }

  nextAddress() {
    if (this.currentAddress < this.addresses.length - 1) {
      this.currentAddress++;
      this.fillAddressFields(this.addresses[this.currentAddress]);
    }
  }

  previousAddress() {
    if (this.currentAddress > 0) {
      this.currentAddress--;
      this.fillAddressFields(this.addresses[this.currentAddress]);
    }
  }
}