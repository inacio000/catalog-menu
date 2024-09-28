"use client";

import { useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export const useMobileMenu = () => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleBurgerClick = () => {
    if (isMobile) {
      setIsMobileHeaderOpen((prev) => !prev);
    }
  };

  return {
    isMobileHeaderOpen,
    setIsMobileHeaderOpen,
    isMobile,
    handleBurgerClick,
  };
};
