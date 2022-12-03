import { BiErrorAlt } from "react-icons/bi";

const NothingFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <BiErrorAlt className="error-icon text-danger" />
      <h3>No meal with this name. Try again!</h3>
    </div>
  )
}

export { NothingFound };