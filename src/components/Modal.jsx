import { useGlobalContext } from "../context";

const Modal = () => {

  const { setShowModal, selectedMeal } = useGlobalContext();

  return (
    <div className="myModal">
      <div className="bg-white rounded modal-container">
        <img src={selectedMeal.strMealThumb} />
        <div className="p-3">
          <h3>{selectedMeal.strMeal}</h3>
          <h4 className="text-secondary">Cooking instructions:</h4>
          <p className="text-secondary">{selectedMeal.strInstructions}</p>
          <a className='d-block py-3 text-decoration-underline' href={selectedMeal.strSource} target='_blank'>Original source</a>
          <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>

    </div>
  )
}

export { Modal };