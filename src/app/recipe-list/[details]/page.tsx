import RecipeItem from '@/components/RecipeItem';
import React from 'react'

async function fetchRecipeDetails(currentRecipeId:number) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiResponse.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
interface RecipeDetailsProps{
    params: {
        details: string;
    };
}
const RecipeDetails = async ({ params }: RecipeDetailsProps) => {
    const recipeId = Number(params?.details);
    if (isNaN(recipeId)) {
        return <div>Invalid Recipe Id</div>
    }
    const getRecipeDetails = await fetchRecipeDetails(recipeId);
  return (
    <RecipeItem getRecipeDetails={getRecipeDetails}/>
  )
}

export default RecipeDetails