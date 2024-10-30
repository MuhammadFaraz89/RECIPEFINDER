
const RecipeItem = ({recipe}) => {
  return (
    <div className='recipe-item'>
      <h3>{recipe.name}</h3>
      <p>Category:  {recipe.category}</p>

      
    </div>
  )
}

export default RecipeItem
