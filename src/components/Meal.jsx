import { FcLike, FcDislike } from "react-icons/fc";
import { useGlobalContext } from "../context";

const Meal = ({ id, title, image }) => {

  const { selectMeal, addToFavorites } = useGlobalContext();

  return (
    <div className="border shadow-sm rounded item-meal my-3" key={parseInt(id)}>
      <img src={image} className='card-img-top' onClick={() => selectMeal(id)} />
      <div className="d-flex justify-content-between p-4 flex-wrap">
        <h4>{title}</h4>
        <FcLike className="text-primary fs-3" onClick={() => addToFavorites(id)} />
      </div>

    </div>
  )
}

export { Meal };