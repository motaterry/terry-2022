module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/color-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Color manipulation utilities
 * Ported from color-token-generator reference
 */ __turbopack_context__.s([
    "formatHsl",
    ()=>formatHsl,
    "generateNeutrals",
    ()=>generateNeutrals,
    "generateShades",
    ()=>generateShades,
    "generateTints",
    ()=>generateTints,
    "getComplementaryColor",
    ()=>getComplementaryColor,
    "hexToHsl",
    ()=>hexToHsl,
    "hexToRgb",
    ()=>hexToRgb,
    "hslToHex",
    ()=>hslToHex,
    "mixColors",
    ()=>mixColors,
    "rgbToHex",
    ()=>rgbToHex
]);
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h;
    let s;
    const l = (max + min) / 2;
    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                break;
            case g:
                h = ((b - r) / d + 2) / 6;
                break;
            case b:
                h = ((r - g) / d + 4) / 6;
                break;
            default:
                h = 0;
        }
    }
    return {
        h: h * 360,
        s: s * 100,
        l: l * 100
    };
}
function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n)=>{
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color);
    };
    return rgbToHex(f(0), f(8), f(4));
}
function mixColors(color1, color2, weight) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const p = weight / 100;
    const r = Math.round(c1.r * (1 - p) + c2.r * p);
    const g = Math.round(c1.g * (1 - p) + c2.g * p);
    const b = Math.round(c1.b * (1 - p) + c2.b * p);
    return rgbToHex(r, g, b);
}
function generateTints(baseColor, percentages) {
    return percentages.map((percent)=>mixColors(baseColor, "#FFFFFF", percent));
}
function generateShades(baseColor, percentages) {
    return percentages.map((percent)=>mixColors(baseColor, "#000000", percent));
}
function generateNeutrals(baseColor, percentages, mixColor) {
    const hsl = hexToHsl(baseColor);
    const neutralBase = hslToHex(hsl.h, 5, hsl.l) // Same hue, 5% saturation
    ;
    return percentages.map((percent)=>mixColors(neutralBase, mixColor, percent));
}
function getComplementaryColor(hue) {
    return (hue + 180) % 360;
}
function formatHsl(h, s, l) {
    return `${Math.round(h)}°, ${Math.round(s)}%, ${Math.round(l)}%`;
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorProvider",
    ()=>ColorProvider,
    "useColorTheme",
    ()=>useColorTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/color-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const ColorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const PERCENTAGES = [
    5,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90
];
function ColorProvider({ children }) {
    const [primary, setPrimary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        h: 27,
        s: 100,
        l: 50
    });
    const [complementary, setComplementary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>({
            h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComplementaryColor"])(27),
            s: 100,
            l: 50
        }));
    // Generate color palette
    const primaryHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hslToHex"])(primary.h, primary.s, primary.l);
    const tints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateTints"])(primaryHex, PERCENTAGES);
    const shades = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateShades"])(primaryHex, PERCENTAGES);
    const neutralLighter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateNeutrals"])(primaryHex, PERCENTAGES, "#FFFFFF");
    const neutralDarker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateNeutrals"])(primaryHex, PERCENTAGES, "#000000");
    const theme = {
        primary,
        complementary,
        tints,
        shades,
        neutralLighter,
        neutralDarker
    };
    // Update CSS variables
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        root.style.setProperty("--primary-h", primary.h.toString());
        root.style.setProperty("--primary-s", `${primary.s}%`);
        root.style.setProperty("--primary-l", `${primary.l}%`);
        root.style.setProperty("--comp-h", complementary.h.toString());
        root.style.setProperty("--comp-s", `${complementary.s}%`);
        root.style.setProperty("--comp-l", `${complementary.l}%`);
        // Set full HSL colors
        root.style.setProperty("--color-primary", `hsl(${primary.h}, ${primary.s}%, ${primary.l}%)`);
        root.style.setProperty("--color-complementary", `hsl(${complementary.h}, ${complementary.s}%, ${complementary.l}%)`);
    }, [
        primary,
        complementary
    ]);
    const updatePrimaryColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((hue, saturation = 100, lightness = 50)=>{
        const newPrimary = {
            h: hue,
            s: saturation,
            l: lightness
        };
        setPrimary(newPrimary);
        setComplementary({
            h: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getComplementaryColor"])(hue),
            s: saturation,
            l: lightness
        });
    }, []);
    const updatePrimaryFromHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((hex)=>{
        const hsl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hexToHsl"])(hex);
        updatePrimaryColor(hsl.h, hsl.s, hsl.l);
    }, [
        updatePrimaryColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorContext.Provider, {
        value: {
            theme,
            updatePrimaryColor,
            updatePrimaryFromHex
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-context.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
function useColorTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ColorContext);
    if (context === undefined) {
        throw new Error("useColorTheme must be used within a ColorProvider");
    }
    return context;
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__779b2369._.js.map