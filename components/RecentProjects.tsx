"use client";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    // Toggle the expanded description based on project id
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="py-20" id="re">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.lang}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-100"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Description with Toggle */}
              <p
                className={`lg:text-xl lg:font-normal font-light text-sm ${
                  expandedId === item.id ? "" : "line-clamp-2"
                }`}
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Toggle arrow to expand description */}
                <button
                  onClick={() => handleToggle(item.id)}
                  className="flex items-center text-purple-600"
                >
                  {expandedId === item.id ? (
                    <FaArrowUp className="ms-3" color="#CBACF9" />
                  ) : (
                    <FaArrowDown className="ms-3" color="#CBACF9" />
                  )}
                  <p className="ml-2">
                    {expandedId === item.id ? "Show Less" : "Read More"}
                  </p>
                </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
