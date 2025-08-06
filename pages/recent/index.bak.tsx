import React from "react";

import { SegmentedControl, Stack, Text } from "./components";

import type { NextPage } from "next";

import { Head } from "@/components/index";

const Recent: NextPage = () => (
  <>
    <Head disableIndex />

    <main className="bg-white font-mono text-black">
      <Stack gap={10}>
        <Text variant="title">Andrey Keske</Text>
        <Stack gap={4}>
          <Text variant="headline">
            Fullstack Engineer, focused on building products from 0 to
            1, focused on user experience
          </Text>
          <Text variant="headline">
            Andey builded and launced web products that were
            award-winning on Siteinspire, and applications that were
            featured on the App Store as App of the Day.
          </Text>
        </Stack>

        <SegmentedControl
          // onValueChange={}
          className="sticky top-0 z-50 bg-white px-4 py-2"
          items={["All", "iOS", "Web"]}
          value="All"
        />

        {/*
        <div className="flex flex-row">
          <div className="w-1/2">
            <a href="https://www.samara.com">
              <img src={`/images/recent/samara.png`} />
            </a>
          </div>
          <div className="flex w-1/2 flex-col gap-4 p-3">
            <div>
              <p className="text-sm font-light opacity-70">Company</p>
              <h3>
                <a
                  className="text-blue-500"
                  href="https://www.samara.com"
                >
                  Samara
                </a>
              </h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Role</p>
              <h3>Full Stack Engineer</h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Stack</p>
              <p>
                Typescript, React, Zustand, Styled Components, Three,
                React Fiber, React DREI, Vercel Serverless Functions
              </p>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Awards</p>
              <h3>
                <a
                  className="text-blue-500"
                  href="https://www.siteinspire.com/websites/11295-samara"
                >
                  Siteinspire
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2">
            <a href="https://studyverse.live">
              <img src={`/images/recent/studyverse.png`} />
            </a>
          </div>
          <div className="flex w-1/2 flex-col gap-4 p-3">
            <div>
              <p className="text-sm font-light opacity-70">Company</p>
              <h3>
                <a href="https://studyverse.live">Studyverse</a>
              </h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Role</p>
              <h3>Full Stack Engineer</h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Stack</p>
              <h3>
                Typescript, React, Tailwind, Headlessui, Node.JS,
                Apollo GraphQL, Mongodb, Mongoose, Typegoose
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2">
            <a href="https://www.jupe.com">
              <img src={`/images/recent/jupe.png`} />
            </a>
          </div>
          <div className="flex w-1/2 flex-col gap-4 p-3">
            <div>
              <p className="text-sm font-light opacity-70">Company</p>
              <h3>
                <a href="https://www.jupe.com">Jupe</a>
              </h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Role</p>
              <h3>Full Stack Engineer</h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Stack</p>
              <h3>
                Typescript, React, Zustand, Styled Components,
                Bootstrap, Vercel Serverless Functions
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/2 items-center justify-center">
            <video
              className="mx-6 size-full rounded-xl"
              controls
              src="/videos/untitled.mp4"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-4 p-3">
            <div>
              <p className="text-sm font-light opacity-70">Company</p>
              <h3>
                <a href="https://untitledinbrackets.com">
                  [untitled]
                </a>
              </h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Role</p>
              <h3>React Native Engineer</h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Stack</p>
              <h3>
                Typescript, React, React Native, Reanimated,
                Fastimage, Styled Components
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex w-1/2 items-center justify-center">
            <div className="w-[70%]">
              <a href="https://w1d1.com">
                <img src={`/images/recent/w1d1.png`} />
              </a>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-4 p-3">
            <div>
              <p className="text-sm font-light opacity-70">Company</p>
              <h3>
                <a href="https://w1d1.com">W1D1</a>
              </h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Role</p>
              <h3>CTO</h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Stack</p>
              <h3>
                Typescript, React, React Native, Reanimated,
                Fastimage, Styled Components, Bootstrap, Node.JS,
                Express, Apollo GraphQL, Swift, Docker, Swarm
              </h3>
            </div>
            <div>
              <p className="text-sm font-light opacity-70">Awards</p>
              <h3>Multiply as App of the Day on the App Store</h3>
            </div>
          </div>
        </div>
 */}
      </Stack>
    </main>
  </>
);

export default Recent;
