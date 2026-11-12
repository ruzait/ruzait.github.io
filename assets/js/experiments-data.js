/**
 * EXPERIMENTS DATA
 * ------------------------------------------------------------------
 * Edit this file to add, remove or update experiment cards.
 * The Experiments page is generated from this list — no HTML editing needed.
 *
 * Each experiment supports:
 *   title    {string} Card heading (required)
 *   category {string} Small category label shown above the title
 *   date     {string} Date shown on the card, e.g. "02/03/2026"
 *   datetime {string} Machine-readable date, e.g. "2026-03-02"
 *   href     {string} Page opened when the card is clicked (required)
 *   image    {string} Path to the preview image (required)
 *   alt      {string} Image description for accessibility
 *   text     {string} Short description shown on the card
 * ------------------------------------------------------------------
 */

window.experimentsData = [
  {
    title: "Simulation of Hydro Power Plant",
    category: "Electrical Power Generation",
    date: "02/03/2026",
    datetime: "2026-03-02",
    href: "./lab-work/Exp3.html",
    image: "./lab-work/imgs/hydro1.png",
    alt: "Hydro power plant MATLAB Simulink simulation",
    text: "Design and simulation of a hydro electric power plant using MATLAB Simulink."
  },
  {
    title: "Simulation of Wind Turbine",
    category: "Electrical Power Generation",
    date: "23/02/2026",
    datetime: "2026-02-23",
    href: "./lab-work/Exp2.html",
    image: "./lab-work/imgs/wind1.png",
    alt: "Wind turbine MATLAB Simulink simulation",
    text: "Design and simulation of wind power generation using a DC motor in MATLAB Simulink."
  },
  {
    title: "Solar Power Generation",
    category: "Electrical Power Generation",
    date: "16/02/2026",
    datetime: "2026-02-16",
    href: "./lab-work/Exp1.html",
    image: "./lab-work/imgs/soler1.png",
    alt: "Solar power generation MATLAB simulation",
    text: "Design of a solar power generation system for home application using MATLAB Simulink."
  }
];
