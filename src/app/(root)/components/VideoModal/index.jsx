"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaCirclePlay } from "react-icons/fa6";

function VideoModal({ videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenChange = (open) => {
    if (!open) {
      setIsPlaying(false); // Stop playback BEFORE unmounting
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bg-light bg-bg-dark">
          <FaCirclePlay className="text-text-lightd text-3xl md:text-4xl" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-200 p-0 border-none bg-black">
        <DialogHeader className="sr-only">
          <DialogTitle>Video Player</DialogTitle>
        </DialogHeader>

        <div className="aspect-video w-full">
          <ReactPlayer
            src={videoUrl}
            width="100%"
            height="100%"
            playing={isPlaying} // Controlled by state
            controls={true}
            loop={true}
            preload
            onReady={() => setIsPlaying(true)} // Only play once fully ready
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default VideoModal;
