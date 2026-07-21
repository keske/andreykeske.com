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
        I’m a full-stack AI engineer who loves building things from
        scratch. My favorite part of the job is taking a rough idea,
        working closely with users, and slowly shaping it into a
        product that feels obvious to use. These days that mostly
        means building LLM applications, RAG systems, agentic
        workflows, voice AI, and the infrastructure that ties
        everything together.
      </Text>
      <Text variant="title">
        Before diving deep into AI, I spent years building web and
        mobile products for startups, YC-backed companies, and
        enterprise teams including Airbnb and Material Bank. I was
        lucky enough to help create products that became{" "}
        <Text as="span" className="font-bold">
          App Store App of the Day
        </Text>{" "}
        (twice) and{" "}
        <Text as="span" className="font-bold">
          Product Hunt Product of the Day
        </Text>
        , which probably explains why I still obsess over good UX,
        clean interfaces, and the small details that make software
        feel right.
      </Text>
    </ResponsiveTextWrapper>
    <Text variant="title">
      <a
        className="text-blue-700"
        href="mailto:hello@andreykeske.com"
      >
        Mail
      </a>{" "}
      ・{" "}
      <a
        className="text-blue-700"
        href="https://www.instagram.com/andreykeske/"
      >
        IG
      </a>{" "}
      ・{" "}
      <a className="text-blue-700" href="https://github.com/keske">
        GitHub
      </a>{" "}
      ・{" "}
      <a
        className="text-blue-700"
        href="https://www.goodreads.com/user/show/63547727-andrey-keske"
      >
        GoodReads
      </a>
    </Text>
  </Stack>
);
