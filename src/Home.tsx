import React from "react";
import Header from "./components/Header";
import PageLayout from "./components/PageLayout";

export default function Home() {
  return (
    <PageLayout sx={{ width: "100%", height: "100%" }}>
      <Header
        title="BURNT RIVER"
        subtitle="ONTARIO"
        items={[
          {
            text: "About Us",
            to: "/about",
            isSelected: window.location.pathname.includes("/about"),
          },
          {
            text: "Gallery",
            to: "/gallery",
            isSelected: window.location.pathname.includes("/gallery"),
          },
        ]}
      />
    </PageLayout>
  );
}
