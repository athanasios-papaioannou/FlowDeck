export default function ResetModal({
  onClose,
  onConfirm,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>⚠ RESET CHECKLIST</h2>

        <p>
          This will clear all current flight progress.
        </p>

        <div className="modal-buttons">
          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-btn"
            onClick={onConfirm}
          >
            Confirm Reset
          </button>
        </div>

      </div>
    </div>
  )
}