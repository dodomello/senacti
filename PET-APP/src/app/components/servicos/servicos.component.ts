import { Component, OnInit } from '@angular/core';
import { ServicosService } from 'src/app/services/servicos.service';
import { Servico } from 'src/app/models/servico.model';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css'],
  providers: [ ServicosService]
})
export class ServicosComponent implements OnInit {

    public servicos: Servico[]
    
  constructor(private servicosService: ServicosService) { }

  ngOnInit() {

    this.servicos = this.servicosService.getServicos()
  }

}
