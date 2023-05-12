import React, {useState, useEffect} from 'react';
import './DetailScreen.css'
import { useParams } from 'react-router-dom';
import axios from "axios";
import DetailImg from './DetailImg';

const DetailScreen = () => {  
  const {id} = useParams();

  const [recipe, setRecipe] = useState({});

  const getId = (() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      setRecipe(res.data);
      console.log(res.data);
    });
  })

  useEffect(() => {
    getId();
  }, [])


  return (
    <React.Fragment>
    <DetailImg image={recipe.image_url} title={recipe.recipe_name}/>
    <section className='details'>
    <div className='recipe-ingredients'>
      <div className='recipe-details'>
      <h2>Recipe</h2>
      <ul>
        <li>Prep Time: {recipe.prep_time}</li>
        <li>Cook Time: {recipe.cook_time}</li>
        <li>Serves: {recipe.serves}</li>
      </ul>
      </div>
      <div className='ingredient-details'>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients && recipe.ingredients.map((ingred, index) => {
          return <li>{ingred.quantity} {ingred.ingredient}</li>
        })}
      </ul>
      </div>
    </div>
    <div className='instructions'>
      <h2>Instructions</h2>
      <p style={{whiteSpace: "pre-wrap"}}>
        {recipe.instructions && JSON.parse(recipe.instructions)}
      </p>
    </div>
    </section>
    </React.Fragment>
  );
};

export default DetailScreen;
