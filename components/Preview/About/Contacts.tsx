import React from "react";

import { Stack } from "@/components";

export const Contacts: React.FC = () => (
  <Stack
    className="h-screen items-center justify-center text-2xl font-black uppercase"
    gap={4}
  >
    <a href="mailto://hello@andreykeske.com">Mail</a>{" "}
    <a href="https://github.com/keske">Github</a>{" "}
    <a href="https://www.instagram.com/andreykeske/">Instagram</a>{" "}
    <a href="https://www.linkedin.com/in/andreykeske/">LinkedIn</a>{" "}
    <a href="https://www.goodreads.com/user/show/63547727-andrey-keske">
      Good Reads
    </a>
  </Stack>
);
