import { Component, OnInit } from '@angular/core';
import { Types } from '../types';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  
  todos:Types[]= [{sentence: 'take out the dog', isChecked: false},
  {sentence: 'throw out the garbage', isChecked: true},
  {sentence: 'something something', isChecked: false},
  {sentence: 'something else', isChecked: false},
  {sentence: 'and another item', isChecked: false}]

  constructor() {}

  
}
