"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface GuestPhoto {
  id: number;
  upload_by: string | null;
  guest_image_url: string | null;
}

interface GuestPhotoGalleryProps {
  eventId: number;
  refreshKey: number;
}

export default function GuestPhotoGallery({
  eventId,
  refreshKey,
}: GuestPhotoGalleryProps) {
  const [photos, setPhotos] = useState<GuestPhoto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("wedding_thankyou")
        .select("id, upload_by, guest_image_url")
        .eq("event_id", eventId)
        .not("guest_image_url", "is", null)
        .order("id", { ascending: false });

      if (error) {
        console.error("Error loading guest photos:", error);
        setPhotos([]);
      } else {
        setPhotos(data || []);
      }

      setLoading(false);
    };

    loadPhotos();
  }, [eventId, refreshKey]);

  if (loading) {
    return (
      <section className="bg-[#dcecf2] px-6 py-16 text-center">
        <p className="font-serif text-[#30434b]">
          Loading shared memories...
        </p>
      </section>
    );
  }

  if (photos.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#dcecf2] px-5 py-16">
      <div className="mx-auto w-full max-w-[520px]">

        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d6b56d]" />
            <span className="text-[#d6b56d]">✦</span>
            <span className="h-px w-10 bg-[#d6b56d]" />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#b29452]">
            From Our Guests
          </p>

          <h2 className="mt-3 font-serif text-4xl font-light text-[#30434b]">
            Shared Memories
          </h2>

          <p className="mt-4 font-serif text-base leading-7 text-[#5d6d73]">
            Beautiful moments shared by the people who made our day special.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.guest_image_url || ""}
                  alt={`Photo shared by ${photo.upload_by || "Guest"}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="px-3 py-3 text-center">
                <p className="font-serif text-sm text-[#30434b]">
                  {photo.upload_by || "Guest"}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}