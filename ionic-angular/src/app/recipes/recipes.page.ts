import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {
    //Private will make the recipesService availabel anywhere in the class not just in the constructor
  }

  ngOnInit() {
    //To initial our states
    this.recipes = this.recipesService.getAllRecipes(); //This will retuen an array of recipes
  }
}
