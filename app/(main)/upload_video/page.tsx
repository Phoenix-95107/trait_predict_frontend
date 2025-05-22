"use client";
import { useState } from "react";

export default function UploadVideo() {
  const [video, setVideo] = useState<{ file: File; url: string } | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploading(true);
      setTimeout(() => {
        setVideo({ file, url: URL.createObjectURL(file) });
        setUploading(false);
      }, 2000);
    }
  };

  const handleDelete = () => {
    if (video) {
      URL.revokeObjectURL(video.url);
    }
    setVideo(null);
  };

  return (
    <div className="pl-[120px] py-8 flex justify-start items-start gap-[55px]">
      <div>
        <h1 className="text-lg font-semibold -mt-2 mb-[18px]">Upload Video</h1>
        <div className="max-w-2xl">
          <div className="border-2 border-dashed border-[#B6B6B6] w-[300px] h-[200px] rounded-[20px] p-8 text-center flex flex-col justify-center items-center">
            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
              onChange={handleVideoChange}
              className="hidden"
              id="video-upload"
            />
            {!video && !uploading && (
              <label
                htmlFor="video-upload"
                className="cursor-pointer inline-block"
              >
                <div className="space-y-4 flex flex-col items-center">
                  <div className="bg-gradient-to-l from-primary to-secondary rounded-[16px] px-8 py-4 font-semibold text-lg w-[180px] mx-auto flex items-center justify-center">
                    Upload video
                  </div>
                  <p className="text-xs text-black mt-2">
                    make sure max video length is 20 seconds
                  </p>
                </div>
              </label>
            )}

            {uploading && (
              <div className="flex flex-col items-center">
                <span className="animate-spin text-orange-500">
                  <svg width="20" height="20" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeDasharray="31.4 31.4"
                    />
                  </svg>
                </span>
                <span className="mt-2 text-orange-500">Uploading...</span>
              </div>
            )}

            {video && !uploading && (
              <div className="relative w-[300px] h-[200px] flex flex-col items-center justify-center">
                <video
                  src={video.url}
                  controls
                  className="rounded-[10px] w-[300px] h-[200px] object-cover"
                />
                <button
                  onClick={handleDelete}
                  className="absolute top-2 right-2 h-6 w-6 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition text-xs"
                  title="Delete"
                >
                  X
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="font-bold text-lg mb-4">
          For the most accurate 20-second video scan, please:
        </h2>
        <ul className="list-disc pl-5 space-y-3 text-base mt-12">
          <li>
            <span role="img" aria-label="camera">
              📷
            </span>{" "}
            Record in bright, even lighting (no harsh shadows or color filters).
          </li>
          <li>
            <span role="img" aria-label="eyes">
              👁️
            </span>{" "}
            Keep your face centered and fully visible—remove hats or large
            glasses.
          </li>
          <li>
            <span role="img" aria-label="pencil">
              ✏️
            </span>{" "}
            Frame from mid-chest to just above your head; hold the phone at eye
            level.
          </li>
          <li>
            <span role="img" aria-label="microphone">
              🎤
            </span>{" "}
            Speak one neutral sentence (e.g., &quot;Hello Faraseh, I&apos;m
            ready for my scan&quot;) to capture natural lip movement.
          </li>
          <li>
            <span role="img" aria-label="smile">
              😊
            </span>{" "}
            Show at least three subtle expressions—neutral ➜ slight smile ➜
            relaxed again.
          </li>
          <li>
            <span role="img" aria-label="person">
              🕹️
            </span>{" "}
            Stay still and silent for the final 3 seconds so micro-expressions
            are clear.
          </li>
          <li>
            <span role="img" aria-label="no entry">
              🚫
            </span>{" "}
            Make sure only one face is in the frame and avoid background
            distractions.
          </li>
          <li>
            <span role="img" aria-label="camera steady">
              🌀
            </span>{" "}
            Hold the camera steady (no filters, AR masks, or beauty modes).
          </li>
          <li>
            <span role="img" aria-label="timer">
              ⏱️
            </span>{" "}
            Keep the clip between 12–17 seconds; the system trims any extra.
          </li>
          <li>
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Review once to ensure your face is sharp, then upload—Farasah does
            the rest!
          </li>
        </ul>
      </div>
    </div>
  );
}
