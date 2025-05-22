"use client";
import { useState } from "react";
import Image from "next/image";

type UploadedImage = {
  file: File;
  url: string;
  uploading: boolean;
};

export default function Step1() {
  const good_sample = [
    {
      image: "/good_1.png",
      name: "Selfies",
      description: "Upload frontal selfies that taken at eye-level.",
    },
    {
      image: "/good_2.png",
      name: "Variety",
      description: "Upload photos in different outfits.",
    },
    {
      image: "/good_3.png",
      name: "Recency",
      description: "Upload recent photos from last 7 years.",
    },
    {
      image: "/good_4.png",
      name: "Clear",
      description: "Upload photos taken from a good distance.",
    },
  ];
  const bad_sample = [
    {
      image: "/bad_1.png",
      alert: "No",
      name: "Low quality",
      description: "Don't upload blurry, cropped, or dark/bright photos.",
    },
    {
      image: "/bad_2.png",
      alert: "No",
      name: "Revealing Clothes",
      description:
        "Don't upload photos with low necklines, or in skimpy outfit.",
    },
    {
      image: "/bad_3.png",
      alert: "No",
      name: "Accessories",
      description: "Avoid photos with hats, sunglasses, lanyards, etc.",
    },
    {
      image: "/bad_4.png",
      alert: "No",
      name: "Unnatural Angles",
      description: "Avoid photos taken from the side or looking away.",
    },
  ];
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploading, setUploading] = useState<UploadedImage[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newUploads = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
        uploading: true,
      }));
      setUploading((prev) => [...prev, ...newUploads]);

      // Simulate upload
      setTimeout(() => {
        setImages((prev) => [
          ...prev,
          ...newUploads.map((img) => ({ ...img, uploading: false })),
        ]);
        setUploading((prev) => prev.filter((img) => !newUploads.includes(img)));
      }, 2000); // Simulate 2s upload
    }
  };

  const handleDelete = (url: string) => {
    setImages((prev) => prev.filter((img) => img.url !== url));
  };

  return (
    <div className="pl-[120px] py-8 flex justify-between items-start gap-[55px]">
      <div>
        <h1 className="text-lg font-semibold -mt-2 mb-[18px]">Upload Photos</h1>
        <div className="max-w-2xl">
          <div className="border-2 border-dashed border-[#B6B6B6] w-[300px] h-[200px] rounded-[20px] p-8 text-center">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/heic"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer inline-block"
            >
              <div className="space-y-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-gray-600">
                  <span className="font-medium text-primary hover:text-primary/80">
                    Upload Photos
                  </span>{" "}
                  or drag and drop
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, HEIC up to 120MB
                </p>
              </div>
            </label>
          </div>
          {/* Uploading Progress */}
          {uploading.length > 0 && (
            <div className="mt-4 bg-white rounded-lg p-2">
              {uploading.map((img, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b last:border-b-0 py-2"
                >
                  <span className="truncate">{img.file.name}</span>
                  <span className="animate-spin text-orange-500">
                    {/* Simple spinner */}
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 -mt-2 mb-[18px]">
          <h1 className="text-lg font-semibold">Uploaded Photos</h1>
          {images.length > 0 && images.length < 7 ? (
            <p className="flex items-center justify-evenly gap-2.5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 18L0 12.75V5.25L5.25 0H12.75L18 5.25V12.75L12.75 18H5.25ZM6.15 13.25L9 10.4L11.85 13.25L13.25 11.85L10.4 9L13.25 6.15L11.85 4.75L9 7.6L6.15 4.75L4.75 6.15L7.6 9L4.75 11.85L6.15 13.25ZM6.1 16H11.9L16 11.9V6.1L11.9 2H6.1L2 6.1V11.9L6.1 16Z"
                  fill="#FF2424"
                />
              </svg>
              <p className="text-[#FF0000] text-xs">
                (Upload at least 7 photos)
              </p>
            </p>
          ) : images.length >= 7 ? (
            <p className="flex items-center gap-2.5 justify-evenly">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                  fill="#89DB46"
                />
              </svg>
              <p className="text-[#00FF00] text-xs">
                (Upload at least 7 photos)
              </p>
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {images.map((img, idx) => (
            <div key={idx} className="relative group">
              <Image
                height={150}
                width={150}
                src={img.url}
                alt={img.file.name}
                priority
                className="object-cover h-[150px] w-[150px] rounded-[10px]"
              />
              <button
                onClick={() => handleDelete(img.url)}
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow hover:bg-red-100 transition"
                title="Delete"
              >
                {/* Trash icon */}
                <div className="h-[27px] w-[27px] rounded-full bg-white flex justify-center items-center">
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 14C1.8375 14 1.48438 13.8477 1.19063 13.5431C0.896875 13.2384 0.75 12.8722 0.75 12.4444V2.33333H0V0.777778H3.75V0H8.25V0.777778H12V2.33333H11.25V12.4444C11.25 12.8722 11.1031 13.2384 10.8094 13.5431C10.5156 13.8477 10.1625 14 9.75 14H2.25ZM9.75 2.33333H2.25V12.4444H9.75V2.33333ZM3.75 10.8889H5.25V3.88889H3.75V10.8889ZM6.75 10.8889H8.25V3.88889H6.75V10.8889Z"
                      fill="#767676"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-20 w-[345px] right-0 top-10 pr-[18px] -mt-24">
        <div>
          <div className="flex justify-start items-center mb-5 gap-2.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                fill="#89DB46"
              />
            </svg>
            <p className="text-base font-semibold">Photo Requirements</p>
          </div>
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-[27px]">
            {good_sample.map((item, index) => (
              <div
                className="flex flex-col justify-start w-[145px]"
                key={index}
              >
                <Image
                  src={item.image}
                  width={145}
                  height={100}
                  alt="requirements"
                  className="rounded-[10px] mb-1.5"
                />
                <p className="text-xs font-bold leading-4">{item.name}</p>
                <p className="text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center mt-[60px] mb-5 gap-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 18L0 12.75V5.25L5.25 0H12.75L18 5.25V12.75L12.75 18H5.25ZM6.15 13.25L9 10.4L11.85 13.25L13.25 11.85L10.4 9L13.25 6.15L11.85 4.75L9 7.6L6.15 4.75L4.75 6.15L7.6 9L4.75 11.85L6.15 13.25ZM6.1 16H11.9L16 11.9V6.1L11.9 2H6.1L2 6.1V11.9L6.1 16Z"
                fill="#FF2424"
              />
            </svg>

            <p className="text-base font-semibold">Photo Restrictions</p>
          </div>
          <div className="grid grid-cols-2 gap-x-[15px] gap-y-[27px]">
            {bad_sample.map((item, index) => (
              <div
                className="flex flex-col justify-start w-[145px]"
                key={index}
              >
                <Image
                  src={item.image}
                  width={145}
                  height={100}
                  alt="requirements"
                  className="rounded-[10px] mb-1.5"
                />
                <span className="text-xs font-bold leading-4">
                  <span className="text-xs text-[#FF0000]">{item.alert}</span>
                  &nbsp;{item.name}
                </span>
                <p className="text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
