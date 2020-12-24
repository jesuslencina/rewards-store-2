import './modalStyles.css';

function Modal(props) {
  return (
    <div className={`modal ${props.class}`}>
      <div className="modal-background" onClick={props.close}></div>
      <div className="modal-card">
        <section
          className="modal-card-body my-modal-body"
          style={{
            backgroundColor: props.title === 'Success' ? '#1ddb29' : '#db241a',
          }}>
          <h2 className="has-text-white">{props.title}</h2>
          <p className="has-text-white mb-4">{props.msg}</p>
          <button className="button is-secondary" onClick={props.close}>
            OK
          </button>
        </section>
      </div>
    </div>
  );
}

export default Modal;
