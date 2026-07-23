function PopupModal({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="popup-close"
          type="button"
          onClick={onClose}
          aria-label="팝업 닫기"
        >
          ×
        </button>

        <h2 id="popup-title">{title}</h2>

        <div className="popup-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PopupModal;