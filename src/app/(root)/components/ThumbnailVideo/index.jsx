import Image from "next/image";
import { VideoUrl } from "@/app/(root)/data/data";
import { VideoModal, Bobble } from "..";

const ThumbnailVideo = () => {
  return (
    <div className="relative ">
      <Image
        src="/assets/images/YouTubeThumbnailNew.png"
        alt=""
        height={600}
        width={900}
        priority={true}
        className="rounded-xl "
      />
      <VideoModal videoUrl={VideoUrl} />
      <div className="">
        <Bobble
          color="bg-brand-yellow"
          className="-top-3 lg:-top-8 -right-7 lg:-right-22 -z-10 size-14 lg:size-37.5"
        />
        <Bobble className="bottom-7 -left-6 lg:-left-22 -z-10 size-14 lg:size-37.5" />
        <Bobble
          color="bg-brand-green"
          className="bottom-1/2  -left-7 lg:-left-18 -z-10 size-4 lg:size-10"
        />
      </div>
      <div></div>
    </div>
  );
};

export default ThumbnailVideo;
