import React from "react";
import { P } from "../util/typography";
import { RetroBox, RetroButton } from "../util/styles";

const Landing = props => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-row bg-black px-6">
        <div className="hover:bg-gray-500 cursor-pointer px-4">
          <P white>Home</P>
        </div>
        <div className="hover:bg-gray-500 cursor-pointer px-4">
          <P white>Get Started</P>
        </div>
        <div className="hover:bg-gray-500 cursor-pointer px-4">
          <P white>Scaffolding</P>
        </div>
        <div className="hover:bg-gray-500 cursor-pointer px-4">
          <P white>Base CSS</P>
        </div>
      </div>

      <div className="flex flex-1 flex-row px-4 border-2 m-4">
        <P white>
          Overview of the project, its contents, and how to ger Started with a
          simple template
        </P>
      </div>

      <div className="flex flex-1 flex-row px-4">
        <div className="w-1/4">
          <RetroBox>
            <div className="flex flex-1 flex-row hover:bg-blue-400 hover:text-white cursor-pointer px-4">
              Download
            </div>
            <div className="flex flex-1 flex-row hover:bg-blue-400 hover:text-white cursor-pointer px-4">
              File Structure
            </div>
            <div className="flex flex-1 flex-row hover:bg-blue-400 hover:text-white cursor-pointer px-4">
              Whit's included
            </div>
            <div className="flex flex-1 flex-row hover:bg-blue-400 hover:text-white cursor-pointer px-4">
              HTML Template
            </div>
          </RetroBox>
        </div>
        <div className="flex flex-1 flex-col mx-6 my-6">
          <div className="w-full px-6 py-4" style={{ background: "#00AAAA" }}>
            <P>1 Download</P>
          </div>
          <div className="w-full px-6 py-4 border-2 my-4">
            <P white>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </P>
          </div>
          <div className="flex flex-1 justify-between">
            <div className="p-5 flex flex-col">
              <P white>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </P>
              <RetroButton width={250}>{`  Download Bootstrap   `}</RetroButton>
            </div>
            <div className="p-5">
              <P white>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </P>
              <RetroButton width={250}>{`  Download Bootstrap   `}</RetroButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
