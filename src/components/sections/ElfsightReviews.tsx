"use client";

import Script from "next/script";

export default function ElfsightReviews() {
  return (
    <div className="mt-12 px-5 sm:px-0">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-17926366-33bb-411a-97c6-766971bf73e3"
        data-elfsight-app-lazy
      />
    </div>
  );
}
