const BLUE = '#040b27';
const WHITE = 'white';
const LIGHT_BLUE = '#4789c0';

const settings = {
    font: {
        main: '24px',
        secondary: '16px',
    },
    home: {
        gridAreas: ["'header header'", "'display history'", "'keypad history'"],
        gridRows: '1fr 1fr 7fr',
        gridColumns: '5fr 2fr',
    },
    header: {
        navGap: '16px',
        titleTextShadow: `0 0 10px`,
    },
    display: {
        padding: '10px 20px',
        displayHistoryColor: '#c7b9b9',
    },
    keypad: {
        area: [
            "'bl br remainder divide'",
            "'seven eight nine multiply'",
            "'four five six minus'",
            "'one two three plus'",
            "'zero dot plusmn equal'",
            "'C C C C'",
        ],
        rows: 6,
        columns: 4,
        rowHeight: '70px',
        columnWidth: '1fr',
        padding: '20px',
        buttonSpecialBG: '#f6be5a',
        buttonColor: '#000',
        buttonBorder: ['1px', 'solid', 'black'],
    },
    history: {
        gap: '20px',
        padding: '0 20px 50px 20px',
        title: {
            padding: '30px 30px',
        },
        list: {
            gap: '20px',
        },
        listItem: {
            padding: '5px',
        },
    },
};
const theme = {
    dark: {
        background: {
            primary: BLUE,
            secondary: WHITE,
        },
        color: {
            primary: WHITE,
            secondary: BLUE,
            border: LIGHT_BLUE,
        },
        settings,
    },
    light: {
        background: {
            primary: WHITE,
            secondary: BLUE,
        },
        color: {
            primary: BLUE,
            secondary: WHITE,
            border: LIGHT_BLUE,
        },
        settings,
    },
};

export default theme;
