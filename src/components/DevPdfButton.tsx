"use client";

import { useEffect, useState } from "react";

export default function DevPdfButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPdf = async () => {
    if (isGenerating) {
      return;
    }

    const cvElement = document.querySelector(".wrapper") as HTMLElement | null;

    if (!cvElement) {
      return;
    }

    setIsGenerating(true);
    document.body.classList.add("pdf-export");

    try {
      await new Promise((resolve) => setTimeout(resolve, 80));

      const html2pdfModule = await import("html2pdf.js");
      const html2pdf = (html2pdfModule as { default?: any }).default ?? html2pdfModule;

      await html2pdf()
        .set({
          margin: [0, 0, 0, 0],
          filename: "CV-Scarabino.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            width: cvElement.scrollWidth,
            windowWidth: cvElement.scrollWidth,
          },
          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },
          pagebreak: {
            mode: ["css", "legacy"],
          },
        })
        .from(cvElement)
        .save();
    } finally {
      document.body.classList.remove("pdf-export");
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    setIsVisible(params.get("pdfDev") === "1");

    const onKeyDown = (event: KeyboardEvent) => {
      const isShortcut = (event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "p";

      if (!isShortcut) {
        return;
      }

      event.preventDefault();
      void downloadPdf();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (process.env.NODE_ENV !== "development" || !isVisible) {
    return null;
  }

  return (
    <button className="print-button" onClick={() => void downloadPdf()} disabled={isGenerating}>
      {isGenerating ? "Generando PDF..." : "Descargar PDF A4"}
    </button>
  );
}
