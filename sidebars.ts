import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "category",
          label: "Queues",
          items: [
            "guides/Queues/Queue",
            "guides/Queues/Queue_Classic",
            "guides/Queues/Queue_Cpps",
            "guides/Queues/Queue_RO",
            "guides/Queues/Queue_DE",
          ],
        },
        {
          type: "category",
          label: "Lists",
          items: [
            "guides/Lists/List",
            "guides/Lists/CList",
            "guides/Lists/DList",
          ],
        },
        {
          type: "category",
          label: "SpecialTypes",
          items: ["guides/SpecialTypes/Nullable"],
        },
        "guides/Array",
        "guides/String",
        "guides/Stack",
      ],
    },
  ],
};

export default sidebars;
