import React from "react";

import { UploadcareImage, WorkDetails } from "@/components/index";

export const Icons = () => (
  <div className="flex flex-col items-center gap-20 pb-20 pt-56">
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-row flex-wrap justify-center gap-2">
        <div className="w-1/2">
          <UploadcareImage
            alt="Invisible icons on the iPad"
            src="https://ucarecdn.com/1ce5b127-bdcd-4459-89f9-fdfde13da28d/"
          />
        </div>
        <div className="w-1/2">
          <UploadcareImage
            alt="Invisible icons on the iPad"
            src="https://ucarecdn.com/fdb99690-68b0-47b8-9860-b8ae32ae4794/"
          />
        </div>
      </div>
      <WorkDetails>
        <div className="flex w-1/2 flex-col gap-2">
          <h3>Invisible icons on the iPad</h3>
          <small>
            I&#39;ve created 20 apps. Each imitating
            transparency/absence of the icon itself. But the icons are
            not transparent.
          </small>
          <small>I achieved this in a simple manner:</small>
          <small>
            <ul className="list-disc">
              <li>
                I made screenshot of the iPad screen with and without
                icons
              </li>
              <li>Next I cutted regions containing background</li>
              <li>All this pieces I applied to apps</li>
              <li>
                Finally I&#39;ve compiled all the apps and placed in
                an certain order
              </li>
            </ul>
          </small>
          <time dateTime="2011">2011</time>
        </div>
      </WorkDetails>
    </div>
  </div>
);
