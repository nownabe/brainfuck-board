interface RGB {
    r: number;
    g: number;
    b: number;
    [key: string]: number;
}
interface HSL {
    h: number;
    s: number;
    l: number;
}
type Color = string;
type RGBA = string;
interface ColorHash {
    r: string;
    g: string;
    b: string;
    [key: string]: string;
}

export const color2rgb = (color: Color): RGB => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return {r, g, b};
};

export const rgb2color = (rgb: RGB): Color => {
    const color: ColorHash = {
        b: rgb.b.toString(16),
        g: rgb.g.toString(16),
        r: rgb.r.toString(16),
    };
    Object.keys(color).forEach((k) => {
        if (color[k].length < 2) {
            color[k] = "0" + color[k];
        }
    });

    return "#" + color.r + color.g + color.b;
};

export const color2hsl = (color: Color): HSL => {
    const rgb = color2rgb(color);
    return rgb2hsl(rgb);
};

export const hsl2color = (hsl: HSL): Color => {
    const rgb = hsl2rgb(hsl);
    return rgb2color(rgb);
};

export const rgb2hsl = (rgb: RGB): HSL => {
    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);

    let h: number;
    if (rgb.r === rgb.g && rgb.g === rgb.b) {
        h = 0;
    } else if (rgb.r >= rgb.g && rgb.r >= rgb.b) {
        h = 60 * ((rgb.g - rgb.b) / (max - min));
    } else if (rgb.g >= rgb.r && rgb.g >= rgb.b) {
        h = 60 * ((rgb.b - rgb.r) / (max - min)) + 120;
    } else {
        h = 60 * ((rgb.r - rgb.g) / (max - min)) + 240;
    }
    if (h < 0) { h = h + 360; }
    h = Math.floor(h);

    let s: number;
    if ((max + min) / 2 < 128) {
        s = (max - min) / (max + min);
    } else {
        s = (max - min) / (510 - max - min);
    }
    s = Math.round(s * 100);

    const l = Math.floor(((max + min) / 2) / 255 * 100);

    return {h, s, l};
};

export const hsl2rgb = (hsl: HSL): RGB => {
    let max: number;
    let min: number;

    if (hsl.l < 50) {
        max = 2.55 * (hsl.l + hsl.l * (hsl.s / 100));
        min = 2.55 * (hsl.l - hsl.l * (hsl.s / 100));
    } else {
        max = 2.55 * (hsl.l + (100 - hsl.l) * (hsl.s / 100));
        min = 2.55 * (hsl.l - (100 - hsl.l) * (hsl.s / 100));
    }

    let r: number;
    let g: number;
    let b: number;

    if (hsl.h < 60) {
        r = max;
        g = (hsl.h / 60) * (max - min) + min;
        b = min;
    } else if (hsl.h < 120) {
        r = ((120 - hsl.h) / 60) * (max - min) + min;
        g = max;
        b = min;
    } else if (hsl.h < 180) {
        r = min;
        g = max;
        b = ((hsl.h - 120) / 60) * (max - min) + min;
    } else if (hsl.h < 240) {
        r = min;
        g = ((240 - hsl.h) / 60) * (max - min) + min;
        b = max;
    } else if (hsl.h < 300) {
        r = ((hsl.h - 240) / 60) * (max - min) + min;
        g = min;
        b = max;
    } else {
        r = max;
        g = min;
        b = ((360 - hsl.h) / 60) * (max - min) + min;
    }

    return {r: Math.round(r), g: Math.round(g), b: Math.round(b)};
};

export const darken = (color: string, ratio: number): string => {
    const hsl = color2hsl(color);
    hsl.l -= hsl.l * ratio / 100;
    return hsl2color(hsl);
};

export const color2rgba = (color: Color, alpha: number): RGBA => {
    const rgb = color2rgb(color);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

export const colorLuminance = (color: Color): number => {
    const rgb = color2rgb(color);

    Object.keys(rgb).forEach((key) => {
        let value = rgb[key] / 255;
        if (value < 0.03928) {
            value = value / 12.92;
        } else {
            value = (value + 0.055) / 1.055;
            value = Math.pow(value, 2);
        }
        rgb[key] = value;
    });

    return rgb.r * 0.2126 + rgb.g * 0.7152 + rgb.b * 0.0722;
};

export const findColorInvert = (color: Color): Color => {
    if (colorLuminance(color) > 0.55) {
        return "rgba(0, 0, 0, 0.7)";
    } else {
        return "#fff";
    }
};
