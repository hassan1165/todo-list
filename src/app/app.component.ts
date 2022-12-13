import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("moveInLeft", [
      transition("void=> *", [style({ transform: "translateX(300px)" }),
      animate(200, keyframes([
        style({ transform: "translateX(300px)" }),
        style({ transform: "translateX(0)" })

      ]))]),


      transition("*=>void", [style({ transform: "translateX(0px)" }),
      animate(100, keyframes([
        style({ transform: "translateX(0px)" }),
        style({ transform: "translateX(300px)" })

      ]))])

    ])

  ]
})

export class AppComponent {
  todoArray: any = [];
  todo: any;
  todoForm!: FormGroup<any>;

  constructor(
    private ref: ChangeDetectorRef,
  ) {
  }


  addTodo(value: any) {
    if (value !== "") {
      this.todoArray.push(value)
    } else {
      alert('Field required **')
    }
    this.todo = "";
    this.ref.detectChanges();
  }

  /*delete item*/
  deleteItem(todo: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
    this.ref.detectChanges();
  }

  // submit Form
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    } else {
      alert('Field required **')
    }
    this.ref.detectChanges();
  }

}
