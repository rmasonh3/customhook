/*
Custom Hook --
simple hook to console log variables value whenever updated
Console log invocations need to useEffect hook
Requirements:
1. use useEffect hook
2. Separate file that will be use in app component
 */

import { useEffect } from "react";

function useConsoleLog(varName) {
    useEffect(() => {
        console.log(varName);
    }, [varName]);
}

export default useConsoleLog;