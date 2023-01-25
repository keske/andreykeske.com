import NextHead from "next/head";
import React from "react";

type HeadProps = {
  description?: string;
  disableIndex?: boolean;
  imageUrl?: string;
  title?: string;
};

export type HeadRef = any;

export const Head = React.forwardRef<HeadRef, HeadProps>(
  ({ disableIndex, ...props }) => {
    const title = props.title ? props.title : "Andrey Keske";

    const description = props.description ? props.description : "Artworks";

    const url =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_URL;

    return (
      <NextHead>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <meta
          content={disableIndex ? "noindex,nofollow" : "index,follow"}
          name="robots"
        />
        <meta
          content={disableIndex ? "noindex,nofollow" : "index,follow"}
          name="googlebot"
        />
        <meta content="en" httpEquiv="content-language" />
        <meta content={description} name="description" />
        <meta content={props.imageUrl} name="thumbnail" />
        <meta content={description} name="og:description" />
        <meta content="Studyverse" name="og:site_name" />
        <meta content={title} name="og:title" />
        <meta content="website" name="og:type" />
        <meta content={url} name="og:url" />
        <meta content={props.imageUrl} name="og:image" />
        <meta content={description} name="twitter:description" />
        <meta content={props.imageUrl} name="twitter:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <title>{title}</title>
        <link href={url} rel="cannonical" />
      </NextHead>
    );
  },
);
