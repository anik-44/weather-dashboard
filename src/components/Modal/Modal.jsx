import ReactDOM from "react-dom";
import styles from "./Modal.module.css";


const Modal = ({children, onClose} ) => {
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    )
        ;
};

export default Modal;

// type
// ModalProps = {
//     children: ReactNode;
//     onClose: () => void;
// };
