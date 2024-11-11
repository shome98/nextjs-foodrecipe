import RecipeList from '@/components/RecipeList'
import React from 'react'

const getData = async()=> {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        return data?.recipes;
    } catch (error) {
        console.error(error);
    }
};
const page = async() => {
    const recipeList = await getData();
    return (
        <RecipeList recipeList={recipeList} />
    )
};

export default page