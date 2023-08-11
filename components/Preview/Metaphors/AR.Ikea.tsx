import React from "react";

import { WorkDetails } from "@/components";

export const ARIkea = () => (
  <div className="flex flex-col items-center gap-20 pb-20 pt-56">
    <div className="flex flex-col items-center gap-5">
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              className="absolute left-0 top-0 h-full w-full"
              controls
              src="/videos/ikea.mp4"
            />
          </div>
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>
            The first discarded piece of IKEA furniture in Augmented
            Reality
          </h3>
          <small>
            This work represents an innovative use of technology to
            explore the boundaries between the physical and virtual
            worlds. The piece is the first discarded piece of IKEA
            furniture to be recreated in augmented reality, offering a
            new perspective on the lifecycle of consumer goods.
          </small>
          <small>
            Through the use of AR technology, the viewer is able to
            see the piece in three dimensions, as though it were a
            physical object. The piece itself is unremarkable - a
            simple chair leg, no longer of use to its owner. However,
            in the virtual world, it takes on a new significance as a
            symbol of the potential of technology to transform the way
            we interact with everyday objects.
          </small>
          <small>
            This work invites us to question our relationship with
            consumer goods and the impact of our consumption on the
            environment. By highlighting the potential of augmented
            reality to extend the lifespan of discarded objects, the
            piece encourages us to consider new ways of reducing waste
            and reimagining the lifecycle of our possessions.
          </small>
          <small>
            In this way, The First Discarded Piece of IKEA Furniture
            in Augmented Reality challenges us to rethink our
            relationship with technology and the world around us. As
            we move towards an increasingly digital future, works like
            this offer a glimpse of the new possibilities that await
            us.
          </small>
          <small>
            <i>
              Made in{" "}
              <a href="https://apps.apple.com/us/app/ikea-place/id1279244498">
                IKEA Place
              </a>
            </i>
          </small>
          <time dateTime="2013">2013</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
