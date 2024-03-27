"use client";
import YouTube from "react-youtube";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function VideoPlayer({ youtubeId }) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div>
      {error ? (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Terjadi Kesalahan!</AlertTitle>
          <AlertDescription>Maaf, Sepertinya Video tidak dapat diputar karena masalah Sumber video yang mungkin telah dihapus</AlertDescription>
        </Alert>
      ) : (
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          className="w-full"
          onError={handleError}
        />
      )}
    </div>
  );
}
