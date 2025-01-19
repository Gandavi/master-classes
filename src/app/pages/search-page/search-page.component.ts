import { Component, inject } from '@angular/core';
import { MasterClassService } from '../../data/services/master-class.service';
import { MasterClassCardComponent } from "../../common-ui/master-class-card/master-class-card.component";
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-search-page',
  imports: [MasterClassCardComponent,JsonPipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  MasterClassService = inject(MasterClassService)
  masterClass:any = [] //массив мастер-классрв

  constructor(){
    this.MasterClassService.getMasterClassCard()
    .subscribe(val =>{
      this.masterClass = val
    })
  }
}
