import { generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React from "react";

export default function CustomCard({ car }: any) {
  return (
    <div className="card cursor-pointer">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <svg
              stroke="#ffffff"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="50px"
              width="50px"
              fill="#ffffff"
            ></svg>
            <Image
              src={generateCarImageUrl(car, "10")}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
            <strong className="mt-10 text-xl">Hover Me</strong>
          </div>
        </div>
        <div className="front">
          {/* <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <small className="badge">Pasta</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Spaguetti Bolognese</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="start"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
            </div>
          </div> */}
          <div className="front-content bg-slate-600 text-wrap ">
            <p>
              "Because the API becomes limited, only a single car appears in the
              response, Thanks for your patience"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
