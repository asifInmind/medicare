import React from "react";

export default function StatusModal({
  isOpen = false,
  type = "success",
  title = "",
  message = "",
  subMessage = "",
  onClose = () => {},
}) {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  const displayTitle = title || (isSuccess ? "SUCCESS" : "ERROR!");
  const displayMessage =
    message ||
    (isSuccess
      ? "Thank you for your request. We are working hard to find the best service and deals for you."
      : "Thank you for your request. We are unable to continue the process.");
  const displaySubMessage =
    subMessage ||
    (isSuccess
      ? "Shortly you will find a confirmation in your email."
      : "Please try again to complete the request.");
  const buttonText = isSuccess ? "Continue" : "Try Again";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-sm p-8 text-center bg-[#f8f8f8] rounded-3xl shadow-xl border border-gray-100 transition-all transform scale-100">
        <div className="flex justify-center mb-4">
          {isSuccess ? (
            <svg
              className="w-16 h-16 text-[#22c55e]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-16 h-16 text-[#ef4444]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>

        <h3
          className={`text-base font-bold tracking-wider mb-4 uppercase ${isSuccess ? "text-[#15803d]" : "text-[#dc2626]"}`}
        >
          {displayTitle}
        </h3>

        <div className="space-y-1 mb-6 text-sm text-gray-600 px-2 leading-relaxed">
          <p className="font-medium text-gray-700">{displayMessage}</p>
          <p className="text-gray-400 text-xs">{displaySubMessage}</p>
        </div>

        <button
          onClick={onClose}
          className={`w-full py-2.5 px-6 rounded-lg font-medium text-white transition-colors duration-200 outline-none ${
            isSuccess
              ? "bg-[#22c55e] hover:bg-[#16a34a]"
              : "bg-[#ef4444] hover:bg-[#dc2626]"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
