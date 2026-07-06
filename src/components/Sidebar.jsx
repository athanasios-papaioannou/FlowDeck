const phases = [
  "Pre Start Checklist", 
  "Startup Checklist",
  "Before Taxi Checklist",
  "Taxi Checklist",
  "Before Take-off Checklist",
  "Take-off Checklist",
  "Climb-out Checklist",
  "Cruise Checklist",
  "Approach Checklist",
  "Landing Checklist",
  "After Landing Checklist",
  "Parking / Shutdown Checklist"
]

export default function Sidebar({ 
    activePhase,
    setActivePhase,
    isPhaseLocked,
    isPhaseCompleted, 
    setShowResetModal,
    scrollToChecklist,
  }) {
  return (
    <div className="sidebar">
        <div className="sidebar-header">
          <img src="/logo.png" alt="FlowDeck Checklist logo - professional aviation checklist application branding" />          
        </div>
        <div className="preflight-box">
            <h3>PRE FLIGHT FLOWS</h3>

            <ul>
                <li>Download charts & NOTAMS</li>
                <li>Check weather & forecasts</li>
                <li>Load PAX, CARGO & FUEL</li>
            </ul>
        </div>
      <h2>Flight Phases</h2>

      <ul>
        {phases.map((phase) => { // Map through phases to render the sidebar items
            const locked = isPhaseLocked(phase) // Determine if the phase is locked based on the isPhaseLocked function
            const completed = isPhaseCompleted(phase) // Determine if the phase is completed based on the isPhaseCompleted function

            return (              
              <li
                  key={phase} // Use phase name as key since it's unique
                  onClick={() => {
                  if (!locked) setActivePhase(phase)
                  if (window.innerWidth <= 711) { // If the screen width is 711px or less (mobile), scroll to the checklist when a phase is selected
                    setTimeout(() => {
                      scrollToChecklist()
                    }, 0)
                  }
                  }}                
                  
                  // Apply classes based on active, locked, and completed states to style the sidebar items accordingly
                  className={`
                  ${activePhase === phase ? "active" : ""}
                  ${locked ? "locked" : ""}
                  ${completed ? "completed" : ""}
                  `}
              >
                  {completed && <span className="check">✔</span>}
                  {phase}
              </li>              
            )
        })}
      </ul>
      <button onClick={() => setShowResetModal(true)}>
            Reset Checklist
      </button>
    </div>
  )
}