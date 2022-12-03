import axios from "axios";
import React, { useContext, createContext, useEffect, useState } from "react";

const AppContext = createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  } else {
    favorites = [];
  }
  return favorites;
}

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  const addToFavorites = (idMeal) => {
    const meal = meals.find(meal => meal.idMeal === idMeal);
    const isFavorite = favorites.find(meal => meal.idMeal === idMeal);
    if (isFavorite) return;
    const updatedFavorites = [...favorites, meal];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter(favorite => favorite.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals([...data.meals]);
      } else {
        setMeals([]);
      }
    } catch (err) {
      console.log('Error: ' + err.message);
    }
    setLoading(false);
  }

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  }

  useEffect(() => {
    fetchMeals(allMealsUrl);

  }, [])

  const selectMeal = (idMeal, favoriteMeal = false) => {

    if (favoriteMeal) {
      let meal = favorites.find(meal => meal.idMeal === idMeal);
      setSelectedMeal(meal);
      setShowModal(true);
    } else {
      let meal = meals.find(meal => meal.idMeal === idMeal);
      setSelectedMeal(meal);
      setShowModal(true);
    }

  }

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(allMealsUrl + searchTerm);
  }, [searchTerm]);


  return <AppContext.Provider value={{meals, loading, setSearchTerm, fetchRandomMeal, showModal, setShowModal, selectedMeal, selectMeal, addToFavorites, removeFromFavorites, favorites}}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };