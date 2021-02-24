import React, { useState, useEffect } from "react";

const useLocalStorage = (key: string): any[] => {
  const [keyLocal, setKey] = useState<string>(key);
  useEffect(() => {}, []);
  const getData = () => {
    const local = localStorage.getItem(keyLocal);
    if (typeof local === "string") {
      return JSON.parse(local);
    } else return [];
  };
  const updateData = (arr: any[]) => {
    localStorage.setItem(keyLocal, JSON.stringify(arr));
  };

  return [getData, updateData];
};

export default useLocalStorage;
