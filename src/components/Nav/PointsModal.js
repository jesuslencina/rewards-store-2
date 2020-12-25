function PointsModal(props) {
  return (
    <div className={`modal my-modal ${props.modal}`}>
      <div className="modal-background" onClick={props.handleModal}></div>
      <div className="modal-card">
        <section className="modal-card-body my-modal-body">
          <h2 className="title mb-5">Select the amount of your voucher:</h2>
          <div className="buttons">
            <button
              onClick={() => {
                props.fetchMorePoints(7500);
                props.handleModal();
              }}
              className="button my-button">
              7500
            </button>
            <button
              onClick={() => {
                props.fetchMorePoints(5000);
                props.handleModal();
              }}
              className="button my-button">
              5000
            </button>
            <button
              onClick={() => {
                props.fetchMorePoints(1000);
                props.handleModal();
              }}
              className="button my-button">
              1000
            </button>
          </div>
          <button
            className="button is-danger my-cancel-button"
            onClick={props.handleModal}>
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
}

export default PointsModal;
