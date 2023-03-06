import React from "react";

export const Contacts: React.FC = () => (
  <div className="flex h-screen flex-row items-center justify-center gap-3">
    <a href="mailto://hello@andreykeske.com">Mail</a>{" "}
    <span className="mx-2">⸻</span>
    <a href="https://github.com/keske">Github</a>{" "}
    <span className="mx-2">⸻</span>
    <a href="https://www.instagram.com/andreykeske/">Instagram</a>{" "}
    <span className="mx-2">⸻</span>
    <a href="https://www.linkedin.com/in/andreykeske/">LinkedIn</a>{" "}
    <span className="mx-2">⸻</span>
    <a href="https://www.goodreads.com/user/show/63547727-andrey-keske">
      Good Reads
    </a>
  </div>
);
