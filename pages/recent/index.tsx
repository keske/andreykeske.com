/* eslint-disable react/jsx-wrap-multilines */

import React from "react";

import {
  Devider,
  Footer,
  Intro,
  // SegmentedControl,
  Stack,
  Text,
  WorkDescription,
} from "./components";

import type { NextPage } from "next";

import { Head } from "@/components/index";

const Recent: NextPage = () => (
  // const [segmentedControlValue, setSegmentedControlValue] =
  //   React.useState<string>("All");

  // const handleSegmentedControlValueChange = React.useCallback(
  //   (value: string) => {
  //     setSegmentedControlValue(value);
  //   },
  //   [],
  // );

  <>
    <Head disableIndex />
    <main className="bg-white p-4 lg:p-10">
      <Stack gap={130}>
        {/* <SegmentedControl
            className="fixed bottom-10 self-center rounded-[16px] p-1 backdrop-blur-2xl"
            defaultValue={segmentedControlValue}
            items={["All", "iOS", "Web"]}
            onValueChange={handleSegmentedControlValueChange}
          /> */}
        <Intro />

        <Devider />

        <WorkDescription
          description={
            <Stack gap={10}>
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  Ariadna
                </Text>{" "}
                as a{" "}
                <Text as="span" className="font-bold">
                  Founding Engineer
                </Text>{" "}
                — designed and built the entire interface from the
                ground up, developed a scalable UI kit, brought
                interactions to life with smooth animations and custom
                shaders.
              </Text>
              <Text variant="title">
                I led all App Store deployments, and worked closely
                with designers and machine learning engineers to shape
                the product end-to-end.
              </Text>
            </Stack>
          }
          techStack={[
            "TypeScript",
            "Expo",
            "React Native",
            "Zustand",
            "React Hook Form",
            "Yup",
            "React Native Fiber",
            "Reanimated",
            "ThreeJS",
          ]}
          years="2024—2025"
        >
          <Stack gap={4}>
            <Stack direction="row" gap={0}>
              <Stack className="w-8/12">
                <img src="recent/images/ariadna/main.webp" />
              </Stack>
              <Stack className="w-4/12" gap={0}>
                <img src="recent/images/ariadna/product-hunt.webp" />
                <img src="recent/images/ariadna/pay-screen.webp" />
              </Stack>
            </Stack>
            <Stack>
              <img src="recent/images/ariadna/screens.webp" />
            </Stack>
          </Stack>
        </WorkDescription>

        <Devider />

        <WorkDescription
          description={
            <Stack gap={10}>
              <Text variant="title">
                As a{" "}
                <Text as="span" className="font-bold">
                  Senior Front-End Engineer
                </Text>{" "}
                at{" "}
                <Text as="span" className="font-bold">
                  Material Bank
                </Text>
                , I worked on a high-performance Next.js platform for
                next-day delivery of material samples.
              </Text>
              <Text variant="title">
                I contributed to core user-facing flows using SSG,
                SSR, and dynamic modules, and helped implement a
                scalable UI kit with a custom Theme UI fork, Radix UI,
                and Storybook.
              </Text>
              <Text variant="title">
                Collaborating closely with designers and backend
                engineers, I focused on shipping polished, fast, and
                reliable features.
              </Text>
            </Stack>
          }
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "React Query",
            "React Hook Form",
            "Yup",
            "Radix UI",
            "Storybook",
          ]}
          years="2023—2024"
        >
          <Stack gap={4}>
            <Stack direction="row" gap={4}>
              <Stack className="w-1/2">
                <img src="recent/images/material-bank/5.webp" />
              </Stack>
              <Stack className="w-1/2">
                <img src="recent/images/material-bank/6.webp" />
              </Stack>
            </Stack>
            <Stack direction="row" gap={4}>
              <Stack className="w-1/3">
                <img src="recent/images/material-bank/2.webp" />
              </Stack>
              <Stack className="w-1/3">
                <img src="recent/images/material-bank/3.webp" />
              </Stack>
              <Stack className="w-1/3">
                <img src="recent/images/material-bank/4.webp" />
              </Stack>
            </Stack>
          </Stack>
        </WorkDescription>

        <Devider />

        <WorkDescription
          description={
            <Stack gap={10}>
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  [untitled]
                </Text>
                , I worked as a{" "}
                <Text as="span" className="font-bold">
                  React Native Engineer
                </Text>{" "}
                to shape the mobile experience for artists managing
                their work-in-progress tracks.
              </Text>
              <Text variant="title">
                I developed core screens and reusable components,
                crafted smooth 60FPS animations for fluid
                interactions.
              </Text>
              <Text variant="title">
                I also focused on performance — significantly reducing
                the number of views per screen and optimizing memory
                usage, CPU load, and battery efficiency.
              </Text>
            </Stack>
          }
          techStack={[
            "React Native",
            "TypeScript",
            "Reanimated",
            "Zustand",
          ]}
          years="2023"
        >
          <Stack className="self-center" direction="row">
            <video
              className="mx-6 size-full rounded-xl"
              controls
              src="/videos/untitled.mp4"
            />
          </Stack>
        </WorkDescription>

        <Devider />

        <WorkDescription
          description={
            <Stack gap={10}>
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  Samara
                </Text>
                , the forward-thinking company behind the Backyard
                ADU—a design‑driven, end‑to‑end prefab home platform
                backed by Airbnb co‑founder Joe Gebbia and Thrive
                Capital — I served as a{" "}
                <Text as="span" className="font-bold">
                  Full-Stack Engineer
                </Text>{" "}
                focused on building their internal web store.
              </Text>
              <Text variant="title">
                I developed the core React interface where employees
                could purchase Samara’s products. I collaborated
                closely with the art director to bring product value
                to life through complex, visually rich animations. As
                part of the front-end team, I helped deliver an online
                builder that allowed users to customize product models
                and I worked to optimize the loading of over two
                thousand 3D product models for performance and
                scalability.
              </Text>
              <Text variant="title">
                On the backend, I built serverless handle functions to
                securely process and store user purchase data,
                ensuring privacy and efficiency throughout the app
                experience.
              </Text>
            </Stack>
          }
          techStack={[
            "Node.js",
            "React",
            "TypeScript",
            "Styled Components",
            "Zustand",
            "ThreeJS",
          ]}
          years="2022"
        >
          <Stack direction="row" gap={4}>
            <Stack className="w-1/2">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/samara/1.png"
              />
            </Stack>
            <Stack className="w-1/2">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/samara/2.png"
              />
            </Stack>
          </Stack>
        </WorkDescription>

        <Devider />

        <WorkDescription
          description={
            <Stack gap={10}>
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  Fridge No More
                </Text>{" "}
                — a New York–based startup offering 15-minute grocery
                delivery through a network of micro-warehouses — I led
                front-end development as a{" "}
                <Text as="span" className="font-bold">
                  Senior Engineer
                </Text>
                , building an internal web application that supported
                warehouse staff throughout the entire fulfillment
                flow, from packing to dispatch.
              </Text>
              <Text variant="title">
                Partnering closely with the founders and on-the-ground
                employees, I designed and implemented a React-based
                system built for the demands of high-speed,
                high-volume operations. The app included offline
                support for low-connectivity environments and
                integrated directly with hardware APIs to handle
                barcode scanning and real-time inventory tracking.
              </Text>
            </Stack>
          }
          techStack={["Next.js", "React", "TypeScript", "MobX"]}
          years="2021"
        >
          <Stack direction="row" gap={4}>
            <Stack className="w-1/4">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/fnm/3.jpeg"
              />
            </Stack>
            <Stack className="w-1/4">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/fnm/1.jpeg"
              />
            </Stack>
            <Stack className="w-1/4">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/fnm/2.jpeg"
              />
            </Stack>
            <Stack className="w-1/4">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/fnm/4.jpeg"
              />
            </Stack>
          </Stack>
        </WorkDescription>

        <Devider />

        <WorkDescription
          description={
            <Stack gap={10}>
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  Jupe
                </Text>{" "}
                — a visionary company delivering nature‑ready
                pod‑shelters built for rapid deployment and
                sustainable hospitality — I served as a{" "}
                <Text as="span" className="font-bold">
                  Front-End Engineer
                </Text>{" "}
                creating a responsive web app where customers interact
                with the product and eventually purchase Jupe units.
              </Text>
              <Text variant="title">
                I designed and implemented ESLint configurations, UI
                Kit, and serverless cloud functions to support the
                app’s dynamic behaviors, while also contributing to
                CI/CD setups that allow the team to deploy features
                smoothly.
              </Text>
            </Stack>
          }
          techStack={[
            "Next.js",
            "React",
            "TypeScript",
            "Styled Components",
          ]}
          years="2021"
        >
          <Stack direction="row" gap={4}>
            <Stack className="w-1/2">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/jupe/jupe-1.png"
              />
            </Stack>
            <Stack className="w-1/2">
              <img
                className="rounded-xl border-[1.1px] border-black/20"
                src="recent/images/jupe/jupe-2.png"
              />
            </Stack>
          </Stack>
        </WorkDescription>

        <Devider />

        <WorkDescription
          description={
            <>
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  W1D1
                </Text>
                , I co-founded and served as{" "}
                <Text as="span" className="font-bold">
                  CTO
                </Text>{" "}
                — led the product from concept to launch, designed and
                built the entire app, created a privacy-first
                architecture with anonymous user flows, and crafted a
                creative challenge system inspired by historic
                artistic techniques. Focused on building a
                distraction-free space for everyday creativity.
              </Text>
            </>
          }
          techStack={["React Native", "TypeScript", "MobX"]}
          years="2018—2021"
        >
          <Stack direction="row">
            <Stack className="w-full">
              <img
                className="rounded-3xl"
                src="recent/images/w1d1/main.png"
              />
            </Stack>
          </Stack>
          <Stack
            className="-mt-56 w-6/12 self-center"
            direction="row"
          >
            <img
              className="w-12/12"
              src="recent/images/w1d1/w1d1.png"
            />
          </Stack>
        </WorkDescription>
        <Footer />
      </Stack>
    </main>
  </>
);

export default Recent;
