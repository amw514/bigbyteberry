"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function CalendlyEmbed() {
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <InlineWidget
      
        url="https://calendly.com/bigbyteberry/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=9a58f6"
        styles={{
          height: "700px",
          minWidth: "320px",
          backgroundColor: "#1a1a1a",
          colorScheme: "white"
        }}
      />
    </div>
  );
}
