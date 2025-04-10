"use client";
import CallList from "@/components/CallList";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col size-full gap-10 text-white ">
      <h1 className="text-3xl font-bold">Previous Meeting</h1>
      <CallList type="ended" />
    </section>
  );
};

export default page;
