import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "API",
      items: [
        {
          type: "category",
          label: "Queues",
          items: [
            "api/Queues/Queue",
            "api/Queues/Queue_Classic",
            "api/Queues/Queue_Cpps",
            "api/Queues/Queue_RO",
            "api/Queues/Queue_DE",
          ],
        },
        {
          type: "category",
          label: "Lists",
          items: ["api/Lists/List", "api/Lists/CList", "api/Lists/DList"],
        },
        {
          type: "category",
          label: "SpecialTypes",
          items: ["api/SpecialTypes/Nullable"],
        },
        "api/Array",
        "api/String",
        "api/Stack",
      ],
    },
  ],
};

export default sidebars;
