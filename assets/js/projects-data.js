/**
 * PROJECTS DATA
 * ------------------------------------------------------------------
 * Edit this file to add, remove or update project cards.
 * The Projects page is generated from this list — no HTML editing needed.
 *
 * Each project supports:
 *   title    {string}   Card heading (required)
 *   category {string}   Small label shown on the card (required)
 *   filters  {string[]} Categories used by the filter buttons:
 *                       "Electrical", "Industrial Automation",
 *                       "IoT & Embedded", "Web Development"
 *                       (a new category also needs a matching button
 *                       in the Projects filter list in index.html)
 *   href     {string}   Link opened when the card is clicked
 *                       (omit this for a non-clickable card)
 *   image    {string}   Path to the preview image (required)
 *   alt      {string}   Image description for accessibility
 *   badge    {object}   Optional ribbon shown on the image:
 *                       { icon: "<Ionicons name>", label: "Text" }
 *                       The icon is any Ionicons name (ionicons.com).
 *                       Common choices:
 *                         "star-outline"              → Featured
 *                         "checkmark-circle-outline"  → Completed
 *                         "shield-checkmark-outline"  → Verified / technical
 *                         "ribbon-outline"            → Certified / award
 *                         "flask-outline"             → Research / experiment
 *                         "sparkles-outline"          → New / highlight
 *                         "hardware-chip-outline"     → IoT / embedded
 *                         "settings-outline"          → Automation
 *   width    {number}   Optional image width  (default 800)
 *   height   {number}   Optional image height (default 500)
 * ------------------------------------------------------------------
 */

window.projectsData = [
   {
    title: "PLC-Based Three-Phase Industrial Motor Controller",
    category: "Electrical",
    filters: ["Electrical", "Industrial Automation"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/PLC_Motor_Control_ Star–Delta_Selection.png",
    alt: "PLC-Based Three-Phase Industrial Motor Controller",
    width: 800,
    height: 500
  },
  {
    title: "PLC-Based START and STOP Lamp Control System",
    category: "Electrical",
    filters: ["Electrical", "Industrial Automation"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/PLC_START_STOP_Lamp_Control Journey.png",
    alt: "PLC-Based START and STOP Lamp Control System",
    width: 800,
    height: 500
  },
  {
    title: "Single Motor Star (Y) and Delta (Δ) Connections",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Star_Delta_Motor_Connections.png",
    alt: "Single Motor Star (Y) and Delta (Δ) Connections",
    width: 800,
    height: 500
  },
  {
    title: "Three-Phase Forward and Reverse Motor Control System",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Three-Phase_Motor_Control_Tutorial.png",
    alt: "Three-Phase Forward and Reverse Motor Control System",
    width: 800,
    height: 500
  },
  {
    title: "Three-Phase Electrical Wiring and Motor Connections",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Three-Phase Motor_Wiring.png",
    alt: "Three-Phase Electrical Wiring and Motor Connections",
    width: 800,
    height: 500
  },
  {
    title: "Single-Phase Residential Electrical Wiring",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Residential_Wiring_Journey.png",
    alt: "Single-phase residential electrical wiring diagram",
    width: 800,
    height: 500
  },
  {
    title: "Electrical Schematic Drawing & Basic Control Circuits",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Electrical_Schematic_Drawing.png",
    alt: "Electrical Schematic Drawing & Basic Control Circuits",
    badge: { icon: "shield-checkmark-outline", label: "Electrical Schematic Drawing" },
    width: 800,
    height: 500
  },
  {
    title: "PLC Box Sorting Automation",
    category: "Industrial Automation",
    filters: ["Industrial Automation"],
    href: "https://youtu.be/VEgAQJ69JYg",
    image: "./assets/images/projects/boxSorting.png",
    alt: "Box Sorting Ladder (LAD) program in OpenPLC",
    badge: { icon: "checkmark-circle-outline", label: "Completed" },
    width: 800,
    height: 500
  },
  {
    title: "TaaSa Business Group",
    category: "Web Development",
    filters: ["Web Development"],
    href: "https://taasabusinessgroup.com/",
    image: "./assets/images/projects/taasabusinessgroup.png",
    alt: "TaaSa Business Group website preview",
    width: 800,
    height: 500
  },
  {
    title: "AL-ZAKKI Banquet Hall",
    category: "Web Development",
    filters: ["Web Development"],
    href: "https://al-zakki.netlify.app/",
    image: "./assets/images/projects/al-zakki.png",
    alt: "AL-ZAKKI Banquet Hall website preview",
    width: 800,
    height: 500
  },
  {
    title: "Browz Clothing",
    category: "Web Development",
    filters: ["Web Development"],
    href: "https://browzclothing.netlify.app/",
    image: "./assets/images/projects/browzclothing.png",
    alt: "Browz Clothing website preview",
    width: 800,
    height: 500
  },
  {
    title: "Arduino LCD Counter",
    category: "IoT & Embedded",
    filters: ["IoT & Embedded"],
    href: "https://wokwi.com/projects/467586224469959681",
    image: "./assets/images/projects/LCD_Counter.png",
    alt: "Arduino LCD counter circuit simulation",
    width: 800,
    height: 500
  },
  {
    title: "Sequential LED Blinking System",
    category: "IoT & Embedded",
    filters: ["IoT & Embedded"],
    href: "https://wokwi.com/projects/467501123454926849",
    image: "./assets/images/projects/LED_Sequential.png",
    alt: "Sequential LED blinking system circuit diagram",
    width: 800,
    height: 500
  }
];
