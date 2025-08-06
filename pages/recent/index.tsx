/* eslint-disable react/jsx-wrap-multilines */

import React from "react";

import {
  SegmentedControl,
  Stack,
  StackProps,
  Text,
  TextProps,
} from "./components";

import type { NextPage } from "next";

import { Head } from "@/components/index";

const Devider: React.FC = () => (
  <Text className="self-center text-7xl">✌︎</Text>
);

const ResponsiveTextWrapper = React.forwardRef<
  HTMLDivElement,
  StackProps
>(({ children, ...props }, forwardedRef) => (
  <Stack
    className="xl:w-10/12 2xl:w-6/12"
    ref={forwardedRef}
    {...props}
  >
    {children}
  </Stack>
));

const Years = React.forwardRef<HTMLDivElement, TextProps>(
  ({ children, ...props }, forwardedRef) => (
    <Text
      className="self-start rounded-lg border-[1.7px] border-black/50 px-2 text-sm font-bold"
      ref={forwardedRef}
      {...props}
    >
      {children}
    </Text>
  ),
);

const WorkDescription = React.forwardRef<
  HTMLDivElement,
  StackProps & {
    description: React.ReactNode;
    techStack?: string[];
    years: string;
  }
>(
  (
    { children, description, techStack, years, ...props },
    forwardedRef,
  ) => (
    <Stack gap={10} ref={forwardedRef} {...props}>
      <Years>{years}</Years>
      <ResponsiveTextWrapper gap={10}>
        {description}
      </ResponsiveTextWrapper>
      <Text variant="headline">Stack: {techStack?.join(", ")}</Text>
      {children}
    </Stack>
  ),
);

const Recent: NextPage = () => {
  const [segmentedControlValue, setSegmentedControlValue] =
    React.useState<string>("All");

  const handleSegmentedControlValueChange = React.useCallback(
    (value: string) => {
      setSegmentedControlValue(value);
    },
    [],
  );

  return (
    <>
      <Head disableIndex />
      <main className="bg-white p-20">
        <Stack gap={130}>
          <SegmentedControl
            className="fixed bottom-10 self-center rounded-[16px] p-1 backdrop-blur-2xl"
            defaultValue={segmentedControlValue}
            items={["All", "iOS", "Web"]}
            onValueChange={handleSegmentedControlValueChange}
          />

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
                who loves building polished products—with a sharp eye
                on UX, simplicity, and design. I’ve helped YC-backed
                startups turn early ideas into real, user-facing
                products.
              </Text>
              <Text variant="title">
                I’ve helped build award-winning products featured on
                Siteinspire, the App Store (App of the Day), and
                Product Hunt (Product of the Day), working as part of
                fast-paced, high-performing teams.
              </Text>
            </ResponsiveTextWrapper>
          </Stack>

          <Devider />

          <WorkDescription
            description={
              <Text variant="title">
                At{" "}
                <Text as="span" className="font-bold">
                  Ariadna as a founding engineer
                </Text>{" "}
                — designed and built the entire interface from the
                ground up, developed a scalable UI kit, brought
                interactions to life with smooth animations and custom
                shaders, led all App Store deployments, and worked
                closely with designers and machine learning engineers
                to shape the product end-to-end.
              </Text>
            }
            techStack={[
              "TypeScript",
              "Next.js",
              "Expo",
              "React Native",
              "Zustand",
              "React Native Fiber",
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
              <>
                <Text variant="title">
                  <Text as="span" className="font-bold">
                    As a Senior Front-End Engineer at Material Bank
                  </Text>
                  , I worked on a high-performance Next.js platform
                  for next-day delivery of material samples. I
                  contributed to core user-facing flows using SSG,
                  SSR, and dynamic modules, and helped implement a
                  scalable UI kit with a custom Theme UI fork, Radix
                  UI, and Storybook. Collaborating closely with
                  designers and backend engineers, I focused on
                  shipping polished, fast, and reliable features.
                </Text>
              </>
            }
            techStack={[
              "Next.js",
              "React",
              "TypeScript",
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
              <>
                <Text variant="title">
                  <Text as="span" className="font-bold">
                    As a Fullstack Engineer at Samara
                  </Text>
                  — an AI platform that helps creative teams find the
                  right people through a simple chat.
                </Text>
              </>
            }
            techStack={["Next.js", "React", "TypeScript"]}
            years="2021"
          >
            <Stack direction="row" gap={4}>
              <Stack className="w-1/2">
                <img src="recent/images/samara/1.png" />
              </Stack>
              <Stack className="w-1/2">
                <img src="recent/images/samara/2.png" />
              </Stack>
            </Stack>
          </WorkDescription>

          <Devider />

          <WorkDescription
            description={
              <>
                <Text variant="title">
                  <Text as="span" className="font-bold">
                    As a Fullstack Engineer at Jupe
                  </Text>
                  — an AI platform that helps creative teams find the
                  right people through a simple chat.
                </Text>
              </>
            }
            techStack={["Next.js", "React", "TypeScript"]}
            years="2022"
          >
            <Stack direction="row" gap={4}>
              <Stack className="w-1/2">
                <img src="recent/images/jupe/1.png" />
              </Stack>
              <Stack className="w-1/2">
                <img src="recent/images/jupe/2.png" />
              </Stack>
            </Stack>
          </WorkDescription>

          <Devider />

          <WorkDescription
            description={
              <>
                <Text variant="title">
                  <Text as="span" className="font-bold">
                    As a Fullstack Engineer at Untitled
                  </Text>
                  — an AI platform that helps creative teams find the
                  right people through a simple chat.
                </Text>
              </>
            }
            techStack={["Next.js", "React", "TypeScript"]}
            years="2022"
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
              <>
                <Text variant="title">
                  <Text as="span" className="font-bold">
                    As a Fullstack Engineer at W1D1
                  </Text>
                  — an AI platform that helps creative teams find the
                  right people through a simple chat.
                </Text>
              </>
            }
            techStack={["Next.js", "React", "TypeScript"]}
            years="2022"
          >
            <Stack direction="row">
              <Stack className="w-full">
                <img src="recent/images/w1d1/main.png" />
              </Stack>
            </Stack>
            <Stack
              className="-mt-56 w-6/12 self-center"
              direction="row"
            >
              <img
                className="w-11/12"
                src="recent/images/w1d1/w1d1.png"
              />
            </Stack>
          </WorkDescription>
        </Stack>
      </main>
    </>
  );
};

export default Recent;
