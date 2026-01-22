import { useState } from "react";
import { Container, Typography } from "@mui/material";
import UploadCard from "./components/UploadCard";
import PreviewCard from "./components/PreviewCard";
import ResultCard from "./components/ResultCard";

import { extractIDNumbers } from "./components/OCRProcessor";
import { pdfToImage } from "./utils/pdfToImage";

export default function App() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;

    setError("");
    setResult({});
    setLoading(true);

    let imageSrc = "";

    try {
      if (file.type === "application/pdf") {
        imageSrc = await pdfToImage(file);
      } else if (file.type.startsWith("image/")) {
        imageSrc = URL.createObjectURL(file);
      } else {
        throw new Error("Unsupported file type");
      }

      setPreview(imageSrc);

      const data = await extractIDNumbers(imageSrc);

      if (!data.aadhaar && !data.pan) {
        throw new Error(
          "Unable to detect Aadhaar or PAN number. Please upload a clearer image or PDF."
        );
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Aadhaar / PAN Card Reader
      </Typography>

      <UploadCard onFileSelect={handleFile} />
      <PreviewCard preview={preview} />
      <ResultCard
        aadhaar={result.aadhaar}
        pan={result.pan}
        error={error}
        loading={loading}
      />
    </Container>
  );
}
