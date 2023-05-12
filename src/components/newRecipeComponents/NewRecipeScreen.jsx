import React, {useState} from "react";
import { Formik } from "formik";
import './NewRecipe.css';
import axios from 'axios';

const NewRecipeScreen = () => {

  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addIngredient = () => {
    setIngredients([...ingredients, {name, quantity}])
    console.log(setIngredients)
    setName("");
    setQuantity("");
  }

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients
    axios.post(`https://recipes.devmountain/com/recipes`, values)
    .then((res) => {
      console.log(res.data)
  }).catch((err) => {
    console.log(err)
  })
  };

  const showIng = ingredients.map((ingredient) => {
    return (
      <li className="list-ing">
        {ingredient.quantity} {ingredient.name}
      </li>
    )
  })

  return (
    <section className="form-page">
      <h4>Tell us about your Recipe!</h4>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="form">
            <div className="name-img-input">
            <input
            placeholder="Name Your Recipe"
            value={values.recipeName}
            onChange={handleChange}
            name="recipeName"/>
            <input
            placeholder="Image URL"
            value={values.imageURL}
            onChange={handleChange}
            name="imageURL"/>
            </div>
            <div className="radio-btn">
             <label htmlFor="cook">Cook</label>
            <input type="radio" id="cook" value="Cook" onChange={handleChange} name="type"/>
            <label htmlFor="bake">Bake</label>
            <input type="radio" id="bake" value="Bake" onChange={handleChange} name="type"/>
            <label htmlFor="drink">Drink</label>
            <input type="radio" id="drink" value="Drink" onChange={handleChange} name="type"/>
            </div>
            <div classname="prep-cook-serve">
            <input
            placeholder="Prep Time"
            value={values.prepTime}
            onChange={handleChange}
            name="prepTime"/>
            <input 
            placeholder="Cook Time"
            value={values.cookTime}
            onChange={handleChange}
            name="cookTime"/>
            <input 
            placeholder="Serves"
            value={values.serves}
            onChange={handleChange}
            name="serves"/>
            </div>
            <div className="ingred-container">
              <div className="ing-quant-input">
            <input
            placeholder="Ingredient"
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <input 
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}/>
            </div>
            <div className="ingredient-list"><ul>{showIng}</ul></div>
            </div>
            <div className="add-i-c">
            <button className="ingredient-btn" onClick={(e) => {
              e.preventDefault()
              addIngredient()
            }}>Add Another</button>
            </div>
            <textarea
            placeholder="Type your instructions"
            rows={5}
            value={values.instructions}
            onChange={handleChange}
            name="instructions"/>
            <div className="save-btn-c">
            <button className="save-btn" type="submit">
              Save
            </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
