import { useState, useEffect } from "react"
import { useRef } from "react"
import Sidebar from "./components/Sidebar"
import Checklist from "./components/Checklist"
import { checklistData } from "./data/checklistData"
import ResetModal from "./components/ResetModal"

function App() {
  // Load saved state from localStorage or initialize with an empty object
  const loadSavedState = () => {  
    const saved = localStorage.getItem("a320-checklist") 
    return saved ? JSON.parse(saved) : {}
  }

  const [activePhase, setActivePhase] = useState("Pre Start Checklist") // Set initial active phase to "Pre Start Checklist"
  const checklistRef = useRef(null) // Create a ref to the checklist container for scrolling purposes
  const [checkedItems, setCheckedItems] = useState(loadSavedState) // Initialize checkedItems state with saved state from localStorage
  const [showResetModal, setShowResetModal] = useState(false) // State to control visibility of the reset confirmation modal

  const toggleItem = (phase, item) => { // Helper function to toggle the checked state of a checklist item
    const key = `${phase}-${item}` // Create a unique key for each checklist item based on its phase and label

    setCheckedItems((prev) => ({ // Keep previous checklist state and toggle only the clicked item
      ...prev, // Spread the previous state to keep all other items unchanged
      [key]: !prev[key], // Toggle the checked state of the item (if it was true, set to false; if it was false or undefined, set to true)
    }))
  }

  // Effect to scroll to the checklist container when the active phase changes, with different behavior for mobile and desktop screens
  useEffect(() => {
    const isMobile = window.innerWidth <= 711

    if (isMobile) {
      const el = document.querySelector(".checklist")

      el?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }, 50)
    }
  }, [activePhase])

  // Helper function to scroll to the checklist container when a phase is selected from the sidebar on mobile devices
  const scrollToChecklist = () => {
    const el = document.querySelector(".checklist")
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Save state to localStorage whenever checkedItems changes
  useEffect(() => {
    localStorage.setItem(
      "a320-checklist", // Use a consistent key for localStorage
      JSON.stringify(checkedItems)
    )
  }, [checkedItems])

  // Helper function to calculate progress percentage for a given phase  
  const getProgress = (phase) => { 
    const items = checklistData[phase] // Get the checklist items for the specified phase
    if (!items) return 0 // If there are no items for the phase, return 0% progress
    const realItems = items.filter( // Filter out title items to only count actual checklist items for progress calculation
      (item) => item.type !== "title"
    )
    const completed = realItems.filter((item) => { // Filter the real items to count how many are completed by checking if their corresponding key in checkedItems is true
      const key = `${phase}-${item.id}` 
      return checkedItems[key] 
    }).length // Get the count of completed real items by checking the length of the filtered array

    return Math.round((completed / realItems.length) * 100) // Calculate and return the progress percentage by dividing the number of completed real items by the total number of real items and multiplying by 100
  }

  // Helper function to check if all items in a phase are completed
  const isPhaseCompleted = (phase) => {
    const items = checklistData[phase]
    if (!items) return false

    const realItems = items.filter((item) => item.type !== "title")

    return realItems.every((item) => { // Check if every real item in the phase is completed by verifying that their corresponding key in checkedItems is true
      const itemKey = `${phase}-${item.id}` // Create a unique key for each checklist item based on its phase and label
      return checkedItems[itemKey] // Return true if the item is checked, otherwise return false
    })
  }

  // Helper function to reset the checklist by clearing the checkedItems state and removing the saved state from localStorage
  const resetChecklist = () => {
    setCheckedItems({})
    localStorage.removeItem("a320-checklist")
    setShowResetModal(false) // Close the reset confirmation modal after resetting the checklist
    setActivePhase(phases[0]) // Return to the first phase after clearing the checklist
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 50)
  }

  // It takes checklistData keys to determine the order of phases and locking logic
  const phases = Object.keys(checklistData) 
  // Helper function to determine if a phase is locked based on completion of previous phases
  const isPhaseLocked = (phase) => { 
    const index = phases.indexOf(phase) // Get the index of the current phase in the phases array to determine its position
    if (index === 0) return false // First phase is never locked

    const previousPhase = phases[index - 1] // Get the previous phase based on the index of the current phase
    return !isPhaseCompleted(previousPhase) // Lock the current phase if the previous phase is not completed
  }

  return (
    <div className="app">
      <Sidebar
        activePhase={activePhase}
        setActivePhase={setActivePhase}
        isPhaseLocked={isPhaseLocked}
        isPhaseCompleted={isPhaseCompleted}
        setShowResetModal={setShowResetModal}
        scrollToChecklist={scrollToChecklist}
      />

      <Checklist        
        activePhase={activePhase}
        checklist={checklistData?.[activePhase] || []}
        checkedItems={checkedItems}
        toggleItem={toggleItem}
        progress={getProgress(activePhase)}
        phases={phases}
        setActivePhase={setActivePhase}
        isPhaseCompleted={isPhaseCompleted}
      />

      {showResetModal && (
        <ResetModal
          onClose={() => setShowResetModal(false)}
          onConfirm={resetChecklist}
        />
      )}
    </div>
  )
}
export default App