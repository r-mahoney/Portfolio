import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: `'Raleway', sans-serif`,
    },
    styles: {
        global: () => ({
            body: {
                bg: "rgb(243,243,243)",
            },
        }),
    },
});
