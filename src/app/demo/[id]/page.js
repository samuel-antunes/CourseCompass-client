"use client";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [id, setID] = useState(params.id);
  useEffect(() => {
    const fetchID = async () => {
      const response = await fetch("/api/id");
      const data = await response.json();

      setID(data.id);
    };
    fetchID();
  }, []);
  return <div>{id}</div>;
};

export default Page;
