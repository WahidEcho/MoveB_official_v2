"use client";
import { useEffect } from "react";

export default function GlobalErrorHandler() {
  useEffect(() => {
    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason);
      
      // Prevent default browser error behavior
      event.preventDefault();
      
      // Log to error tracking service if available
      if (typeof window !== "undefined" && window.reportError) {
        window.reportError(new Error(`Unhandled Promise Rejection: ${event.reason}`));
      }
    };

    // Handle general errors
    const handleError = (event: ErrorEvent) => {
      console.error("Global error:", event.error);
      
      // Log to error tracking service if available
      if (typeof window !== "undefined" && window.reportError) {
        window.reportError(event.error);
      }
    };

    // Add event listeners
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    // Cleanup
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null; // This component doesn't render anything
}

