import React from "react";

export default function Loading({
  text,
  textSize,
  textColor,
  width,
  color,
  borderWidth,
}) {
  const animId1 = "l20-1";
  const animId2 = "l20-2";

  return (
    <>
      <style jsx global>{`
        @keyframes ${animId1} {
          0% {
            clip-path: polygon(
              50% 50%,
              0 0,
              50% 0%,
              50% 0%,
              50% 0%,
              50% 0%,
              50% 0%
            );
          }
          12.5% {
            clip-path: polygon(
              50% 50%,
              0 0,
              50% 0%,
              100% 0%,
              100% 0%,
              100% 0%,
              100% 0%
            );
          }
          25% {
            clip-path: polygon(
              50% 50%,
              0 0,
              50% 0%,
              100% 0%,
              100% 100%,
              100% 100%,
              100% 100%
            );
          }
          50% {
            clip-path: polygon(
              50% 50%,
              0 0,
              50% 0%,
              100% 0%,
              100% 100%,
              50% 100%,
              0% 100%
            );
          }
          62.5% {
            clip-path: polygon(
              50% 50%,
              100% 0,
              100% 0%,
              100% 0%,
              100% 100%,
              50% 100%,
              0% 100%
            );
          }
          75% {
            clip-path: polygon(
              50% 50%,
              100% 100%,
              100% 100%,
              100% 100%,
              100% 100%,
              50% 100%,
              0% 100%
            );
          }
          100% {
            clip-path: polygon(
              50% 50%,
              50% 100%,
              50% 100%,
              50% 100%,
              50% 100%,
              50% 100%,
              0% 100%
            );
          }
        }
        @keyframes ${animId2} {
          0% {
            transform: scaleY(1) rotate(0deg);
          }
          49.99% {
            transform: scaleY(1) rotate(135deg);
          }
          50% {
            transform: scaleY(-1) rotate(0deg);
          }
          100% {
            transform: scaleY(-1) rotate(-135deg);
          }
        }
      `}</style>

      <div className="m-0 inline-flex justify-center items-center gap-3">
        <div
          className="rounded-full aspect-square shrink-0"
          style={{
            width: width,
            border: `${borderWidth} solid ${color}`,
            animation: `${animId1} 0.8s infinite linear alternate, ${animId2} 1.6s infinite linear`,
          }}
        />
        {text && (
          <span
            className={`${textColor} ${textSize} select-none`}
            style={{ lineHeight: width }} // Forces line-height to match the spinner height
          >
            {text}
          </span>
        )}
      </div>
    </>
  );
}
