import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {
    //Private will make the recipesService availabel anywhere in the class not just in the constructor
  }

  ngOnInit() {
    //To initial our states
    console.log('ngOnInit');

    //this.recipes = this.recipesService.getAllRecipes(); //This will retuen an array of recipes
    //console.log(this.recipes);
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes(); //This will retuen an array of recipes
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log('ng On Destroy');
  }
}
