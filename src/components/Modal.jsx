/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Portal from "../Portal";

export default function Modal({
  show = false,
  size = "xs",
  onClose,
  children,
}) {
  // Controlling the scroll behavior of the body element
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  // Dynamically size set
  let sizeStyle;
  if (size === "xs") {
    sizeStyle = "max-w-[420px]";
  } else if (size === "sm") {
    sizeStyle = "sm:max-w-[600px]";
  } else if (size === "md") {
    sizeStyle = "md:max-w-[768px]";
  } else if (size === "lg") {
    sizeStyle = "lg:max-w-[984px]";
  }

  if (!show) {
    return null;
  }

  return (
    <Portal>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 max-h-[90vh] overflow-auto ${sizeStyle}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="p-5 shadow-md bg-gray-400 text-white rounded-lg overflow-hidden">
            {children}
          </div>

          <button
            type="button"
            className="text-white absolute top-0 right-4 bg-black  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
          >
            Close
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
    </Portal>
  );
}
