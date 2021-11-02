import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=385%2C350',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]
    ),
      new Recipe(
        'Test Recipe 2',
        'This is a test',
        'https://static01.nyt.com/images/2021/02/17/dining/17tootired-grilled-cheese/17tootired-grilled-cheese-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        [
          new Ingredient('buns', 2),
          new Ingredient('meat', 4),
        ]
    ),
  ];
      
  constructor(private shoppingListService: ShoppingListComponent) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
      
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService;
  }
}
