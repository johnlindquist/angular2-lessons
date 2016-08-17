import {Component} from "@angular/core";
import {TodoService} from "../shared/todo.module";
@Component({
    template: `
    <h2>Completed Todos</h2>
    <ul>
        <li *ngFor="let todo of todo.list | isComplete">{{todo.task}}</li>
    </ul>
`
})
export class Completed{
    constructor(public todo:TodoService){}
}