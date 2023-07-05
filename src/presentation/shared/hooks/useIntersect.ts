import { useCallback, useEffect, useMemo, useRef } from 'react';

type OnIntersectCallBack = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const useIntersect = (
  onIntersect: OnIntersectCallBack,
  options?: IntersectionObserverInit
) => {
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  const ref = useRef<HTMLDivElement>(null);
  const observer = useMemo(() => {
    return new IntersectionObserver(callback, options);
  }, [callback, options]);

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, observer]);

  return ref;
};

export { useIntersect };
