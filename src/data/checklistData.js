export const checklistData = {
  "Pre Start Checklist": [
        {
            id: "psc-001",
            label: "PARKING BRAKE",
            value: "SET",
        },
        {
            id: "psc-002",
            label: "CHOCKS",
            value: "REMOVED",
        },
        {
            id: "psc-003",
            label: "GPU",
            value: "CONNECTED",
        },    
        {
            id: "psc-004",
            label: "THROTTLE",
            value: "THRUST LEVERS IDLE",
        },
        {
            id: "psc-005",
            label: "ENGINE MASTERS",
            value: "OFF",
        },
        {
            id: "psc-006",
            label: "BATTERIES",
            value: "ON",
        },
        {
            id: "psc-007",
            label: "GENERATOR SWITCHES",
            value: "ON",
        },
        {
            id: "psc-008",
            label: "EXT POWER",
            value: "ON",
        },
        {
            id: "psc-009",
            label: "ADIRS",
            value: "SET TO NAV",
        },
        {
            id: "psc-010",
            label: "PANEL DISPLAYS",
            value: "BRIGHTNESS SET",
        },
        {
            id: "psc-011",
            label: "NAV LIGHTS",
            value: "ON",
        },
        {
            id: "psc-012",
            label: "PANEL LIGHTS",
            value: "ON if required",
        },
        {
            id: "psc-013",
            label: "LANDING GEAR LEVER",
            value: "CHECK DOWN",
        },
        {
            id: "psc-014",
            label: "FLAPS",
            value: "UP",
        },
        {
            id: "psc-015",
            label: "SPOILER",
            value: "RETRACTED",
        },
        {
            id: "psc-016",
            label: "FUEL QUANTITY",
            value: "CHECK",
        },
        {
            id: "psc-017",
            label: "FASTEN SEAT BELTS",
            value: "ON",
        },
        {
            id: "psc-018",
            label: "NO SMOKING SIGNS",
            value: "ON",
        },
        { 
            id: "psc-t1",
            type: "title", 
            label: "Check Weather (ATIS, Flight Services)", 
        },
        {
            id: "psc-019",
            label: "DE-ICE",
            value: "TEST / CHECK",
        },
        {
            id: "psc-t2",
            type: "title",
            label: "Request Clearance",
        },
        {
            id: "psc-020",
            label: "TRANSPONDER",
            value: "SET, STANDBY",
        },
        {
            id: "psc-021",
            label: "BEACON LIGHTS",
            value: "ON",
        },
        {
            id: "psc-022",
            label: "EMERGENCY LIGHTS",
            value: "ARM",
        },
        {
            id: "psc-023",
            label: "FMC",
            value: "SETUP, CHECK",
        },
        {
            id: "psc-024",
            label: "DEPARTURE BRIEFING",
            value: "COMPLETE",
        },
        {
            id: "psc-025",
            label: "DOORS",
            value: "CLOSED (CHECK DOOR PAGE)",
        },
    ],
    "Startup Checklist": [
        {
            id: "suc-001",
            label: "APU",
            value: "START",
        },
        {
            id: "suc-002",
            label: "APU BLEED",
            value: "RUN (WHEN AVAILABLE)",
        },
        {
            id: "suc-003",
            label: "APU GEN",
            value: "ON / CHECK VOLTS",
        },
        {
            id: "suc-t1",
            type: "title",
            label: "Request Pushback – Initiate Pushback",
        },
        {
            id: "suc-004",
            label: "THRUST LEVERS",
            value: "IDLE",
        },
        {
            id: "suc-005",
            label: "ENGINE AREA",
            value: "CLEAR",
        },
        {
            id: "suc-006",
            label: "FUEL PUMP SWITCHES",
            value: "ON",
        },
        {
            id: "suc-007",
            label: "MODE SELECTOR",
            value: "IGN / START",
        },
        {
            id: "suc-008",
            label: "LEFT ENGINE",
            value: "(ENG 1)",
        },
        {
            id: "suc-009",
            label: "ENGINE MASTER 1",
            value: "START",
        },
        {
            id: "suc-010",
            label: "AT N2 > 20% FUEL FLOW",
            value: "CHECK ON",
        },
        {
            id: "suc-011",
            label: "N1 INCREASING AS N2 INCR.",
            value: "CHECK",
        },
        {
            id: "suc-012",
            label: "OIL PRESSURE",
            value: "CHECK",
        },
        {
            id: "suc-013",
            label: "GENERATOR SWITCH",
            value: "ON",
        },
        {
            id: "suc-014",
            label: "REPEAT FOR RIGHT ENGINE",
            value: "(ENG2)",
        },
        {
            id: "suc-015",
            label: "FUEL FLOW",
            value: "CHECK",
        },
        {
            id: "suc-016",
            label: "HYDRAULIC PUMP SWITCHES",
            value: "ON",
        },
        {
            id: "suc-017",
            label: "APU",
            value: "OFF",
        },
        {
            id: "suc-018",
            label: "MODE SELECTOR",
            value: "NORM",
        },
    ],
     "Before Taxi Checklist": [
        {
            id: "btc-001",
            label: "PROBE/WINDOW HEAT",
            value: "AUTO",
        },
        {
            id: "btc-002",
            label: "HDG INDICATOR / ALTIMITERS",
            value: "SET",
        },
        {
            id: "btc-003",
            label: "STDBY INSTRUMENTS",
            value: "SET",
        },
        {
            id: "btc-004",
            label: "RADIOS AND AVIONICS",
            value: "SET FOR DEPARTURE",
        },
        {
            id: "btc-005",
            label: "AUTOPILOT",
            value: "SET, don‘t activate",
        },
        {
            id: "btc-006",
            label: "F/D",
            value: "ON",
        },
        {
            id: "btc-007",
            label: "AUTOBRAKE",
            value: "MAX",
        },
        {
            id: "btc-008",
            label: "ELEVATOR TRIM",
            value: "SET FOR TAKE-OFF",
        },
        {
            id: "btc-009",
            label: "FLIGHT CONTROLS",
            value: "FREE AND CORRECT",
        },
        {
            type: "title",
            id: "btc-t1",
            label: "Request Taxi Clearance",
        },
    ],
    "Taxi Checklist": [
        {
            id: "tc-001",
            label: "TAXI LIGHTS",
            value: "ON",
        },
        {
            id: "tc-002",
            label: "PARKING BRAKE",
            value: "RELEASE",
        },
        {
            id: "tc-003",
            label: "TAXI to assigned runway",
            value: "SPEED Max. 20 knots",
        },
        {
            id: "tc-004",
            label: "BRKS/GYRO/TURN COORDINATOR",
            value: "CHECK during taxi",
        },
        {
            id: "tc-005",
            label: "T/O CONFIG",
            value: "DEPRESS / CHECK",
        },
        {
            id: "tc-006",
            label: "T/O MEMO",
            value: "GREEN",
        },
    ],
    "Before Take-off Checklist": [
        {
            id: "btoc-001",
            label: "PARKING BRAKE",
            value: "SET",
        },
        {
            id: "btoc-002",
            label: "FLIGHT INSTRUMENTS",
            value: "CHECK",
        },
        {
            id: "btoc-003",
            label: "ENGINE INSTRUMENTS",
            value: "CHECK",
        },
        {
            id: "btoc-004",
            label: "TAKE-OFF DATA",
            value: "(V1, VR, V2) CHECK",
        },
        {
            id: "btoc-005",
            label: "NAV EQUIPMENT",
            value: "CHECK",
        },
        {
            id: "btoc-006",
            label: "LANDING LIGHTS",
            value: "ON",
        },
        {
            id: "btoc-007",
            label: "STROBE LIGHT",
            value: "ON",
        },
        {
            id: "btoc-008",
            label: "PITOT HEAT",
            value: "AUTO",
        },
        {
            id: "btoc-009",
            label: "DE-ICE",
            value: "AS REQUIRED",
        },
        {
            id: "btoc-010",
            label: "TRANSPONDER",
            value: "TA/RA",
        },
        {
            type: "title",
            id: "btoc-t1",
            label: "Request Takeoff Clearance",
        },
    ],
    "Take-off Checklist": [
        {
            type: "title",
            id: "toc-t1",
            label: "Smoothly increase thrust to 40% N1 let spool up",            
        },
        {
            id: "toc-001",
            label: "TAKEOFF THRUST",
            value: "FULL OR TO/GA",
        },
        {
            id: "toc-002",
            label: "BRAKES",
            value: "RELEASE",
        },
        {
            id: "toc-003",
            label: "AT 100 KTS",
            value: "SPEED CROSSCHECK",
        },
        {
            id: "toc-004",
            label: "AT V1",
            value: "COMMITED / GO (Decision)",
        },
        {
            id: "toc-005",
            label: "AT Vr",
            value: "ROTATE",
        },
        {
            id: "toc-006",
            label: "PITCH",
            value: "slowly to 10deg, increase to 15deg",
        },
        {
            id: "toc-007",
            label: "POSITIVE RATE OF CLIMB",
            value: "GEAR UP",
        },
        {
            id: "toc-008",
            label: "PASSING F SPEED (PFD)",
            value: "FLAPS 0",
        },
        {
            id: "toc-009",
            label: "SPOILERS",
            value: "DISARM",
        },
        {
            id: "toc-010",
            label: "LANDING LIGHTS",
            value: "AS REQUIRED",
        },
    ],
    "Climb-out Checklist": [
        {
            id: "coc-001",
            label: "THRUST LEVERS",
            value: "CLB DETENT",
        },
        {
            id: "coc-002",
            label: "AP1",
            value: "ENGAGE (when suitable)",
        },
        {
            id: "coc-003",
            label: "TAXI LIGHTS",
            value: "OFF",
        },
        {
            type: "title",
            id: "coc-t1",
            label: "At TA (Transition-Altitude)",
        },
        {
            id: "coc-005",
            label: "ALTIMETER",
            value: "PULL TO SET STD (29.92 / 1013)",
        },
        {
            id: "coc-006",
            label: "BELOW 10'000FT",
            value: "MAX. 250 KIAS",
        },
        {
            id: "coc-007",
            label: "ATC",
            value: "AS REQUIRED",
        },
        {
            type: "title",
            id: "coc-t2",
            label: "Passing 10'000 ft",
        },
        {
            id: "coc-009",
            label: "LANDING LIGHTS",
            value: "OFF",
        },
        {
            type: "title",
            id: "coc-t3",
            label: "Above 10'000 ft",
        },
        {
            id: "coc-011",
            label: "FASTEN SEAT BELTS",
            value: "OFF",
        },
    ],
    "Cruise Checklist": [
        {
            type: "title",
            id: "cc-t1",
            label: "Accelerate to Cruise Speed",
        },
        {
            id: "cc-002",
            label: "ENGINE & INSTRUMENTS",
            value: "MONITOR",
        },
        {
            id: "cc-003",
            label: "FUEL QUANTITY",
            value: "CHECK",
        },
        {
            id: "cc-004",
            label: "RADIOS",
            value: "TUNED & SET",
        },
        {
            id: "cc-005",
            label: "AUTOPILOT",
            value: "CHECK & SET",
        },
        {
            id: "cc-006",
            label: "LIGHTS",
            value: "AS REQUIRED",
        },
        {
            id: "cc-007",
            label: "ATIS / AIRPORT INFORMATION",
            value: "CHECK",
        },
        {
            id: "cc-008",
            label: "ALTIMETER",
            value: "CHECK",
        },
        {
            id: "cc-009",
            label: "RADIOS",
            value: "SET",
        },
        {
            id: "cc-010",
            label: "DE-ICE",
            value: "AS REQUIRED",
        },
        {
            id: "cc-011",
            label: "TOD",
            value: "SET TCAS TO BELOW",
        },
        {
            type: "title",
            id: "cc-t2",
            label: "Descent Speed",
        },
        {
            id: "cc-013",
            label: "FL240",
            value: "0.76 MACH",
        },
        {
            id: "cc-014",
            label: "FL180",
            value: "0.67 MACH",
        },
        {
            type: "title",
            id: "cc-t3",
            label: "At TA (Transition-Altitude)",
        },
        {
            id: "cc-016",
            label: "ALTIMETER",
            value: "RESET TO LOCAL",
        },
        {
            id: "cc-017",
            label: "FL120",
            value: "280 KIAS",
        },
        {
            type: "title",
            id: "cc-t4",
            label: "Below 10'000 ft",            
        },
        {
            id: "cc-018",
            label: "SPEED",
            value: "250 KIAS",
        },
        {
            id: "cc-019",
            label: "LANDING LIGHTS",
            value: "ON",
        },
        {
            id: "cc-020",
            label: "LS",
            value: "ON",
        },
        {
            id: "cc-021",
            label: "FUEL QUANTITIES & BALANCE",
            value: "CHECK",
        },
        {
            id: "cc-022",
            label: "FLAPS / LANDING GEAR",
            value: "CHECK UP",
        },
        {
            type: "title",
            id: "cc-t5",
            label: "Check Weather (ATIS, Flight Services)",
        },
    ],
    "Approach Checklist": [
        {
            id: "ac-001",
            label: "FASTEN SEAT BELTS",
            value: "ON",
        },
        {
            id: "ac-002",
            label: "RADIOS",
            value: "SET",
        },
        {
            id: "ac-003",
            label: "SPEED",
            value: "ESTABLISH 210 KIAS",
        },
        {
            id: "ac-004",
            label: "LANDING LIGHTS",
            value: "CHECK ON",
        },
        {
            id: "ac-005",
            label: "TAXI LIGHTS",
            value: "ON",
        },
        {
            id: "ac-006",
            label: "GND SPOILERS",
            value: "ARM",
        },
        {
            id: "ac-007",
            label: "AUTO BRAKE",
            value: "SET",
        },
        {
            id: "ac-008",
            label: "FLAPS",
            value: "FLAPS 1",
        },
        {
            id: "ac-009",
            label: "SPEED",
            value: "ESTABLISH 180 KIAS",
        },
        {
            id: "ac-010",
            label: "AT 6 DME",
            value: "FLAPS 2",
        },
        {
            id: "ac-011",
            label: "SPEED",
            value: "MANAGED",
        },
        {
            id: "ac-012",
            label: "LANDING GEAR",
            value: "DOWN",
        },
        {
            id: "ac-013",
            label: "LANDING GEAR 3 GREEN",
            value: "FLAPS 3",
        },
        {
            id: "ac-014",
            label: "FLAPS",
            value: "FULL",
        },
        {
            type: "title",
            id: "ac-t1",
            label: "Final Glideslope Descent",            
        },
        {
            id: "ac-016",
            label: "SPEED",
            value: "ESTABLISH 145 KIAS",
        },
        {
            id: "ac-017",
            label: "PARKING BRAKE",
            value: "VERIFY OFF",
        },
        {
            id: "ac-018",
            label: "DE-ICE",
            value: "AS REQUIRED",
        },
    ],
    "Landing Checklist": [
        {
            id: "lc-001",
            label: "LANDING GEAR",
            value: "CHECK DOWN",
        },
        {
            id: "lc-002",
            label: "AUTOPILOT",
            value: "AS REQUIRED",
        },
        {
            id: "lc-003",
            label: "GO-AROUND ALTITUDE",
            value: "SET IN FCU",
        },
        {
            id: "lc-004",
            label: "AUTO-THRUST",
            value: "AS REQUIRED",
        },
        {
            id: "lc-005",
            label: "LANDING MEMO",
            value: "NO BLUE",
        },
        {
            id: "lc-006",
            label: "LANDING SPEED",
            value: "MANAGED",
        },
        {
            id: "lc-007",
            label: "AFTER TOUCH DOWN",
            value: "REVERSE THRUST",
        },
        {
            id: "lc-008",
            label: "SPOILERS",
            value: "VERIFY EXTENDED",
        },
        {
            id: "lc-009",
            label: "BRAKES",
            value: "AS REQUIRED",
        },
        {
            id: "lc-010",
            label: "AT 60 KIAS",
            value: "CANCEL REVERSE THRUST",
        },
    ],
    "After Landing Checklist": [
        {
            id: "alc-001",
            label: "SPOILERS",
            value: "DISARMED",
        },
        {
            id: "alc-002",
            label: "FLAPS",
            value: "RETRACT",
        },
        {
            id: "alc-003",
            label: "ENG MODE SELECTOR",
            value: "NORM",
        },
        {
            id: "alc-004",
            label: "LANDING LIGHTS",
            value: "OFF",
        },
        {
            id: "alc-005",
            label: "STROBE LIGHTS",
            value: "OFF",
        },
        {
            id: "alc-006",
            label: "ANTI ICE",
            value: "AS REQUIRED",
        },
        {
            id: "alc-007",
            label: "APU",
            value: "START",
        },
        {
            id: "alc-008",
            label: "BRAKE TEMP",
            value: "CHECK",
        },
        {
            id: "alc-009",
            label: "TRANSPONDER",
            value: "OFF",
        },
        {
            type: "title",
            id: "alc-t1",
            label: "Taxi to Assigned Gate/Parking (Speed Max 20 knots)",            
        },
        {
            id: "alc-011",
            label: "APU",
            value: "START / CHECK RUN",
        },
        {
            id: "alc-012",
            label: "APU",
            value: "GEN ON / CHECK VOLTS",
        },
        {
            id: "alc-013",
            label: "ELEVATOR TRIM",
            value: "TAKEOFF SETTING",
        },
        {
            type: "title",
            id: "alc-t2",
            label: "Turning into the Gate",
        },
        {
            id: "alc-015",
            label: "TAXI LIGHTS",
            value: "OFF",
        },
    ],
    "Parking / Shutdown Checklist": [
        {
            id: "psc-001",
            label: "PARKING BRAKES",
            value: "SET",
        },
        {
            id: "psc-002",
            label: "THRUST LEVERS",
            value: "IDLE",
        },
        {
            id: "psc-003",
            label: "GROUND CONTACT",
            value: "ESTABLISH",
        },
        {
            id: "psc-004",
            label: "GROUND OPERATIONS",
            value: "AS REQUIRED (FMC2)",
        },
        {
            id: "psc-005",
            label: "ELECTRICAL POWER",
            value: "ESTABLISH",
        },
        {
            id: "psc-006",
            label: "ENGINE MASTER 1 & 2",
            value: "OFF",
        },
        {
            id: "psc-007",
            label: "PARKING BRAKES",
            value: "AS REQUIRED",
        },
        {
            id: "psc-008",
            label: "NAV LIGHTS",
            value: "OFF",
        },
        {
            id: "psc-009",
            label: "EXTERIOR LIGHTS",
            value: "AS REQUIRED",
        },
        {
            id: "psc-010",
            label: "ANTI ICE",
            value: "OFF",
        },
        {
            id: "psc-011",
            label: "PASSENGER SIGNS",
            value: "OFF",
        },
        {
            id: "psc-012",
            label: "DOORS",
            value: "OPEN",
        },
        {
            id: "psc-013",
            label: "FLIGHT DIRECTOR",
            value: "OFF",
        },
        {
            id: "psc-014",
            label: "APU BLEED",
            value: "AS REQUIRED",
        },
        {
            id: "psc-015",
            label: "FUEL PUMPS",
            value: "ALL OFF",
        },
        {
            id: "psc-016",
            label: "BEACON",
            value: "OFF",
        },
        {
            id: "psc-017",
            label: "ECAM STS",
            value: "DEPRESS",
        },
        {
            id: "psc-018",
            label: "PANEL LIGHTS",
            value: "OFF",
        },
        {
            id: "psc-019",
            label: "ADIRS",
            value: "OFF",
        },
        {
            id: "psc-020",
            label: "AVIONICS",
            value: "OFF",
        },
        {
            id: "psc-021",
            label: "NO SMOKING",
            value: "OFF",
        },
        {
            id: "psc-022",
            label: "APU",
            value: "AS REQUIRED",
        },
        {
            id: "psc-023",
            label: "BATTERIES",
            value: "AS REQUIRED",
        },
    ],   
}