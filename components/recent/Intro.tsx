import React from "react";

import { ResponsiveTextWrapper } from "./ResponsiveTextWrapper";
import { Stack } from "./Stack";
import { Text } from "./Text";

export const Intro: React.FC = () => (
  <Stack gap={20}>
    <Text className="font-bold" variant="title">
      Andrey Keske
    </Text>
    <ResponsiveTextWrapper gap={10}>
      <Text variant="title">
        I’m a{" "}
        <Text as="span" className="font-bold">
          founding full-stack engineer
        </Text>{" "}
        who loves building polished products—with a sharp eye on UX,
        simplicity, and design. I’ve helped YC-backed startups turn
        early ideas into real, user-facing products.
      </Text>
      <Text variant="title">
        I’ve helped build award-winning products featured on
        Siteinspire, the App Store (App of the Day), and Product Hunt
        (Product of the Day), working as part of fast-paced,
        high-performing teams.
      </Text>
    </ResponsiveTextWrapper>
  </Stack>
);
