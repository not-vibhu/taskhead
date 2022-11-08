import "./Styles/Modal.css";

const Modal = () => {

    return (
        <>
            <div className="modal-bg">
                <div className="modal-centered">

                    <div className="modal">

                        <div className="modal-header">
                            <p>Save to...</p>
                        </div>

                        <div className="playlist-container">

                            <p>Title goes here</p>
                            <p>Title goes here</p>

                        </div>



                        <div className="modal-actions">

                            <div className="actions-container">

                                <button>Action</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;