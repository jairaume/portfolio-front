const plugin = require('tailwindcss/plugin')

module.exports =
    plugin(function ({addUtilities}) {

            const XS_DEVICE_WIDTH = 576;
            const S_DEVICE_WIDTH = 1024;
            const M_DEVICE_WIDTH = 1280;
            const L_DEVICE_WIDTH = 1920;

            // Device gutter width
            const XS_GUTTER_WIDTH = 60;
            const S_GUTTER_WIDTH = 30;
            const M_GUTTER_WIDTH = 35;
            const L_GUTTER_WIDTH = 35;

            // Device column width
            const XS_COLUMN_WIDTH = 158;
            const S_COLUMN_WIDTH = 30;
            const M_COLUMN_WIDTH = 60;
            const L_COLUMN_WIDTH = 120;

            const XS_CONTENT_MAX_WIDTH = 2 * XS_COLUMN_WIDTH + XS_GUTTER_WIDTH;
            const S_CONTENT_MAX_WIDTH = S_COLUMN_WIDTH * 12 + S_GUTTER_WIDTH * 11;
            const M_CONTENT_MAX_WIDTH = M_COLUMN_WIDTH * 12 + M_GUTTER_WIDTH * 11;
            const L_CONTENT_MAX_WIDTH = L_COLUMN_WIDTH * 12 + L_GUTTER_WIDTH * 11;

            const XS_PADDING = 30;
            const S_PADDING = 15 + 29;
            const M_PADDING = 30;
            const L_PADDING = 90;


            // Construct column and gutter layouts

            const layoutObject = {};

            const layouts = {
                xs: {
                    c: XS_COLUMN_WIDTH,
                    g: XS_GUTTER_WIDTH,
                },
                s: {
                    c: S_COLUMN_WIDTH,
                    g: S_GUTTER_WIDTH,
                },
                m: {
                    c: M_COLUMN_WIDTH,
                    g: M_GUTTER_WIDTH,
                },
                l: {
                    c: L_COLUMN_WIDTH,
                    g: L_GUTTER_WIDTH,
                }
            };

            for (let i = 0; i < 15; i++) {
                for (let j = 0; j < 15; j++) {
                    for (const [key, value] of Object.entries(layouts)) {
                        layoutObject[`.layout-${key}-c-${i}-g-${j}`] = {
                            width: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.max-layout-${key}-c-${i}-g-${j}`] = {
                            maxWidth: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.min-layout-${key}-c-${i}-g-${j}`] = {
                            minWidth: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.p-layout-${key}-c-${i}-g-${j}`] = {
                            padding: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.pl-layout-${key}-c-${i}-g-${j}`] = {
                            paddingLeft: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.pr-layout-${key}-c-${i}-g-${j}`] = {
                            paddingRight: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.pt-layout-${key}-c-${i}-g-${j}`] = {
                            paddingTop: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.pb-layout-${key}-c-${i}-g-${j}`] = {
                            paddingBottom: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.px-layout-${key}-c-${i}-g-${j}`] = {
                            paddingLeft: (value.c * i + value.g * j) + 'px',
                            paddingRight: (value.c * i + value.g * j) + 'px',
                        };

                        layoutObject[`.py-layout-${key}-c-${i}-g-${j}`] = {
                            paddingTop: (value.c * i + value.g * j) + 'px',
                            paddingBottom: (value.c * i + value.g * j) + 'px',
                        };

                        // Margins

                        layoutObject[`.m-layout-${key}-c-${i}-g-${j}`] = {
                            margin: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.ml-layout-${key}-c-${i}-g-${j}`] = {
                            marginLeft: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.mr-layout-${key}-c-${i}-g-${j}`] = {
                            marginRight: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.mt-layout-${key}-c-${i}-g-${j}`] = {
                            marginTop: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.mb-layout-${key}-c-${i}-g-${j}`] = {
                            marginBottom: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.mx-layout-${key}-c-${i}-g-${j}`] = {
                            marginLeft: (value.c * i + value.g * j) + 'px',
                            marginRight: (value.c * i + value.g * j) + 'px',
                        };

                        layoutObject[`.my-layout-${key}-c-${i}-g-${j}`] = {
                            marginTop: (value.c * i + value.g * j) + 'px',
                            marginBottom: (value.c * i + value.g * j) + 'px',
                        };

                        // Gap grid

                        layoutObject[`.gap-layout-${key}-c-${i}-g-${j}`] = {
                            gap: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.gap-x-layout-${key}-c-${i}-g-${j}`] = {
                            columnGap: (value.c * i + value.g * j) + 'px'
                        };

                        layoutObject[`.gap-y-layout-${key}-c-${i}-g-${j}`] = {
                            rowGap: (value.c * i + value.g * j) + 'px'
                        };
                    }
                }
            }


            const newUtilities = {
                // Layout basic
                '.layout-xs': {width: XS_DEVICE_WIDTH + 'px'},
                '.layout-s': {width: S_DEVICE_WIDTH + 'px'},
                '.layout-m': {width: M_DEVICE_WIDTH + 'px'},
                '.layout-l': {width: L_DEVICE_WIDTH + 'px'},

                // Padding layout
                '.p-layout-xs': {padding: XS_PADDING + 'px'},
                '.pl-layout-xs': {paddingLeft: XS_PADDING + 'px'},
                '.pr-layout-xs': {paddingRight: XS_PADDING + 'px'},
                '.pt-layout-xs': {paddingTop: XS_PADDING + 'px'},
                '.pb-layout-xs': {paddingBottom: XS_PADDING + 'px'},
                '.px-layout-xs': {paddingLeft: XS_PADDING + 'px', paddingRight: XS_PADDING + 'px'},
                '.py-layout-xs': {paddingTop: XS_PADDING + 'px', paddingBottom: XS_PADDING + 'px'},

                '.p-layout-s': {padding: S_PADDING + 'px'},
                '.pl-layout-s': {paddingLeft: S_PADDING + 'px'},
                '.pr-layout-s': {paddingRight: S_PADDING + 'px'},
                '.pt-layout-s': {paddingTop: S_PADDING + 'px'},
                '.pb-layout-s': {paddingBottom: S_PADDING + 'px'},
                '.px-layout-s': {paddingLeft: S_PADDING + 'px', paddingRight: S_PADDING + 'px'},
                '.py-layout-s': {paddingTop: S_PADDING + 'px', paddingBottom: S_PADDING + 'px'},

                '.p-layout-m': {padding: M_PADDING + 'px'},
                '.pl-layout-m': {paddingLeft: M_PADDING + 'px'},
                '.pr-layout-m': {paddingRight: M_PADDING + 'px'},
                '.pt-layout-m': {paddingTop: M_PADDING + 'px'},
                '.pb-layout-m': {paddingBottom: M_PADDING + 'px'},
                '.px-layout-m': {paddingLeft: M_PADDING + 'px', paddingRight: M_PADDING + 'px'},
                '.py-layout-m': {paddingTop: M_PADDING + 'px', paddingBottom: M_PADDING + 'px'},

                '.p-layout-l': {padding: L_PADDING + 'px'},
                '.pl-layout-l': {paddingLeft: L_PADDING + 'px'},
                '.pr-layout-l': {paddingRight: L_PADDING + 'px'},
                '.pt-layout-l': {paddingTop: L_PADDING + 'px'},
                '.pb-layout-l': {paddingBottom: L_PADDING + 'px'},
                '.px-layout-l': {paddingLeft: L_PADDING + 'px', paddingRight: L_PADDING + 'px'},
                '.py-layout-l': {paddingTop: L_PADDING + 'px', paddingBottom: L_PADDING + 'px'},

                // Max width layout
                '.max-layout-xs': {maxWidth: XS_CONTENT_MAX_WIDTH + 'px'},
                '.max-layout-s': {maxWidth: S_CONTENT_MAX_WIDTH + 'px'},
                '.max-layout-m': {maxWidth: M_CONTENT_MAX_WIDTH + 'px'},
                '.max-layout-l': {maxWidth: L_CONTENT_MAX_WIDTH + 'px'},

                // Max width layout
                '.min-layout-xs': {minWidth: XS_CONTENT_MAX_WIDTH + 'px'},
                '.min-layout-s': {minWidth: S_CONTENT_MAX_WIDTH + 'px'},
                '.min-layout-m': {minWidth: M_CONTENT_MAX_WIDTH + 'px'},
                '.min-layout-l': {minWidth: L_CONTENT_MAX_WIDTH + 'px'},

                // Layout cols and gutters
                '.layout-xs-c': {width: XS_COLUMN_WIDTH + 'px'},
                '.layout-s-c': {width: S_COLUMN_WIDTH + 'px'},
                '.layout-m-c': {width: M_COLUMN_WIDTH + 'px'},
                '.layout-l-c': {width: L_COLUMN_WIDTH + 'px'},

                '.layout-xs-g': {width: XS_GUTTER_WIDTH + 'px'},
                '.layout-s-g': {width: S_GUTTER_WIDTH + 'px'},
                '.layout-m-g': {width: M_GUTTER_WIDTH + 'px'},
                '.layout-l-g': {width: L_GUTTER_WIDTH + 'px'},

                // max Layout cols and gutters
                '.max-layout-xs-c': {maxWidth: XS_COLUMN_WIDTH + 'px'},
                '.max-layout-s-c': {maxWidth: S_COLUMN_WIDTH + 'px'},
                '.max-layout-m-c': {maxWidth: M_COLUMN_WIDTH + 'px'},
                '.max-layout-l-c': {maxWidth: L_COLUMN_WIDTH + 'px'},

                '.max-layout-xs-g': {maxWidth: XS_GUTTER_WIDTH + 'px'},
                '.max-layout-s-g': {maxWidth: S_GUTTER_WIDTH + 'px'},
                '.max-layout-m-g': {maxWidth: M_GUTTER_WIDTH + 'px'},
                '.max-layout-l-g': {maxWidth: L_GUTTER_WIDTH + 'px'},

                // Layout cols and gutters
                '.gap-layout-xs-c': {gap: XS_COLUMN_WIDTH + 'px'},
                '.gap-layout-s-c': {gap: S_COLUMN_WIDTH + 'px'},
                '.gap-layout-m-c': {gap: M_COLUMN_WIDTH + 'px'},
                '.gap-layout-l-c': {gap: L_COLUMN_WIDTH + 'px'},

                '.gap-layout-xs-g': {gap: XS_GUTTER_WIDTH + 'px'},
                '.gap-layout-s-g': {gap: S_GUTTER_WIDTH + 'px'},
                '.gap-layout-m-g': {gap: M_GUTTER_WIDTH + 'px'},
                '.gap-layout-l-g': {gap: L_GUTTER_WIDTH + 'px'},

                // Layout cols and gutters with max width and width variable

                ...layoutObject
            }

            addUtilities(newUtilities, {variants: ['responsive']});
        }
    )
