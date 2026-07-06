import { forwardRef } from "react"
import { phaseBanners } from "../data/phaseBanners"
export default function Checklist({
    activePhase,
    checklist,
    checkedItems,
    toggleItem,
    progress,
    phases,
    setActivePhase,
    isPhaseCompleted,
  }, 
    ref
) {

    if (!checklist) { // If checklist is undefined, show a message instead of rendering the list
        return (
            <div className="checklist">
            <h2>{activePhase}</h2>
            <p>No checklist available</p>
            </div>
        )
    }

  return (    
    <div className="checklist" ref={ref}>
        <div className="phase-banner">
          <img
            src={phaseBanners[activePhase]}
            alt={activePhase}
          />
        </div>
        
        <h2>{activePhase}</h2>
        
        {/* Progress bar container showing the percentage of completed items in the current phase, with a visual progress bar */}
        <div className="progress-container"> 
            <div className="progress-text">
                Progress: {progress}%
            </div>

            <div className="progress-bar">
                <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
                />
            </div>
        </div>
      {!checklist && <p>No checklist available</p>}
      
      {/* If checklist is available, map through the items and render them with checkboxes and labels. Each item can be toggled to mark it as completed or not. */}
      {checklist && (
        <ul>
          {checklist.map((item) => { // Map through checklist items and render them

          if (item.type === "title") { // If the item is a title, render it differently without a checkbox
              return (
                <div key={item.label} className="checklist-title">
                  {item.label}
                </div>
              )
            }

            const itemKey = `${activePhase}-${item.id}` // Create a unique key for each item based on phase and label
            const isChecked = checkedItems[itemKey] // Determine if the item is checked based on the checkedItems state

            return (
              <li // Render each checklist item with a checkbox and label, and apply "checked" class if the item is checked
                key={item.id} // Use item id as key since it's unique within a phase
                onClick={() => toggleItem(activePhase, item.id)}
                className={isChecked ? "checked" : ""}
              >
              
                <div className={`checkbox ${isChecked ? "checked-box" : ""}`}>
                {isChecked && "✔"}
                </div>

                {/* Display the item label and value with dots in between for styling */}
                <div className="checklist-row">
                  <span>{item.label}</span>
                  <span className="dots"></span>
                  <span>{item.value}</span>
                </div>
                
              </li>
            )
          })}
        </ul>                
      )}
        {/* Navigation buttons to move between phases, with the "Next Phase" button disabled until the current phase is completed. */}
        <div className="phase-nav">
          {phases.indexOf(activePhase) > 0 && (
            <button
              onClick={() =>
                setActivePhase(
                  phases[phases.indexOf(activePhase) - 1]
                )
              }
            >
              ⬅ Previous Phase
            </button>
          )}

          {phases.indexOf(activePhase) <
            phases.length - 1 && (
            <button
              onClick={() =>
                setActivePhase(
                  phases[phases.indexOf(activePhase) + 1]
                )
              }
              disabled={!isPhaseCompleted(activePhase)}
            >
              Next Phase ➡
            </button>
          )}
      </div>
      <div className="app-credits">
        <span>FlowDeck v1.0</span>
        <span>Built by Athanasios Papaioannou</span>
      </div>
    </div>
    
  )
}