"use client";

import { useEffect } from "react";

/**
 * The standalone "Planes y Tarifas" page has been consolidated into the home
 * page as an in-page section (#planes-y-tarifas). This component redirects
 * any visitor who still has the old URL bookmarked.
 */
export default function PlanesPage() {
  useEffect(() => {
    window.location.replace("/#planes-y-tarifas");
  }, []);

  return null;
}
