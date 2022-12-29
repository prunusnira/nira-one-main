import { useCallback, useEffect, useRef } from "react";

const useIntersect = () => {
    const ref = useRef(null);

    const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
                console.log(
                    `${(entry.target as HTMLDivElement).textContent} entry`
                );
            }
        });
    };

    const option: IntersectionObserverInit = {
        root: ref.current,
        rootMargin: "0px",
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = initializeObserver();
        const target = document.querySelectorAll(".target");
        target.forEach((x) => observer.observe(x));
    }, []);

    const initializeObserver = useCallback(() => {
        const observer = new IntersectionObserver(callback, option);
        return observer;
    }, [callback, option]);

    return {
        ref,
    };
};

export default useIntersect;
