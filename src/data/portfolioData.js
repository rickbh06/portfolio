const portfolioData = {
  profile: {
    name: "Rick Bhattacharya",
    title: "Mechanical Engineering Student",
    headline: "Building liquid rocket engines and flight hardware from first principles.",
    statement: "I'm a mechanical engineering student at UNC Charlotte who got into rocketry by wanting to understand how things actually work — not just simulate them. Most of my projects started because I couldn't find an off-the-shelf solution that made sense, so I built one. I'm looking for internship or co-op opportunities where I can contribute real engineering work, whether that's in propulsion, mechanical design, mechatronics, or something else entirely. I learn fast and I work well in environments where the problems are hard.",
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
      "Siemens NX", "Creo Parametric", "GD&T", "DFM",
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
        "Designing a 20 lbf bipropellant liquid rocket engine on a $500 budget. The constraint is real — every component decision has to be justified. The injector uses an impinging orifice geometry, sized using Microsoft Excel to model choked flow conditions and confirm the orifices would stay sonic at our target mass flow rates. Currently in the works of building the injector and going to be running a flow simulation on OpenFOAM or STAR-CCM+ to verify choked flow.",
      context: [
        "Used Microsoft Excel to solve isentropic flow equations and size the injector throat areas for choked flow — the goal was keeping the discharge coefficient within a 2% margin of the theoretical value across the orifice geometry.",
        "Ran flow simulations to check bipropellant mixing efficiency and pressure drop across the injector. The numbers gave me more confidence in the design before committing to hardware.",
        "Built out full P&ID diagrams for the feed system. Using COTS components kept cost down while still allowing safe, controllable regulation of high-pressure propellants.",
      ],
      metrics: [
        "Full design architecture built under $500 through deliberate COTS selection.",
        "Excel choked-flow solvers used to size orifices within 2% of theoretical.",
        "P&ID and flow analysis completed before any physical parts were ordered.",
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
        "Led the design study for a 250 lbf bipropellant liquid rocket engine through Carolina Liquid Rocketry. The program reached a complete parametric CAD model and a full-scale 3D printed mockup before being paused pending funding for hardware. The design uses a pintle injector architecture — a geometry I studied through Halfcat's open-source work and adapted for our propellant combination and chamber sizing.",
      context: [
        "Used NASA CEA to determine propellant mixture ratios, chamber pressure, and specific impulse targets. Those numbers drove every downstream geometry decision in the design.",
        "Built a fully parametric CAD model in Fusion 360 — when performance requirements shifted, I could propagate changes across all five subsystem interfaces without rebuilding anything from scratch.",
        "Before the program paused, I printed a full-scale mockup to do physical fit checks. It caught three interference issues that would have been expensive to find after machining. The metal hardware design is ready; the program is waiting on funding to move forward.",
      ],
      metrics: [
        "Complete parametric CAD model across five subsystems — ready for manufacturing when the program resumes.",
        "Three assembly conflicts identified through physical mockup before any machined parts were ordered.",
        "NASA CEA analysis established propellant ratios, chamber pressure, and Isp baseline for the full design.",
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
        "Built an active Thrust Vector Control system for a high-power rocket — a 2-axis gimbal that uses real-time IMU data to drive servo corrections and keep the rocket pointed where it's supposed to go. The hardware went through seven distinct CAD revisions before I was satisfied with the printability and load paths.",
      context: [
        "Seven CAD iterations on the motor mount and servo linkages — each one driven by a specific printability or structural problem from the previous version. I applied DFM principles throughout so the printed parts would actually hold up under thrust loads.",
        "Wrote PID firmware for closed-loop attitude control. The controller pulls gyroscope and accelerometer data at high frequency and drives servo corrections fast enough to counter aerodynamic disturbances.",
        "Built a ground test bench to validate the gimbal's range of motion before any flight attempt. Confirmed ±15° pitch and yaw authority with the response times the control loop needed.",
      ],
      metrics: [
        "Seven CAD revisions driven by DFM — each one a specific fix, not just a refresh.",
        "±15° actuation range confirmed on a hardware test bench before committing to flight.",
        "Closed-loop PID firmware written from scratch for onboard attitude control.",
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
        "Built a benchtop Schlieren imaging system from scratch to actually see airflow — thermal plumes, density gradients, the kind of stuff you normally need a wind tunnel budget to observe. The whole point was having a real physical check on CFD assumptions without needing expensive lab access.",
      context: [
        "Machined and assembled custom mirror mounts to hold precise optical alignment through the light path. Small vibrations ruin the image, so the mount stability mattered a lot.",
        "The system works by refracting light through air density gradients — you can see things like heat rising off a hand or airflow separating around an object. It's a useful sanity check on flow field assumptions that would otherwise only exist in simulation.",
      ],
      metrics: [
        "Thermal plumes and air currents successfully visualized and recorded.",
        "Gives a physical reference point for comparing against CFD flow field results.",
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
        "Designed and built a small-form-factor flight computer because I wanted to know exactly what was happening during a flight — not just read back whatever a commercial altimeter decided to save. The board integrates barometric and inertial sensors and logs data at a rate that actually captures the interesting parts of the flight profile.",
      context: [
        "Built using off-the-shelf, inexpensive parts to ensure the design remains accessible and user-friendly for anyone trying to build a flight computer.",
        "Wrote embedded C/C++ firmware to handle sensor polling and wireless telemetry. Getting the timing right for high-frequency data logging while also managing the radio link was the most involved part of the firmware work.",
      ],
      metrics: [
        "Real-time altitude, velocity, and orientation data logged and transmitted during flight.",
        "Full-stack build — schematic, layout, assembly, and firmware all done independently.",
      ],
      images: [
        "/images/projects/flightcomputer/assembled-board.jpg",
        "/images/projects/flightcomputer/mini-flight-computer-2.jpg",
      ],
      imageLabels: [
        "Assembled Flight Computer",
        "Mini Flight Computer Layout",
      ],
    },
    {
      id: "l1hybrid",
      title: "L1 / L2 Certification Rocket",
      role: "Independent Project",
      timeline: "2026 – Present",
      status: "teaser",
      summary:
        "Building a high-power rocket to earn my Tripoli L1 and L2 certifications. The avionics bay uses a pull-pin arming system — a mechanical interlock that keeps the ejection charges electrically isolated until the pin is physically pulled at the pad. It's a simple, reliable safety mechanism that removes any ambiguity about whether the system is armed.",
      context: [
        "The AV bay houses dual-deploy altimeters, GPS, and battery management in a compact package. The layout is designed so everything is accessible during pad prep without needing to partially disassemble the rocket.",
        "The pull-pin interlock is straightforward by design: until the pin comes out, the e-matches have no continuity path. No software states to worry about, no way to accidentally arm it.",
        "This vehicle is also a test platform for the custom avionics hardware I've been developing — the flight data will feed directly into improving the next iteration of the flight computer.",
      ],
      metrics: [
        "Pull-pin interlock gives unambiguous physical confirmation the system is safe on the pad.",
        "Dual-deploy system for independent main and drogue deployment.",
        "Live flight test platform for custom avionics hardware development.",
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
        "OpenRocket Simulation",
      ],
    }
  ],

  experience: [
    {
      id: "icsp",
      role: "Propulsion Research Intern",
      company: "Indian Centre For Space Physics",
      location: "Kolkata, India",
      timeline: "May – July 2024",
      summary:
        "Worked with the solid propulsion group at ICSP in Kolkata, contributing to their research rocket program. My work was primarily analytical — nozzle geometry design, propellant grain calculations, and pulling together the performance specs for the motor configurations they were studying.",
      context: [
        "Worked through propellant grain geometry calculations to understand how burn surface area evolves during a firing and how that translates into thrust over time. The geometry decisions have a direct effect on the shape of the thrust curve, so getting those numbers right matters.",
        "Designed the nozzle geometry for the motor — sizing throat area and expansion ratio based on the target chamber pressure and desired exit conditions. Put together the full rocket specs to document the design and give the team a clear reference for the configuration.",
      ],
      metrics: [
        "Nozzle geometry design and sizing for solid motor configurations under study.",
        "Propellant grain calculations linking burn surface area evolution to thrust profile.",
        "Full rocket specification documentation for the research program.",
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
