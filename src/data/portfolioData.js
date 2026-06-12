const portfolioData = {
  profile: {
    name: "Rick Bhattacharya",
    title: "Mechanical Engineering Student",
    headline: "Building liquid rocket engines and flight hardware from first principles.",
    statement: "Mechanical engineering student actively seeking internships and co-op opportunities in the mechanical and aerospace engineering realm. Experienced in end-to-end design, from conceptual fluid mechanics and CAD modeling to hands-on fabrication and hot-fire testing. Driven by the challenge of optimizing performance under extreme thermal and structural constraints.",
    location: "Charlotte, NC",
    // Email split to prevent bot harvesting — reconstructed at runtime
    emailUser: "sbhatt23",
    emailDomain: "charlotte.edu",
    linkedin: "https://www.linkedin.com/in/rick-bhattacharya",
    citizenship: "US Citizen",
    education: {
      institution: "University of North Carolina at Charlotte",
      degree: "Bachelor of Science in Mechanical Engineering",
      gpa: "3.7",
      graduation: "May 2028",
    },
  },

  skills: {
    cad: [
      "SolidWorks", "Fusion 360", "AutoCAD", "Onshape",
      "Siemens NX", "Creo Parametric", "GD&T Fundamentals", "DFM",
    ],
    analysis: [
      "STAR-CCM+", "NASA CEA", "Rocket Propulsion Analysis (RPA)",
      "Microsoft Visio (P&ID)", "OpenRocket", "MATLAB", "Python", "ANSYS",
    ],
    fabrication: [
      "3D Printing", "Machining-ready Drawings", "Prototype Assembly",
      "Fit Checks", "Rapid Iteration", "Test Setup", "Soldering", "KiCAD",
    ],
  },

  projects: [
    {
      id: "biprop20",
      title: "20 lbf Bipropellant Liquid Rocket Engine",
      role: "Lead Engineer & Designer",
      timeline: "Jan 2026 – Present",
      status: "active",
      summary:
        "Designed and simulated a 20 lbf thrust bipropellant liquid rocket engine from scratch on a strict $500 budget, demonstrating extreme resourcefulness. Developed robust P&ID diagrams to manage feed system architecture, and utilized MATLAB to rigorously calculate choked (sonic) flow dynamics across custom impinging injector orifices.",
      context: [
        "Wrote comprehensive MATLAB scripts to model isentropic flow equations, determining precise injector orifice throat areas (A_t) required to maintain choked flow given target mass flow rates and critical pressure ratios.",
        "Performed flow simulations to analyze bipropellant mixing efficiency and pressure drop across the sonic orifices, verifying theoretical discharge coefficients (C_d).",
        "Engineered the fluid feed system with comprehensive P&ID layouts, strategically integrating COTS components to safely regulate high-pressure propellants well within the $500 financial constraint.",
      ],
      metrics: [
        "Achieved a functional design architecture under a $500 budget limit using strategic COTS component selection.",
        "Programmed choked flow MATLAB solvers to size sonic orifices within a 2% theoretical margin of error.",
        "Completed rigorous P&ID mapping and fluid dynamics simulations prior to physical manufacturing."
      ],
      images: [],
      imageLabels: [
        "Feed System P&ID",
        "Injector Flow Simulation",
      ],
    },
    {
      id: "eon250",
      title: "EON-250 Liquid Rocket Engine",
      role: "Technical Lead — Carolina Liquid Rocketry",
      timeline: "Apr 2025 – Present",
      status: "active",
      summary:
        "Led the technical design of a 250 lbf bipropellant liquid rocket engine, engineered for a 5-second hot-fire burn. Translated NASA CEA thermochemical performance targets into a fully parametric 3D CAD model, featuring a pintle injector architecture inspired by Halfcat rocketry and advanced thermal management features.",
      context: [
        "Modeled theoretical combustion chemistry in NASA CEA to optimize propellant mixture ratios, chamber pressure, and expected specific impulse (Isp).",
        "Developed a highly parametric CAD model in Fusion 360, accelerating geometric updates across 5+ subsystem interfaces as performance requirements shifted.",
        "Pre-empted costly manufacturing errors by producing a full-scale 3D printed mockup, identifying three critical spatial and assembly constraints early in the design phase."
      ],
      metrics: [
        "Accelerated design validation cycles by 30% through parametric modeling.",
        "Identified and resolved 3 critical spatial constraints prior to metal machining via rapid 3D prototyping.",
        "Laid analytical groundwork for upcoming Large Eddy Simulation (LES) and FEA structural validation."
      ],
      images: [
        "/images/projects/eon250/eon-3d-v2.jpg",
        "/images/projects/eon250/eon250-cad-full.png",
        "/images/projects/eon250/eon-render.jpg",
      ],
      imageLabels: [
        "Full-Scale 3D Printed Mockup",
        "Engine CAD — Cross Section",
        "Engine 3D Render",
      ],
      links: [
        { url: "/images/projects/eon250/250lbf-drawing.pdf", label: "View EON-250 3D CAD Drawing (PDF)" }
      ],
    },
    {
      id: "tvc",
      title: "Thrust Vector Control (TVC) Rocket",
      role: "Independent Project",
      timeline: "Dec 2025 – Present",
      status: "active",
      summary:
        "Engineered an active Thrust Vector Control (TVC) system for a high-power model rocket. Applied Design for Manufacturing (DFM) principles to develop a custom 2-axis gimbal, integrating embedded avionics to continuously process IMU data and actuate servo-driven attitude corrections.",
      context: [
        "Optimized the compact motor mount and servo linkages through 7 distinct CAD iteration cycles, dramatically improving 3D printability and structural load paths.",
        "Implemented closed-loop PID control firmware to aggressively counter aerodynamic instability, relying on high-frequency gyroscope and accelerometer feedback.",
        "Built a localized test bench to empirically validate ±15 degree pitch and yaw actuation authority before committing to an active flight test."
      ],
      metrics: [
        "Reduced mechanical design iteration time by ~40% by strictly applying DFM principles to 3D printed components.",
        "Validated a full ±15° range of motion with millisecond-level responsiveness on a custom hardware-in-the-loop test bench.",
      ],
      images: [
        "/images/projects/tvc/tvc-video.mp4",
        "/images/projects/tvc/tvc-gimbal-iterations.jpg",
        "/images/projects/tvc/tvc-prototype.jpg",
        "/images/projects/tvc/tvc-render.png",
      ],
      imageLabels: [
        "Gimbal Test Video",
        "TVC Gimbal CAD Iterations",
        "Functional Gimbal Prototype",
        "CAD Render",
      ],
      links: [
        { url: "/images/projects/tvc/tvc-drawing.pdf", label: "View TVC 3D CAD Drawing (PDF)" }
      ],
    },
    {
      id: "schlieren",
      title: "Schlieren Imaging Optical Setup",
      role: "Independent Project",
      timeline: "May 2026",
      status: "complete",
      summary:
        "Designed and constructed a low-cost, benchtop Schlieren imaging optical system to empirically observe fluid mechanics phenomena—such as thermal plumes, shockwaves, and aerodynamic flow separation—without the need for expensive wind tunnel time.",
      context: [
        "Engineered highly stable, custom hardware mirror mounts to ensure precise optical alignment across the light path, mitigating external vibrational interference.",
        "Leveraged the refraction of light through air density gradients to visually validate Computational Fluid Dynamics (CFD) flow-field assumptions."
      ],
      metrics: [
        "Successfully visualized and recorded micro-thermal plumes and complex air currents.",
        "Provided a physical validation tool for checking theoretical CFD aerodynamic models.",
      ],
      images: [
        "/images/projects/schlieren/schlieren-setup.jpg",
        "/images/projects/schlieren/schlieren-mirror.jpg",
      ],
      imageLabels: [
        "Optical Test Setup",
        "Mirror Alignment",
      ],
      links: [
        { url: "https://youtu.be/FlQL7IoMbBQ", label: "Watch Schlieren Test Video" }
      ],
    },
    {
      id: "flightcomputer",
      title: "Miniature Flight Computer Avionics",
      role: "Independent Project",
      timeline: "Jun 2025 – Aug 2025",
      status: "complete",
      summary:
        "Developed a custom, small-form-factor rocket flight computer to replace commercial black-box altimeters. Engineered the PCB architecture to integrate barometric and inertial sensors, logging high-fidelity flight dynamics at high sample rates.",
      context: [
        "Designed the compact schematic and PCB layout in KiCAD, prioritizing minimal mass and a tightly constrained footprint to fit within standard airframes.",
        "Hand-soldered surface mount device (SMD) components and wrote embedded C/C++ firmware to manage high-frequency sensor polling and wireless telemetry."
      ],
      metrics: [
        "Successfully logged and transmitted real-time altitude, velocity, and orientation data.",
        "Proved high-fidelity data acquisition can be reliably achieved with accessible COTS hardware.",
      ],
      images: [
        "/images/projects/flightcomputer/assembled-board.jpg",
      ],
      imageLabels: [
        "Assembled SMD Flight Computer",
      ],
    },
    {
      id: "l1hybrid",
      title: "L1 / L2 Hybrid Avionics Rocket",
      role: "Independent Project",
      timeline: "2026 – Present",
      status: "teaser",
      summary:
        "Designing and building a high-power certification rocket for L1 and L2 rocketry certification. The vehicle features a custom avionics bay with a pull-pin arming design — a safety-first architecture that physically disconnects electronics from pyrotechnic charges until launch-ready, eliminating accidental deployment risk on the pad.",
      context: [
        "Engineered a compact avionics bay (AV bay) housing dual-deploy electronics, GPS telemetry, and battery management — optimized for minimal weight while maintaining full accessibility for pad operations.",
        "The pull-pin arming mechanism is a mechanical interlock: until the pin is physically pulled by the launch crew, all ejection charges remain electrically isolated. Clean, elegant, and unambiguously safe.",
        "Targeting Tripoli L1 and L2 high-power certification flights. This vehicle is a proving ground for the avionics and structural design philosophies carried forward into larger liquid rocket programs."
      ],
      metrics: [
        "Pull-pin safety interlock eliminates accidental e-match continuity on the pad.",
        "Dual-deploy altimeter system for main and drogue parachute deployment.",
        "Vehicle serves as live flight test bed for custom avionics hardware."
      ],
      images: [
        "/images/projects/l1hybrid/rocket-teaser.jpg",
        "/images/projects/l1hybrid/av-bay-front.jpg",
        "/images/projects/l1hybrid/av-bay-back.jpg",
        "/images/projects/l1hybrid/openrocket.png",
      ],
      imageLabels: [
        "Vehicle — Assembly",
        "AV Bay — Front (Pull-Pin Arming)",
        "AV Bay — Back (Electronics)",
        "OpenRocket Model",
      ],
    }
  ],

  experience: [
    {
      id: "icsp",
      role: "Propulsion Intern",
      company: "Indian Centre For Space Physics",
      location: "Kolkata, India",
      timeline: "May – July 2024",
      summary:
        "Assisted in hardware-level research within the solid propulsion group, gaining direct exposure to live instrumentation and hot-fire data analysis at a professional research scale. Executed meticulous test setups, directly impacting the quality of data used to validate experimental grain geometries.",
      context: [
        "Performed structural analysis to evaluate how solid propellant grain geometry and burn surface area evolve over time, influencing the core thrust profile.",
        "Assisted in rigorous hot-fire testing, focusing on precise thermocouple placement, pressure transducer calibration, and load cell alignment."
      ],
      metrics: [
        "Evaluated internal grain geometry and structural casing loads across 3 distinct solid rocket motor configurations.",
        "Improved experimental data fidelity by executing strict, instrumented hot-fire test procedures.",
      ],
      images: [
        "/images/experience/icsp/icsp-hotfire-setup.jpg",
        "/images/experience/icsp/icsp-supersonic.jpg",
        "/images/experience/icsp/openmotor.jpg",
      ],
      imageLabels: [
        "ICSP Research Rocket",
        "Supersonic Test Vehicle",
        "OpenMotor Simulation",
      ],
    },
  ],
};

export default portfolioData;
