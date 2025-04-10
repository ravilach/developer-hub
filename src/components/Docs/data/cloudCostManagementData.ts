import {
  CardSections
} from "@site/src/components/TutorialCard/TutorialCard";
import { MODULES } from "@site/src/constants";

  /* Define the cards - start */

    // Docs
    export const docsCards: CardSections = [
      {
        name: "Get started with Cloud Cost Management",
        description:
          "",
        list: [
          {
            title: "Get started",
            module: MODULES.ccm,
            description:
              "Learn the basic concepts of Harness Cloud Cost Management and how to set up CCM for your cloud accounts.",
            link: "/docs/category/get-started-with-ccm",
          },
          {
            title: "Cost reporting",
            module: MODULES.ccm,
            description:
              "Monitor and analyze expenses incurred by your cloud assets using Harness's cost reporting capabilities.",
            link: "/docs/category/cost-reporting",
          },
          {
            title: "Cost optimization",
            module: MODULES.ccm,
            description:
              "Optimize cloud costs by using CCM recommendations and auto-stopping idle cloud instances.",
            link: "/docs/category/cost-optimization",
          },
          {
            title: "Cost governance",
            module: MODULES.ccm,
            description:
              "Manage your cloud environment and cloud spend using the asset governance rules and budgets.",
            link: "/docs/category/cost-governance",
          },
        ],
      },
      {
        name: "Key features and FAQs",
        description:
          "",
        list: [
          {
            title: "AutoStopping rules",
            module: MODULES.ccm,
            description:
              "AutoStopping Rules make sure that your non-production resources run only when used, and never when idle.",
            link: "/docs/category/autostopping-rules",
          },
          {
            title: "Cloud cost recommendations",
            module: MODULES.ccm,
            description:
              "Optimize cloud costs by applying CCM recommendations.",
            link: "/docs/category/recommendations",
          },
          {
            title: "Currency preferences",
            module: MODULES.ccm,
            description:
              "Use your preferred currency throughout Harness CCM.",
            link: "/docs/cloud-cost-management/use-ccm-cost-reporting/currency-preferences",
          },
          {
            title: "Commitment Orchestrator",
            module: MODULES.ccm,
            description:
              "Manage all cloud commitments with Commitment Orchestrator",
            link: "/docs/category/commitment-orchestrator",
            
          },
          {
            title: "Cost categories",
            module: MODULES.ccm,
            description:
              "Use cost categories to take data across multiple sources and attribute it to business contexts.",
            link: "/docs/category/cost-categories",
          },
          {
            title: "Detect cost anomalies",
            module: MODULES.ccm,
            description:
              "Identify unusual or unexpected changes in your cloud service expenses.",
            link: "/docs/cloud-cost-management/use-ccm-cost-reporting/anomaly-detection/a-detect-cloud-cost-anomalies-with-ccm",
          },
          {
            title: "CCM FAQs",
            module: MODULES.ccm,
            description:
              "Find answers to frequently asked Harness CCM questions.",
            link: "/docs/faqs/cloud-cost-management-faqs",
          },
        
        ],
    },
  ];
    /* Define the cards - end */