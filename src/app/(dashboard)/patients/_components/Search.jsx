import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getPatientsBySearch } from "../../../../services/getAPIs";

export default function Search({ onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      if (onSearchResults) onSearchResults([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const results = await getPatientsBySearch(searchTerm);
        if (onSearchResults) onSearchResults(results);
      } catch (error) {
        console.error("Error during search:", error);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearchResults]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15 }}
        className="h-auto py-5 md:h-14 w-full border border-gray-200 bg-white z-50 flex-col items-start md:flex-row gap-4 flex md:justify-between rounded-[5px] shadow my-2 md:items-center"
      >
        <div className="w-full">
          <input
            type="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search here..."
            className="py-3.5 px-3 w-full bg-white outline-none text-[15px]"
          />
        </div>
      </motion.div>
    </>
  );
}
