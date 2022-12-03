import { useGlobalContext } from "../context";
import '../App.css';
import { Meal } from './Meal';

const MealsCollection = () => {

  const { meals } = useGlobalContext();

  return (
    <section className="collection">
      {
        meals.map(meal => (
          <Meal
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
          />
        ))
      }
    </section>
  )
}

export { MealsCollection }