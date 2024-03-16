import { useEffect, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce';

const ITEM_MIN_WIDTH = 250 as const;

export const useSlider = ({ items }: { items: unknown[] }) => {
  const containerElementRef = useRef<HTMLUListElement>(null);
  const [visibleItemCount, setVisibleItemCount] = useState(1);
  const [_slideIndex, setSlideIndex] = useState(0);
  const slideIndex = Math.min(Math.max(0, _slideIndex), items.length - 1);

  const observer = new ResizeObserver(
    throttle(100, (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const containerWidth = entry.contentRect.width;
        const newVisibleItemCount = Math.floor(containerWidth / ITEM_MIN_WIDTH);
        setVisibleItemCount(newVisibleItemCount);
      }
    })
  );

  useEffect(() => {
    const container = containerElementRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  return {
    containerElementRef,
    setSlideIndex,
    slideIndex,
    visibleItemCount,
  };
};
