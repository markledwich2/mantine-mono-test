import { MantineContext } from '@mantine/core';
import React, { useContext, useEffect } from 'react';

var ThemeTestContext = React.createContext('test');
var ThemeTest = function () {
    var ctx = useContext(MantineContext);
    useEffect(function () {
        console.debug('shared ctx', { version: React.version, ctx: ctx });
    }, [ctx]);
    return React.createElement("div", null,
        "Shared Mantine Context ",
        ctx ? 'Exists' : 'Missing');
};

export { ThemeTest, ThemeTestContext };
//# sourceMappingURL=index.esm.js.map
