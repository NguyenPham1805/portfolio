import { FC, useCallback, useEffect, useState } from "react";
import CarouselIndicator from "./CarouselIndicator";

interface FadeCarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
}

const FadeCarousel: FC<FadeCarouselProps> = ({ children, autoPlay = true }) => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = useCallback(
    (i: number) => {
      if (i > children.length - 1) setIndex(0);
      else if (i < 0) setIndex(children.length - 1);
      else setIndex(i);
    },
    [children.length]
  );

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      handleChangeIndex(index + 1);
    }, 5000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {children.map((child, i) => (
        <div
          className={
            "flex absolute justify-center text-3xl items-center inset-0 transition-all duration-300 " +
            (i === index ? "opacity-100 z-10" : "opacity-0")
          }
          key={i}
        >
          {child}
        </div>
      ))}

      <CarouselIndicator
        currentIndex={index}
        handleChangeIndex={handleChangeIndex}
        items={children}
      />
    </div>
  );
};

export default FadeCarousel;
