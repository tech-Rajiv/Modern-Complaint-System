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
  labelKey: string;
  heroSubtitleKey: string;
  primaryHelplineLabelKey: string;
  primaryHelplineNumber: string;
  helplines: Helpline[];
  rightsKeys: string[];
  complaintStepKeys: string[];
  laws: { codeKey: string; descriptionKey: string }[];
};

export const CATEGORY_DATA: CategoryData[] = [
  {
    id: "women",
    labelKey: "categories.women.label",
    heroSubtitleKey: "categories.women.heroSubtitle",
    primaryHelplineLabelKey: "categories.women.primaryHelplineLabel",
    primaryHelplineNumber: "1091",
    helplines: [
      { label: "Women’s Helpline", number: "1091" },
      { label: "Domestic Violence Helpline", number: "181" },
    ],
    rightsKeys: [
      "categories.women.rights.0",
      "categories.women.rights.1",
      "categories.women.rights.2",
    ],
    complaintStepKeys: [
      "categories.women.complaintSteps.0",
      "categories.women.complaintSteps.1",
      "categories.women.complaintSteps.2",
      "categories.women.complaintSteps.3",
    ],
    laws: [
      {
        codeKey: "categories.women.laws.0.code",
        descriptionKey: "categories.women.laws.0.description",
      },
      {
        codeKey: "categories.women.laws.1.code",
        descriptionKey: "categories.women.laws.1.description",
      },
    ],
  },
  {
    id: "men",
    labelKey: "categories.men.label",
    heroSubtitleKey: "categories.men.heroSubtitle",
    primaryHelplineLabelKey: "categories.men.primaryHelplineLabel",
    primaryHelplineNumber: "100",
    helplines: [
      { label: "Police (Emergency)", number: "100" },
      { label: "National Helpline", number: "112" },
    ],
    rightsKeys: [
      "categories.men.rights.0",
      "categories.men.rights.1",
      "categories.men.rights.2",
    ],
    complaintStepKeys: [
      "categories.men.complaintSteps.0",
      "categories.men.complaintSteps.1",
      "categories.men.complaintSteps.2",
      "categories.men.complaintSteps.3",
    ],
    laws: [
      {
        codeKey: "categories.men.laws.0.code",
        descriptionKey: "categories.men.laws.0.description",
      },
      {
        codeKey: "categories.men.laws.1.code",
        descriptionKey: "categories.men.laws.1.description",
      },
    ],
  },
  {
    id: "child",
    labelKey: "categories.child.label",
    heroSubtitleKey: "categories.child.heroSubtitle",
    primaryHelplineLabelKey: "categories.child.primaryHelplineLabel",
    primaryHelplineNumber: "1098",
    helplines: [
      { label: "Child Helpline", number: "1098" },
      { label: "Police (Emergency)", number: "100" },
    ],
    rightsKeys: [
      "categories.child.rights.0",
      "categories.child.rights.1",
      "categories.child.rights.2",
    ],
    complaintStepKeys: [
      "categories.child.complaintSteps.0",
      "categories.child.complaintSteps.1",
      "categories.child.complaintSteps.2",
      "categories.child.complaintSteps.3",
    ],
    laws: [
      {
        codeKey: "categories.child.laws.0.code",
        descriptionKey: "categories.child.laws.0.description",
      },
      {
        codeKey: "categories.child.laws.1.code",
        descriptionKey: "categories.child.laws.1.description",
      },
    ],
  },
  {
    id: "senior",
    labelKey: "categories.senior.label",
    heroSubtitleKey: "categories.senior.heroSubtitle",
    primaryHelplineLabelKey: "categories.senior.primaryHelplineLabel",
    primaryHelplineNumber: "14567",
    helplines: [
      { label: "Senior Citizen Helpline", number: "14567" },
      { label: "Police (Emergency)", number: "100" },
    ],
    rightsKeys: [
      "categories.senior.rights.0",
      "categories.senior.rights.1",
      "categories.senior.rights.2",
    ],
    complaintStepKeys: [
      "categories.senior.complaintSteps.0",
      "categories.senior.complaintSteps.1",
      "categories.senior.complaintSteps.2",
      "categories.senior.complaintSteps.3",
    ],
    laws: [
      {
        codeKey: "categories.senior.laws.0.code",
        descriptionKey: "categories.senior.laws.0.description",
      },
      {
        codeKey: "categories.senior.laws.1.code",
        descriptionKey: "categories.senior.laws.1.description",
      },
    ],
  },
];

export const SIDEBAR_ITEMS = CATEGORY_DATA.map(({ id, labelKey }) => ({
  key: id,
  labelKey,
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
  labelKey: string;
  summaryKey: string;
  measuresKeys: string[];
  complaintStepKeys: string[];
  helplines: Helpline[];
};

export const AWARENESS_TOPICS: AwarenessTopic[] = [
  {
    id: "forest",
    labelKey: "awareness.topics.forest.label",
    summaryKey: "awareness.topics.forest.summary",
    measuresKeys: [
      "awareness.topics.forest.measures.0",
      "awareness.topics.forest.measures.1",
      "awareness.topics.forest.measures.2",
    ],
    complaintStepKeys: [
      "awareness.topics.forest.complaintSteps.0",
      "awareness.topics.forest.complaintSteps.1",
      "awareness.topics.forest.complaintSteps.2",
      "awareness.topics.forest.complaintSteps.3",
    ],
    helplines: [
      { label: "Forest Department (local)", number: "1926" },
      { label: "Police (Emergency)", number: "100" },
    ],
  },
  {
    id: "roads",
    labelKey: "awareness.topics.roads.label",
    summaryKey: "awareness.topics.roads.summary",
    measuresKeys: [
      "awareness.topics.roads.measures.0",
      "awareness.topics.roads.measures.1",
      "awareness.topics.roads.measures.2",
    ],
    complaintStepKeys: [
      "awareness.topics.roads.complaintSteps.0",
      "awareness.topics.roads.complaintSteps.1",
      "awareness.topics.roads.complaintSteps.2",
      "awareness.topics.roads.complaintSteps.3",
    ],
    helplines: [
      { label: "Traffic Police Helpline", number: "103" },
      { label: "Municipal Corporation Helpline", number: "1916" },
    ],
  },
  {
    id: "rivers",
    labelKey: "awareness.topics.rivers.label",
    summaryKey: "awareness.topics.rivers.summary",
    measuresKeys: [
      "awareness.topics.rivers.measures.0",
      "awareness.topics.rivers.measures.1",
      "awareness.topics.rivers.measures.2",
    ],
    complaintStepKeys: [
      "awareness.topics.rivers.complaintSteps.0",
      "awareness.topics.rivers.complaintSteps.1",
      "awareness.topics.rivers.complaintSteps.2",
      "awareness.topics.rivers.complaintSteps.3",
    ],
    helplines: [
      { label: "Pollution Control Board (state)", number: "1800-11-0181" },
      { label: "Municipal Corporation Helpline", number: "1916" },
    ],
  },
  {
    id: "buildings",
    labelKey: "awareness.topics.buildings.label",
    summaryKey: "awareness.topics.buildings.summary",
    measuresKeys: [
      "awareness.topics.buildings.measures.0",
      "awareness.topics.buildings.measures.1",
      "awareness.topics.buildings.measures.2",
    ],
    complaintStepKeys: [
      "awareness.topics.buildings.complaintSteps.0",
      "awareness.topics.buildings.complaintSteps.1",
      "awareness.topics.buildings.complaintSteps.2",
      "awareness.topics.buildings.complaintSteps.3",
    ],
    helplines: [
      { label: "Fire Service", number: "101" },
      { label: "Municipal Building Department", number: "1916" },
    ],
  },
  {
    id: "safety",
    labelKey: "awareness.topics.safety.label",
    summaryKey: "awareness.topics.safety.summary",
    measuresKeys: [
      "awareness.topics.safety.measures.0",
      "awareness.topics.safety.measures.1",
      "awareness.topics.safety.measures.2",
    ],
    complaintStepKeys: [
      "awareness.topics.safety.complaintSteps.0",
      "awareness.topics.safety.complaintSteps.1",
      "awareness.topics.safety.complaintSteps.2",
      "awareness.topics.safety.complaintSteps.3",
    ],
    helplines: [
      { label: "Police (Emergency)", number: "100" },
      { label: "Women / Child Helpline (if relevant)", number: "1091" },
    ],
  },
];


