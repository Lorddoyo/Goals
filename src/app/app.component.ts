import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  goals = [
    new Goal(1,'Smoke some Zoot','Get some good strains',new Date(2018,4,26) ),
    new Goal(2,'tafuta rada','piga masimu',new Date(2018,4,26) ),
    new Goal(3,'jay ride','labda gari ya abdi',new Date(2018,4,26) ),
    new Goal(4,'watch some anime','new episode of dororo',new Date(2018,4,26) ),
    new Goal(5,'fuck a bad bitch','maybe natasha',new Date(2018,4,26)),
    new Goal(6,'fuck a peng bitch','for sure hale damn!!',new Date(2018,4,26) ),
  ]

}
