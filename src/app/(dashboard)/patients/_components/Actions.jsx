import Link from "next/link";
import React, { useState } from "react";
import { deletePatientById } from "../../../../services/getAPIs";

export default function Actions({ id, onDeleteSuccess }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm("delete this record?");
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      await deletePatientById(id);

      if (onDeleteSuccess) onDeleteSuccess(id);
    } catch (error) {
      console.error("Deletion failed:", error);
      alert("Could not delete record. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <section className="bg-white p-3 rounded-md shadow-sm">
        <ul className="w-full list-none p-0 m-0">
          <li>
            <Link
              href={`/schedule?id=${id}`}
              className="flex justify-start gap-2 items-center my-2 py-2 px-2 text-blue-400 hover:bg-gray-100 rounded-md"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                  />
                </svg>
              </span>
              <span>View Appointment</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="w-full border-0 bg-transparent flex justify-start gap-2 items-center py-2 my-2 px-2 text-red-400 hover:bg-gray-100 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
              <span>{isDeleting ? "Deleting..." : "Delete"}</span>
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
