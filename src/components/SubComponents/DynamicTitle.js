import React, { useEffect, useState } from 'react';

const DynamicTitle = () => {
    const [originalTitle, setOriginalTitle] = useState();
    
    // add as many title you want
    const titles = ["Aww!", "Please come back!"];
    var a = 0;
    const updateTitle = () => {
        document.title = titles[a];
        a = (a===titles.length-1 ? 0 : ++a);
    } 

    var interval;
    const handleTabChange = () => {
        if(interval) clearInterval(interval);

        if (document.hidden) {
            updateTitle();
            interval = setInterval(updateTitle, 1200);
        } else {
            a = 0;
            document.title = originalTitle;
        }
    };
    
    useEffect(() => {
        if (!originalTitle) {
            setOriginalTitle(document.title);
        }

        window.addEventListener('visibilitychange', handleTabChange);

        return () => window.removeEventListener('visibilitychange', handleTabChange);
    }, [originalTitle]);

    return <></>;
}

export default DynamicTitle;