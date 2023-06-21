import {
  CardItem,
  CardSections,
  docType,
} from "../LandingPage/TutorialCard";
import { MODULES } from "../../constants";

/* Define the cards - start */

  // Docs
  export const docsCards: CardSections = [
    {
      name: "",
      description:
        "",
      list: [
        {
          title: "Deploy GCF Function",
          module: MODULES.cd,
          description:
            "Deploy a GCF Function",
          link: "/tutorials/cd-pipelines/serverless/google-cloud-function",
        },
      ],
    },
  ];
  /* Define the cards - end */