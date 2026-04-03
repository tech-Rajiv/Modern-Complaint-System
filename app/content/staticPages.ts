import type { IssueConfig } from "../components/topic/IssueList";

export const HOME_PAGE_CONTENT = {
  titleKey: "pages.home.title",
  paragraphKeys: ["pages.home.p1", "pages.home.p2"],
};

export const EMERGENCY_PAGE_CONTENT = {
  titleKey: "pages.emergency.title",
  introKey: "pages.emergency.intro",
  tipKey: "pages.emergency.tip",
};

export const WOMEN_TOPICS: IssueConfig[] = [
  {
    id: "harassment",
    title: "womenTopics.harassment.title",
    summary: "womenTopics.harassment.summary",
    helplines: [
      { label: "Women’s Helpline", number: "1091" },
      { label: "Domestic Violence Helpline", number: "181" },
    ],
    complaintHref: "/women/harassment/complaint",
  },
  {
    id: "obscene-messages",
    title: "womenTopics.obsceneMessages.title",
    summary: "womenTopics.obsceneMessages.summary",
    helplines: [
      { label: "Women’s Helpline", number: "1091" },
      { label: "Cyber Crime Helpline", number: "1930" },
    ],
    complaintHref: "/women/obscene-messages/complaint",
  },
  {
    id: "verbal-abuse-street",
    title: "womenTopics.verbalAbuse.title",
    summary: "womenTopics.verbalAbuse.summary",
    helplines: [
      { label: "Women’s Helpline", number: "1091" },
      { label: "Police (Emergency)", number: "100" },
    ],
    complaintHref: "/women/verbal-abuse/complaint",
  },
];

// Add similar arrays later:
// export const MEN_TOPICS: IssueConfig[] = [...]
// export const CHILD_TOPICS: IssueConfig[] = [...]
// export const SENIOR_TOPICS: IssueConfig[] = [...]

