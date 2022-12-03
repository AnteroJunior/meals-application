import { useGlobalContext } from '../context';

const Favorites = () => {

  const { selectMeal, removeFromFavorites, favorites } = useGlobalContext();


  return (
    <div className="bg-dark pt-3 pb-5 px-4 text-white">
      <h4>Favorites</h4>
      <div className='favorites-container d-flex gap-4'>
        {
          favorites.map(meal => (
            <div className='favorite border border-white' key={meal.idMeal}>
              <img src={meal.strMealThumb} className='img-fluid rounded-circle' onClick={() => selectMeal(meal.idMeal, true)} />
              <p onClick={() => removeFromFavorites(meal.idMeal)}>Remove</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export { Favorites }