import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollHandler() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Need a slight timeout to ensure page renders before scrolling
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    // Header offset logic
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}
