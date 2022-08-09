import { LOGO_MAP } from "./images";

export const TEAM_CLASSES = {
    WOMEN1: 'Frauen 1 - Landesliga Mitte',
    WOMEN2: 'Frauen 2 - A Klasse',
    WJA1: 'WJA - BOL',
    WJB1: 'WJB - BOL',
    WJC1: 'WJC - BOL',
    WJD1: 'WJD - BOL',
    WJE1: 'WJE - A Klasse',
    MEN2: 'Männer 2 - 3.Liga',
    MEN3: 'Männer 3 - Landesliga Mitte',
    MEN4: 'Männer 4 - Bezirk C',
    MJA1: 'MJA - JBLH',
    MJB1: 'MJB I - Oberliga',
    MJB2: 'MJB II - Bezirksliga',
    MJC1: 'MJC - Oberliga',
    MJD1: 'MJD - Bezirksoberliga',
};

export const LOCATIONS = [
    'Sporthalle Dutenhofen',
    'Sporthalle Münchholzhausen',
];

export const TEAM_LOGO_MAP = {
    [ TEAM_CLASSES.WOMEN1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WOMEN2 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WOMEN2 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WJA1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WJB1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WJC1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WJD1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.WJE1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MEN2 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MEN4 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MJB1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MJB2 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MJC1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MJD1 ]: LOGO_MAP.HSG_DEFAULT,
    [ TEAM_CLASSES.MEN3 ]: LOGO_MAP.HSG_THREE,
    [ TEAM_CLASSES.MJA1 ]: LOGO_MAP.MHY
};

export const LOGO_CONFIGURATION = {
    [ LOGO_MAP.HSG_DEFAULT ]: [
        TEAM_CLASSES.WOMEN1,
        TEAM_CLASSES.WOMEN2,
        TEAM_CLASSES.WOMEN2,
        TEAM_CLASSES.WJA1,
        TEAM_CLASSES.WJB1,
        TEAM_CLASSES.WJC1,
        TEAM_CLASSES.WJD1,
        TEAM_CLASSES.WJE1,
        TEAM_CLASSES.MEN2,
        TEAM_CLASSES.MEN4,
        TEAM_CLASSES.MJB1,
        TEAM_CLASSES.MJB2,
        TEAM_CLASSES.MJC1,
        TEAM_CLASSES.MJD1
    ],

    [ LOGO_MAP.HSG_THREE ]: [
        TEAM_CLASSES.MEN3
    ],

    [ LOGO_MAP.MHY ]: [
        TEAM_CLASSES.MJA1
    ]
};