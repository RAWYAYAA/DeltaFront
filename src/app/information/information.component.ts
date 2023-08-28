import {Component, OnInit} from '@angular/core';

import {Information} from "../information";
import {InformationService} from "../information-service.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html'
})
export class InformationComponent implements OnInit{
  information :Information[]=[];

  constructor(private route:ActivatedRoute ,private informationService: InformationService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      const filename =params.get('filename');
      if(filename){
        this.informationService.getInformationList(filename).subscribe(response =>{
          this.information=response;
          console.log(response);
        })
      }
    })
  }
}
