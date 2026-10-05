"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface PhotoUploadProps {
  eventId: number;
  onUploadSuccess: () => void;
}

export default function PhotoUpload({
  eventId,
  onUploadSuccess,
}: PhotoUploadProps) {
  const [guestName, setGuestName] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");
    setSuccess("");

    const files = Array.from(e.target.files || []);

    if (files.length > 4) {
      setError("You can upload a maximum of 4 photos.");
      return;
    }

    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    setError("");
    setSuccess("");

    if (!guestName.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (selectedFiles.length === 0) {
      setError("Please select at least one photo.");
      return;
    }

    setUploading(true);

    try {
      for (const file of selectedFiles) {
        const fileExtension =
          file.name.split(".").pop() || "jpg";

        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${fileExtension}`;

        const filePath = `${eventId}/${fileName}`;

        // Upload image to Supabase Storage
        const { error: uploadError } = await supabase.storage
          .from("wedding-thankyou")
          .upload(filePath, file);

        if (uploadError) {
          throw uploadError;
        }

        // Get public URL
        const { data: publicUrlData } = supabase.storage
          .from("wedding-thankyou")
          .getPublicUrl(filePath);

        const imageUrl = publicUrlData.publicUrl;

        // Save image information to database
        const { error: insertError } = await supabase
          .from("wedding_thankyou")
          .insert({
            event_id: eventId,
            upload_by: guestName.trim(),
            guest_image_url: imageUrl,
          });

        if (insertError) {
          throw insertError;
        }
      }

      // Tell GuestPhotoGallery to refresh
      onUploadSuccess();

      setSelectedFiles([]);
      setGuestName("");

      setSuccess(
        "Your photos have been shared successfully! ❤️"
      );

    } catch (err) {
      console.error("Photo upload error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while uploading your photos."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="bg-[#dcecf2] px-5 py-16">
      <div className="mx-auto w-full max-w-[520px]">

        {/* Heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6b56d]" />
            <span className="text-[#d6b56d]">✦</span>
            <span className="h-px w-10 bg-[#d6b56d]" />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#b29452]">
            Share Your Moments
          </p>

          <h2 className="mt-3 font-serif text-4xl font-light text-[#30434b]">
            Add Your Photos
          </h2>

          <p className="mx-auto mt-4 max-w-md font-serif text-base leading-7 text-[#5d6d73]">
            Share up to 4 beautiful moments from our special day.
          </p>
        </div>

        {/* Upload Card */}
        <div className="mt-8 rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-sm">

          {/* Guest Name */}
          <label className="block">
            <span className="font-serif text-sm text-[#30434b]">
              Your Name
            </span>

            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter your name"
              className="mt-2 w-full rounded-xl border border-[#d6b56d]/40 bg-[#fdfcf8] px-4 py-3 text-sm text-[#30434b] outline-none transition focus:border-[#d6b56d]"
            />
          </label>

          {/* File Input */}
          <label className="mt-5 block">
            <span className="font-serif text-sm text-[#30434b]">
              Select Photos
            </span>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="mt-2 block w-full cursor-pointer rounded-xl border border-[#d6b56d]/40 bg-[#fdfcf8] p-3 text-sm text-[#30434b]"
            />

            <span className="mt-2 block text-xs text-[#7a888d]">
              Maximum 4 photos
            </span>
          </label>

          {/* Selected Photos Preview */}
          {selectedFiles.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3">
              {selectedFiles.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="overflow-hidden rounded-xl border border-[#d6b56d]/30 bg-[#fdfcf8]"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Selected photo ${index + 1}`}
                    className="aspect-square w-full object-cover"
                  />

                  <p className="truncate px-2 py-2 text-xs text-[#5d6d73]">
                    {file.name}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-center text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-center text-sm text-green-700">
              {success}
            </div>
          )}

          {/* Upload Button */}
          <button
            type="button"
            onClick={handleUpload}
            disabled={uploading}
            className="mt-6 w-full rounded-full bg-[#30434b] px-6 py-3.5 font-serif text-sm tracking-wide text-white transition hover:bg-[#405861] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {uploading ? "Uploading..." : "Share My Photos ♡"}
          </button>

        </div>
      </div>
    </section>
  );
}