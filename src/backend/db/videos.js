import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    title: "Yellow Paper Daisy",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "When chai met toast",
    embedId: "RshlH3T27U4",
    categoryName: ["Music", "Pop", "Romance"],
  },
  {
    _id: uuid(),
    title: "Chaand Baaliyan",
    creator: "Aditya A",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    embedId: "Xi8Fabcb_MA",
    categoryName: ["Music", "Romance"],
  },
  {
    _id: uuid(),
    title: "Pasoori | Ali Sethi x Shae Gill",
    creator: "Coke Studio",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    embedId: "5Eqb_-j3FDA",
    categoryName: ["Music", "Indie", "Dance"],
  },
  {
    _id: uuid(),
    title: "Asymmetrical - Dot.",
    creator: "Dot",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    embedId: "AA16ZpRQZaY",
    categoryName: ["Music", "Acoustic", "Pop", "Dance"],
  },
  {
    _id: uuid(),
    title: "Everybody Dances to Techno",
    creator: "Dot",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    embedId: "TCcIQ_ZhKuQ",
    categoryName: ["Music", "Acoustic", "Dance", "Pop"],
  },
];
