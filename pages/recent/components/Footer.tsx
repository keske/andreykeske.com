import React from "react";

import { Stack } from "./Stack";
import { Text } from "./Text";

export const Footer: React.FC = () => (
  <Stack className="self-center">
    <Text variant="title">
      <a className="text-blue-700" href="#">
        hello@andreykeske.com
      </a>
    </Text>
  </Stack>
);
