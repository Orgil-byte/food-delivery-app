"use client";

import { UploadCloud } from "lucide-react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";

type CloudUploadUpdateProps = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
  defaultImage?: string;
};

const preset = "food-images";

export const CloudUploadUpdate = ({
  setImage,
  image,
  defaultImage,
}: CloudUploadUpdateProps) => {
  const [preview, setPreview] = useState(defaultImage || "");

  const onUploadImg = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;

    if (typeof info === "object" && info.secure_url) {
      setImage(info.secure_url);
      setPreview(info.secure_url);
    }
  };

  console.log(image);

  return (
    <div className="flex flex-col gap-1.5 relative max-h-57">
      <label className="text-[13px] font-medium text-gray-700">
        Food image
      </label>
      <CldUploadWidget
        uploadPreset={preset}
        onSuccess={onUploadImg}
        onOpen={() => {
          document.body.style.pointerEvents = "auto";
        }}
      >
        {({ open }) => {
          return (
            <button
              type="button"
              onClick={() => open()}
              className="w-full h-50 z-100  border border-dashed border-blue-200 bg-[#F8FAFC] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-50/50 transition-colors"
            >
              <span className="z-100 text-[13px] text-gray-500 font-medium absolute bottom-[30%] left-[25%]">
                Choose a file or drag & drop it here
              </span>
              <UploadCloud className="h-5 w-5 text-gray-500 absolute bottom-[40%] left-[48%]" />
            </button>
          );
        }}
      </CldUploadWidget>
      {preview && (
        <img
          src={preview}
          alt="Uploaded food"
          className="rounded-xl w-full max-h-55 object-cover"
        />
      )}
    </div>
  );
};
