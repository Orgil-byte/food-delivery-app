"use client";

import { UploadCloud } from "lucide-react";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

type CloudUploadUpdateProps = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  image: string;
};

const preset = "food-images";

export const CloudUploadUpdate = ({
  setImage,
  image,
}: CloudUploadUpdateProps) => {
  const onUploadImg = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;
    if (typeof info === "object" && info.secure_url) {
      setImage(info.secure_url);
    }
  };

  return (
    <div className="flex flex-col gap-2">
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
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="w-full h-20 border border-dashed border-blue-200 bg-[#F8FAFC] rounded-xl flex flex-row items-center justify-center gap-2 cursor-pointer hover:bg-blue-50/50 transition-colors"
          >
            <UploadCloud className="h-5 w-5 text-gray-500 shrink-0" />
            <span className="text-[13px] text-gray-500 font-medium">
              Choose a file or drag & drop it here
            </span>
          </button>
        )}
      </CldUploadWidget>
      {image && (
        <img
          src={image}
          alt="Uploaded food"
          className="rounded-xl w-full max-h-48 object-cover"
        />
      )}
    </div>
  );
};
