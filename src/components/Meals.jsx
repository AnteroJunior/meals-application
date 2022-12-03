import React from "react";
import { MealsCollection } from './MealsCollection';
import { Loading } from './Loading';
import { NothingFound } from './NothingFound';
import '../App.css';
import { useGlobalContext } from "../context";

const Meals = () => {

  const { meals, loading } = useGlobalContext();

  return (
    <div className="row justify-content-center" id="linha">
      <div className="col-8">
        {
          loading ? <Loading /> : meals.length >= 1 ? <MealsCollection /> : <NothingFound />
        }
      </div>
    </div>
  )
}

export { Meals };