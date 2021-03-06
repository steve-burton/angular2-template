import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="header">
      <h1>Meal Tracker</h1>
    </div>
    <div class="content-area">
      <meal-list [childMealList]="masterMealList" (editClickSender)="editMeal($event)"></meal-list>

      <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>

      <new-meal (newMealSender)="addMeal($event)"></new-meal>
    </div>
  </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal("Omelet", "The works!", 550),
    new Meal("Sandwich", "Tuna on rye", 350),
    new Meal("Fruit", "Afternoon snack", 200),
    new Meal("Spaghetti", "Carbo loading", 700)
  ];
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
