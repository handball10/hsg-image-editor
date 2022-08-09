const publicPathFunctionFactory = assetType => fileName => `/assets/${assetType}/${fileName}`;

const backgroundPathFactory = publicPathFunctionFactory('backgrounds');
const logoPathFactory = publicPathFunctionFactory('logos');
const sponsorPathFactory = publicPathFunctionFactory('sponsors');
export const templatePathFactory = publicPathFunctionFactory('templates');

export const BACKGROUNDS = [
    backgroundPathFactory('background-1.jpg'),
    backgroundPathFactory('background-2.jpg'),
    backgroundPathFactory('background-3.jpg'),
    backgroundPathFactory('app-background.png'),
];

export const LOGOS = [
    logoPathFactory('hsg-logo.svg'),
    logoPathFactory('mittelhessen-youngsters.svg'),
    logoPathFactory('hsg-dm-iii.svg'),
];

export const LOGO_MAP = {
    HSG_DEFAULT: LOGOS[0],
    MHY: LOGOS[1],
    HSG_THREE: LOGOS[2]
};

export const SPONSORS = [
    {
        label: 'Auto Weller',
        logo: sponsorPathFactory('auto-weller.svg')
    }
];