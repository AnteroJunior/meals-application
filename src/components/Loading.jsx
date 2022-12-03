const Loading = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h3>Loading...</h3>
    </div>
  )
}

export { Loading };