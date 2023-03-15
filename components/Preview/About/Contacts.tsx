import React from "react";

export const Contacts: React.FC = () => (
  <div className="flex h-screen flex-col items-center justify-center gap-3 text-2xl font-black uppercase">
    <a href="mailto://hello@andreykeske.com">Mail</a>{" "}
    <a href="https://github.com/keske">Github</a>{" "}
    <a href="https://www.instagram.com/andreykeske/">Instagram</a>{" "}
    <a href="https://www.linkedin.com/in/andreykeske/">LinkedIn</a>{" "}
    <a href="https://www.goodreads.com/user/show/63547727-andrey-keske">
      Good Reads
    </a>
  </div>
);
