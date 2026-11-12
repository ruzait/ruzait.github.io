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
    title: "Three-Phase Electrical Wiring and Motor Connections",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Three-Phase Motor_Wiring-card.jpg",
    alt: "Three-Phase Electrical Wiring and Motor Connections",
    width: 800,
    height: 500
  },
  {
    title: "Single-Phase Residential Electrical Wiring",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Residential_Wiring_Journey-card.jpg",
    alt: "Single-phase residential electrical wiring diagram",
    width: 800,
    height: 500
  },
  {
    title: "Electrical Schematic Drawing & Basic Control Circuits",
    category: "Electrical",
    filters: ["Electrical"],
    href: "https://www.linkedin.com/in/ruzaid-ahamed/",
    image: "./assets/images/projects/Electrical_Schematic_Drawing-card.jpg",
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
    image: "./lab-work/imgs/boxSorting-card.jpg",
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
    image: "./assets/images/taasabusinessgroup-card.jpg",
    alt: "TaaSa Business Group website preview",
    width: 800,
    height: 500
  },
  {
    title: "AL-ZAKKI Banquet Hall",
    category: "Web Development",
    filters: ["Web Development"],
    href: "https://al-zakki.netlify.app/",
    image: "./assets/images/al-zakki-card.jpg",
    alt: "AL-ZAKKI Banquet Hall website preview",
    width: 800,
    height: 500
  },
  {
    title: "Browz Clothing",
    category: "Web Development",
    filters: ["Web Development"],
    href: "https://browzclothing.netlify.app/",
    image: "./assets/images/browzclothing-card.jpg",
    alt: "Browz Clothing website preview",
    width: 800,
    height: 500
  },
  {
    title: "Arduino LCD Counter",
    category: "IoT & Embedded",
    filters: ["IoT & Embedded"],
    href: "https://wokwi.com/projects/467586224469959681",
    image: "./lab-work/imgs/Counter-card.jpg",
    alt: "Arduino LCD counter circuit simulation",
    width: 800,
    height: 500
  },
  {
    title: "Sequential LED Blinking System",
    category: "IoT & Embedded",
    filters: ["IoT & Embedded"],
    href: "https://wokwi.com/projects/467501123454926849",
    image: "./lab-work/imgs/Ardino1-card.jpg",
    alt: "Sequential LED blinking system circuit diagram",
    width: 800,
    height: 500
  }
];
