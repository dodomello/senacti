import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/servico.model';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css'],
  providers: [ServicosService]
})

export class ServicoComponent implements OnInit {

  private servico: Servico

  constructor(private route: ActivatedRoute, private servicosService: ServicosService) { }

  ngOnInit() { this.servico = this.servicosService.getServicoPorId(this.route.snapshot.params['id'])

          console.log(this.servico)
  }

}

