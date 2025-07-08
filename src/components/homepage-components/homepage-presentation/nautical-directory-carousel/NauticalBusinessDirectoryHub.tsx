import { NauticalBusinessButton } from "./NauticalBusinessButtons";

export const NauticalBusinessDirectoryHub = () => {
  return (
    <div className="pt-18">
      <h1 className="pb-2 ml-30">Biznis prodavci i pravna lica</h1>
      <div className="p-15 bg-[#f5f7f8] shadow-lg rounded-lg">
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          <div className="relative h-30 overflow-hidden rounded-lg md:h-30">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-1.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="/docs/images/carousel/carousel-2.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-3.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-4.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/docs/images/carousel/carousel-5.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <NauticalBusinessButton />
        </div>
      </div>
    </div>
  );
};
