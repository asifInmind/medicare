"use client"; // Required if this is where usePathname is called

import React from "react";
import Link from "next/link";

export default function Path({ path }) {
  if (!path) return null;

  const segments = path.split("/").filter(Boolean);

  return (
    <div className="h-14 w-full flex justify-start gap-2 items-center text-[17px] text-[#1D1D1D] font-medium capitalize">
      <Link href="/" className="hover:text-blue-600 transition-colors">
        Home
      </Link>

      {segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;

        return (
          <React.Fragment key={url}>
            <span className="text-gray-400"> &gt; </span>
            {isLast ? (
              <span className="text-gray-600">{segment.replace("-", " ")}</span>
            ) : (
              <Link
                href={url}
                className="hover:text-blue-600 transition-colors"
              >
                {segment.replace("-", " ")}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
