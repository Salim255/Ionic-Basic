import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl:
        'https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80',
      ingredients: ['French Frites', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl:
        'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      ingredients: ['Spaghetti', 'Meat', 'Tomat'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    console.log('====================================');
    console.log('from get all');
    console.log('====================================');
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    ('====================================');
    console.log('from get One');
    console.log('====================================');
    return { ...this.recipes.find((recipe) => recipe.id === recipeId) };
  }
}
