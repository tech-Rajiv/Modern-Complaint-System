export type CategoryKey = "men" | "women" | "child" | "senior";

export type Helpline = {
  label: string;
  number: string;
};

export type Law = {
  code: string;
  description: string;
};

export type CategoryData = {
  id: CategoryKey;
  label: string;
  heroSubtitle: string;
  primaryHelplineLabel: string;
  primaryHelplineNumber: string;
  helplines: Helpline[];
  rights: string[];
  complaintSteps: string[];
  laws: Law[];
};

export const CATEGORY_DATA: CategoryData[] = [
  {
    id: "women",
    label: "Women",
    heroSubtitle: "You are in the Women's Rights Section.",
    primaryHelplineLabel: "Women’s Helpline",
    primaryHelplineNumber: "1091",
    helplines: [
      { label: "Women’s Helpline", number: "1091" },
      { label: "Domestic Violence Helpline", number: "181" },
    ],
    rights: [
      "Right to free legal aid in eligible cases.",
      "Right to privacy and dignity while filing complaints.",
      "Right to register a Zero FIR at any police station.",
    ],
    complaintSteps: [
      "Document the incident: dates, times, locations, and people involved.",
      "Contact a women-specific helpline (e.g., 1091 or 181) and describe the issue.",
      "Visit the nearest police station to file an FIR with supporting documents.",
      "Request a copy of the FIR and keep the FIR number safely.",
    ],
    laws: [
      {
        code: "Protection of Women from Domestic Violence Act",
        description:
          "Provides protection and relief for women facing physical, emotional, or economic abuse.",
      },
      {
        code: "Maternity Benefit Act",
        description:
          "Ensures paid leave and job protection during and after pregnancy.",
      },
    ],
  },
  {
    id: "men",
    label: "Men",
    heroSubtitle: "You are in the Men's Rights Section.",
    primaryHelplineLabel: "General Police Helpline",
    primaryHelplineNumber: "100",
    helplines: [
      { label: "Police (Emergency)", number: "100" },
      { label: "National Helpline", number: "112" },
    ],
    rights: [
      "Right to be treated with dignity and without discrimination.",
      "Right to legal representation during criminal proceedings.",
      "Right to seek protection if facing abuse or threats.",
    ],
    complaintSteps: [
      "Write down what happened with dates, times, and witnesses.",
      "Call the police helpline or visit your nearest police station.",
      "File a written complaint or FIR describing the incident clearly.",
      "Collect a copy of the FIR and follow up on the investigation status.",
    ],
    laws: [
      {
        code: "Code of Criminal Procedure",
        description:
          "Governs how investigations, arrests, and trials are conducted.",
      },
      {
        code: "Indian Penal Code (general offences)",
        description:
          "Defines common criminal offences like assault, cheating, and criminal intimidation.",
      },
    ],
  },
  {
    id: "child",
    label: "Children",
    heroSubtitle: "You are in the Child Protection Section.",
    primaryHelplineLabel: "Child Helpline",
    primaryHelplineNumber: "1098",
    helplines: [
      { label: "Child Helpline", number: "1098" },
      { label: "Police (Emergency)", number: "100" },
    ],
    rights: [
      "Right to protection from abuse, exploitation, and neglect.",
      "Right to free and compulsory education up to a certain age.",
      "Right to a child-friendly process while recording statements.",
    ],
    complaintSteps: [
      "Ensure the child's immediate safety and remove them from danger.",
      "Call Child Helpline 1098 or the local police.",
      "Provide details about the child, guardian (if any), and the incident.",
      "Cooperate with Child Welfare Committee or authorities for further action.",
    ],
    laws: [
      {
        code: "Protection of Children from Sexual Offences (POCSO) Act",
        description:
          "Provides child-friendly procedures for reporting and prosecuting sexual offences.",
      },
      {
        code: "Right of Children to Free and Compulsory Education Act",
        description:
          "Guarantees free and compulsory education for children in the specified age group.",
      },
    ],
  },
  {
    id: "senior",
    label: "Senior Citizens",
    heroSubtitle: "You are in the Senior Citizens' Rights Section.",
    primaryHelplineLabel: "Senior Citizen Helpline",
    primaryHelplineNumber: "14567",
    helplines: [
      { label: "Senior Citizen Helpline", number: "14567" },
      { label: "Police (Emergency)", number: "100" },
    ],
    rights: [
      "Right to live with dignity and without abuse.",
      "Right to claim maintenance from children or relatives.",
      "Right to approach tribunals for protection of life and property.",
    ],
    complaintSteps: [
      "Write down incidents of neglect, abuse, or financial exploitation.",
      "Call the Senior Citizen Helpline 14567 or contact the local police.",
      "File a complaint or approach the Maintenance Tribunal, if available.",
      "Keep copies of complaints, notices, and orders for your records.",
    ],
    laws: [
      {
        code:
          "Maintenance and Welfare of Parents and Senior Citizens Act",
        description:
          "Allows senior citizens to claim maintenance from children or relatives.",
      },
      {
        code: "General criminal law protections",
        description:
          "Protects senior citizens from physical, verbal, and economic abuse.",
      },
    ],
  },
];

export const SIDEBAR_ITEMS = CATEGORY_DATA.map(({ id, label }) => ({
  key: id,
  label,
}));

export const HEADER_TABS = [
  "Know Your Rights",
  "Legal Dictionary",
  "Complaint Guide",
] as const;

export type HeaderTab = (typeof HEADER_TABS)[number];

export const EMERGENCY_CONTACTS: Helpline[] = [
  { label: "Police (Emergency)", number: "100" },
  { label: "National Helpline", number: "112" },
  { label: "Women’s Helpline", number: "1091" },
  { label: "Child Helpline", number: "1098" },
  { label: "Senior Citizen Helpline", number: "14567" },
];

// Awareness topics (environment, public safety, etc.)
export type AwarenessTopicId =
  | "forest"
  | "roads"
  | "rivers"
  | "buildings"
  | "safety";

export type AwarenessTopic = {
  id: AwarenessTopicId;
  label: string;
  summary: string;
  measures: string[];
  complaintSteps: string[];
  helplines: Helpline[];
};

export const AWARENESS_TOPICS: AwarenessTopic[] = [
  {
    id: "forest",
    label: "Forest & Wildlife",
    summary:
      "Illegal cutting of trees, forest fires, and wildlife poaching harm the environment and future generations.",
    measures: [
      "Do not start fires or leave burning materials in forest areas.",
      "Avoid littering plastic, glass, or other waste in green zones.",
      "Report illegal tree cutting, hunting, or suspicious activity immediately.",
    ],
    complaintSteps: [
      "Note the exact location, time, and what you observed in the forest area.",
      "If safe, take photos or short videos showing damage or illegal activity.",
      "Call the forest department or local environmental helpline and share the details.",
      "File a written complaint with the nearest forest office or police station, attaching any evidence.",
    ],
    helplines: [
      { label: "Forest Department (local)", number: "1926" },
      { label: "Police (Emergency)", number: "100" },
    ],
  },
  {
    id: "roads",
    label: "Roads & Traffic",
    summary:
      "Potholes, broken signals, and unsafe driving conditions can cause serious accidents.",
    measures: [
      "Follow traffic rules, speed limits, and wear seat belts/helmets.",
      "Avoid blocking emergency lanes or pedestrian crossings.",
      "Report damaged roads, open manholes, or broken traffic signals.",
    ],
    complaintSteps: [
      "Capture clear photos of the road issue, including nearby landmarks.",
      "Note the road name, intersection, or closest building for accurate location.",
      "Raise a complaint with your city’s municipal body or road authority portal.",
      "If there is an immediate risk to life, call the police or traffic helpline.",
    ],
    helplines: [
      { label: "Traffic Police Helpline", number: "103" },
      { label: "Municipal Corporation Helpline", number: "1916" },
    ],
  },
  {
    id: "rivers",
    label: "Rivers & Water Bodies",
    summary:
      "Dumping waste, chemicals, or sewage into rivers and lakes damages ecosystems and drinking water.",
    measures: [
      "Never throw garbage, puja materials, or plastics into rivers or lakes.",
      "Avoid using harsh detergents or chemicals near open water bodies.",
      "Join or support local clean-up drives to keep water bodies healthy.",
    ],
    complaintSteps: [
      "Record what kind of pollution you see (solid waste, sewage, chemical discharge, etc.).",
      "Note the date, time, and exact location on the river or lake bank.",
      "Inform the local pollution control board or municipal body with photos, if possible.",
      "If you see tanker or industrial discharge, share vehicle/industry details with authorities.",
    ],
    helplines: [
      { label: "Pollution Control Board (state)", number: "1800-11-0181" },
      { label: "Municipal Corporation Helpline", number: "1916" },
    ],
  },
  {
    id: "buildings",
    label: "Buildings & Fire Safety",
    summary:
      "Unauthorized construction, blocked fire exits, and faulty wiring can lead to disasters.",
    measures: [
      "Ensure stairways, exits, and corridors in your building are not blocked.",
      "Check that fire extinguishers and alarms are visible and regularly serviced.",
      "Avoid overloading sockets or using poor-quality electrical extensions.",
    ],
    complaintSteps: [
      "Document safety issues such as locked exits, exposed wiring, or illegal construction.",
      "Inform your housing society or building management in writing.",
      "If they do not act, escalate to the local municipal authority or fire department.",
      "In case of immediate danger (sparks, smoke, or fire), evacuate and call the fire service.",
    ],
    helplines: [
      { label: "Fire Service", number: "101" },
      { label: "Municipal Building Department", number: "1916" },
    ],
  },
  {
    id: "safety",
    label: "Public Safety & Crowd Spaces",
    summary:
      "Overcrowded events, unsafe public spaces, and poor lighting increase the risk of crime and accidents.",
    measures: [
      "Avoid overcrowded venues without visible emergency exits.",
      "Prefer well-lit routes and public spaces, especially at night.",
      "Report broken street lights, unsafe parks, or harassment immediately.",
    ],
    complaintSteps: [
      "Write down details of unsafe conditions or incidents (place, time, people involved).",
      "For harassment or crime, call the police or relevant helpline right away.",
      "Report infrastructure issues like dark streets or broken lights to the municipal body.",
      "Keep reference numbers of all complaints for follow‑up.",
    ],
    helplines: [
      { label: "Police (Emergency)", number: "100" },
      { label: "Women / Child Helpline (if relevant)", number: "1091" },
    ],
  },
];


