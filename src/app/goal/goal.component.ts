import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1,'Smoke some Zoot','Get some good strains',new Date(2018,4,26)),

    new Goal(2,'tafuta rada','piga masimu',new Date(2018,4,26)),

    new Goal(3,'jay ride','labda gari ya abdi',new Date(2018,4,26)),

    new Goal(4,'watch some anime','new episode of dororo',new Date(2018,4,26)),

    new Goal(5,'fuck a bad bitch','maybe natasha',new Date(2018,4,26)),

    new Goal(6,'fuck a peng bitch','for sure hale damn!!',new Date(2018,4,26)),

  ]
  deleteGoal(isComplete,index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)
    }
       if (isComplete){
         this.goals.splice(index,1);
    }
  }
  toogleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength =this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate =new Date(goal.completeDate)
    this.goals.push(goal)
  }
  
  constructor() { }
  ngOnInit() {
  }

}
