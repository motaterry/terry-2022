(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorWheel",
    ()=>ColorWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/color-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ColorWheel() {
    _s();
    const { theme, updatePrimaryColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"])();
    const wheelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [center, setCenter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ColorWheel.useCallback[updateMetrics]": ()=>{
            if (wheelRef.current) {
                const rect = wheelRef.current.getBoundingClientRect();
                setCenter({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                });
            }
        }
    }["ColorWheel.useCallback[updateMetrics]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorWheel.useEffect": ()=>{
            updateMetrics();
            window.addEventListener("resize", updateMetrics);
            return ({
                "ColorWheel.useEffect": ()=>window.removeEventListener("resize", updateMetrics)
            })["ColorWheel.useEffect"];
        }
    }["ColorWheel.useEffect"], [
        updateMetrics
    ]);
    const calculateAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ColorWheel.useCallback[calculateAngle]": (clientX, clientY)=>{
            const dx = clientX - center.x;
            const dy = clientY - center.y;
            let angle = Math.atan2(dy, dx) * (180 / Math.PI);
            angle = angle + 90;
            if (angle < 0) {
                angle += 360;
            }
            updatePrimaryColor(Math.round(angle) % 360);
        }
    }["ColorWheel.useCallback[calculateAngle]"], [
        center,
        updatePrimaryColor
    ]);
    const handleStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ColorWheel.useCallback[handleStart]": (e)=>{
            setIsDragging(true);
            updateMetrics();
            let clientX;
            let clientY;
            if ("touches" in e) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            calculateAngle(clientX, clientY);
            e.preventDefault();
        }
    }["ColorWheel.useCallback[handleStart]"], [
        updateMetrics,
        calculateAngle
    ]);
    const handleMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ColorWheel.useCallback[handleMove]": (e)=>{
            if (!isDragging) return;
            let clientX;
            let clientY;
            if ("touches" in e) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }
            calculateAngle(clientX, clientY);
        }
    }["ColorWheel.useCallback[handleMove]"], [
        isDragging,
        calculateAngle
    ]);
    const handleEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ColorWheel.useCallback[handleEnd]": ()=>{
            setIsDragging(false);
        }
    }["ColorWheel.useCallback[handleEnd]"], []);
    // Keyboard navigation
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ColorWheel.useCallback[handleKeyDown]": (e)=>{
            if (!isFocused) return;
            let newHue = theme.primary.h;
            const step = e.shiftKey ? 10 : 1 // Shift for larger steps
            ;
            switch(e.key){
                case "ArrowUp":
                    e.preventDefault();
                    newHue = (newHue - step + 360) % 360;
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    newHue = (newHue + step) % 360;
                    break;
                case "ArrowLeft":
                    e.preventDefault();
                    newHue = (newHue - step + 360) % 360;
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    newHue = (newHue + step) % 360;
                    break;
                case "Home":
                    e.preventDefault();
                    newHue = 0;
                    break;
                case "End":
                    e.preventDefault();
                    newHue = 180;
                    break;
                default:
                    return;
            }
            updatePrimaryColor(newHue);
        }
    }["ColorWheel.useCallback[handleKeyDown]"], [
        isFocused,
        theme.primary.h,
        updatePrimaryColor
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorWheel.useEffect": ()=>{
            if (isDragging) {
                window.addEventListener("mousemove", handleMove);
                window.addEventListener("touchmove", handleMove);
                window.addEventListener("mouseup", handleEnd);
                window.addEventListener("touchend", handleEnd);
                return ({
                    "ColorWheel.useEffect": ()=>{
                        window.removeEventListener("mousemove", handleMove);
                        window.removeEventListener("touchmove", handleMove);
                        window.removeEventListener("mouseup", handleEnd);
                        window.removeEventListener("touchend", handleEnd);
                    }
                })["ColorWheel.useEffect"];
            }
        }
    }["ColorWheel.useEffect"], [
        isDragging,
        handleMove,
        handleEnd
    ]);
    const primaryHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToHex"])(theme.primary.h, theme.primary.s, theme.primary.l);
    const compHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToHex"])(theme.complementary.h, theme.complementary.s, theme.complementary.l);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[300px] h-[300px]",
                    ref: wheelRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        role: "slider",
                        "aria-label": "Primary color picker",
                        "aria-valuemin": 0,
                        "aria-valuemax": 360,
                        "aria-valuenow": theme.primary.h,
                        "aria-valuetext": `Hue: ${theme.primary.h} degrees`,
                        tabIndex: 0,
                        className: `w-full h-full rounded-full cursor-grab active:cursor-grabbing touch-none transition-all ${isFocused ? "ring-4 ring-[var(--color-primary)] ring-offset-2 ring-offset-slate-900" : ""}`,
                        style: {
                            background: `conic-gradient(
                hsl(0, 100%, 50%),
                hsl(60, 100%, 50%),
                hsl(120, 100%, 50%),
                hsl(180, 100%, 50%),
                hsl(240, 100%, 50%),
                hsl(300, 100%, 50%),
                hsl(360, 100%, 50%)
              )`,
                            boxShadow: "0 0 50px rgba(0,0,0,0.5), 0 0 0 10px rgba(255, 255, 255, 0.05)"
                        },
                        onMouseDown: handleStart,
                        onTouchStart: handleStart,
                        onKeyDown: handleKeyDown,
                        onFocus: ()=>setIsFocused(true),
                        onBlur: ()=>setIsFocused(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 w-1 origin-top transition-transform duration-100",
                                style: {
                                    height: "50%",
                                    transform: `translate(-50%, -50%) rotate(${theme.primary.h}deg)`
                                },
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-3 border-white shadow-lg",
                                    style: {
                                        backgroundColor: primaryHex,
                                        boxShadow: `0 0 15px ${primaryHex}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 w-1 origin-top opacity-60 transition-transform duration-100",
                                style: {
                                    height: "50%",
                                    transform: `translate(-50%, -50%) rotate(${theme.complementary.h}deg)`
                                },
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white/80",
                                    style: {
                                        backgroundColor: compHex
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-[#0f172a] rounded-full shadow-inner z-10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[80%] h-[80%] rounded-full opacity-80 blur-[10px]",
                                    style: {
                                        background: `linear-gradient(135deg, ${primaryHex}, ${compHex})`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorCard, {
                        label: "PRIMARY",
                        hex: primaryHex,
                        hsl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHsl"])(theme.primary.h, theme.primary.s, theme.primary.l),
                        color: primaryHex
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorCard, {
                        label: "COMPLEMENTARY",
                        hex: compHex,
                        hsl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHsl"])(theme.complementary.h, theme.complementary.s, theme.complementary.l),
                        color: compHex
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-slate-400 text-center mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Use arrow keys to adjust hue (Shift for larger steps)"
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(ColorWheel, "ip8hBceOHxOy66Q+FKc4zY14qiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"]
    ];
});
_c = ColorWheel;
function ColorCard({ label, hex, hsl, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 bg-slate-800/70 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 transition-all hover:border-white/20 hover:-translate-y-0.5",
        role: "region",
        "aria-label": `${label} color information`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-16 rounded-xl shadow-inner",
                style: {
                    backgroundColor: color
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-xs uppercase tracking-wider text-slate-400 mb-2 text-center",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm py-1 border-b border-white/5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: "HEX"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-white",
                                "aria-label": `Hex value: ${hex}`,
                                children: hex
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-500",
                                children: "HSL"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-white",
                                "aria-label": `HSL value: ${hsl}`,
                                children: hsl
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_c1 = ColorCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ColorWheel");
__turbopack_context__.k.register(_c1, "ColorCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaletteExpansion",
    ()=>PaletteExpansion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
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
function PaletteExpansion() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"])();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tints: true,
        shades: true,
        neutralLighter: false,
        neutralDarker: false
    });
    const toggleSection = (section)=>{
        setExpanded((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    const copyToClipboard = async (text)=>{
        try {
            await navigator.clipboard.writeText(text);
            addToast({
                title: "Copied!",
                description: `Color ${text} copied to clipboard`,
                variant: "success",
                duration: 2000
            });
        } catch (error) {
            addToast({
                title: "Copy failed",
                description: "Unable to copy color to clipboard",
                variant: "error",
                duration: 3000
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                title: "Lighter Tones (Tints)",
                colors: theme.tints,
                percentages: PERCENTAGES,
                isExpanded: expanded.tints,
                onToggle: ()=>toggleSection("tints"),
                onCopy: copyToClipboard
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                title: "Darker Tones (Shades)",
                colors: theme.shades,
                percentages: PERCENTAGES,
                isExpanded: expanded.shades,
                onToggle: ()=>toggleSection("shades"),
                onCopy: copyToClipboard
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                title: "Neutral Lighter",
                colors: theme.neutralLighter,
                percentages: PERCENTAGES,
                isExpanded: expanded.neutralLighter,
                onToggle: ()=>toggleSection("neutralLighter"),
                onCopy: copyToClipboard
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                title: "Neutral Darker",
                colors: theme.neutralDarker,
                percentages: PERCENTAGES,
                isExpanded: expanded.neutralDarker,
                onToggle: ()=>toggleSection("neutralDarker"),
                onCopy: copyToClipboard
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(PaletteExpansion, "RCT7ExdrM6FM+A5QqlXJFf8NMWg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = PaletteExpansion;
function PaletteSection({ title, colors, percentages, isExpanded, onToggle, onCopy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                "aria-expanded": isExpanded,
                "aria-controls": `palette-section-${title.toLowerCase().replace(/\s+/g, "-")}`,
                className: "w-full flex justify-between items-center pb-2 mb-4 border-b border-white/10 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-slate-800 rounded px-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-light text-slate-400",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-4 h-4 text-slate-500 transition-transform ${isExpanded ? "" : "-rotate-90"}`,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `palette-section-${title.toLowerCase().replace(/\s+/g, "-")}`,
                className: "grid grid-cols-3 gap-3",
                role: "region",
                "aria-label": `${title} color swatches`,
                children: colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorSwatch, {
                        color: color,
                        label: `+${percentages[index]}%`,
                        onCopy: onCopy
                    }, index, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_c1 = PaletteSection;
function ColorSwatch({ color, label, onCopy }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onCopy(color),
        "aria-label": `Copy color ${color} to clipboard`,
        className: "bg-slate-800/70 backdrop-blur-sm border border-white/10 rounded-xl p-3 flex flex-col gap-2 cursor-pointer transition-all hover:border-white/20 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-slate-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-12 rounded-lg shadow-inner",
                style: {
                    backgroundColor: color
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono font-semibold text-white",
                        children: color
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-slate-400 text-[10px]",
                        "aria-label": `Mix percentage: ${label}`,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_c2 = ColorSwatch;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PaletteExpansion");
__turbopack_context__.k.register(_c1, "PaletteSection");
__turbopack_context__.k.register(_c2, "ColorSwatch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border border-white/10 bg-slate-800/70 backdrop-blur-sm text-white shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardContent;
CardContent.displayName = "CardContent";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfileCard",
    ()=>UserProfileCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
function UserProfileCard() {
    const tags = [
        "UI UX Designer",
        "Product Management",
        "AI Engineer"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-complementary)] flex items-center justify-center text-2xl font-bold text-white",
                    children: "MP"
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-semibold text-white",
                            children: "Mary Pereira"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-white/70 mt-1",
                            children: "Product Designer"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 justify-center",
                    children: tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1 rounded-full text-xs font-medium ${index === 0 ? "bg-[var(--color-primary)] text-white" : "bg-white/10 text-white/80"}`,
                            children: tag
                        }, index, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = UserProfileCard;
var _c;
__turbopack_context__.k.register(_c, "UserProfileCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-[var(--color-primary)] text-white hover:opacity-90",
            outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
            ghost: "hover:bg-white/10 text-white"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx",
        lineNumber: 39,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationsPanel",
    ()=>NotificationsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
"use client";
;
;
;
;
const notifications = [
    {
        id: 1,
        name: "John Doe",
        message: "sent you a connection request",
        time: "2m ago",
        avatar: "JD"
    },
    {
        id: 2,
        name: "Sarah Smith",
        message: "commented on your post",
        time: "15m ago",
        avatar: "SS"
    },
    {
        id: 3,
        name: "Mike Johnson",
        message: "liked your design",
        time: "1h ago",
        avatar: "MJ"
    }
];
function NotificationsPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                "Notifications"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)] text-white",
                            children: "Unread 6"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-4",
                children: [
                    notifications.map((notif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-complementary)] flex items-center justify-center text-sm font-semibold text-white flex-shrink-0",
                                    children: notif.avatar
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: notif.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this),
                                                " ",
                                                notif.message
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-white/50 mt-1",
                                            children: notif.time
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        notif.id === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    children: "Accept"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    children: "Deny request"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, notif.id, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/5 rounded-lg p-3 mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/80",
                                    children: "We have updated our Terms and Condition. Please review"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Mark all as read"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        className: "flex-1",
                                        children: "View all"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = NotificationsPanel;
var _c;
__turbopack_context__.k.register(_c, "NotificationsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Switch = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--color-primary)] data-[state=unchecked]:bg-white/20", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        }, void 0, false, {
            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/switch.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/switch.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Switch;
Switch.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$React.forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Label;
Label.displayName = "Label";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentCard",
    ()=>ContentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/label.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function ContentCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-32 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-complementary)]/20 relative",
                style: {
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 right-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 rounded text-xs font-semibold bg-green-500 text-white",
                        children: "Ativo"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-white mb-2",
                                children: "Título Principal do Item"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/70",
                                children: "Esta é uma descrição de exemplo que demonstra como o texto aparece com as cores personalizadas do sistema de design."
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "switch1",
                                        className: "text-white",
                                        children: "Toggle Ativo"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        id: "switch1",
                                        defaultChecked: true
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "switch2",
                                        className: "text-white",
                                        children: "Toggle Inativo"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        id: "switch2"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Input Placeholder"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "flex-1",
                                children: "Secondary Button"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "flex-1",
                                children: "Primary Button"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = ContentCard;
var _c;
__turbopack_context__.k.register(_c, "ContentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarWidget",
    ()=>CalendarWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DAYS = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function CalendarWidget() {
    _s();
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date(2025, 8, 1)) // September 2025
    ;
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const selectedDay = 27 // Highlight day 27
    ;
    const goToPreviousMonth = ()=>{
        setCurrentDate(new Date(year, month - 1, 1));
    };
    const goToNextMonth = ()=>{
        setCurrentDate(new Date(year, month + 1, 1));
    };
    const days = [];
    // Empty cells for days before the first day of the month
    for(let i = 0; i < firstDayOfMonth; i++){
        days.push(null);
    }
    // Days of the month
    for(let i = 1; i <= daysInMonth; i++){
        days.push(i);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToPreviousMonth,
                            className: "p-1 hover:bg-white/10 rounded transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: "w-5 h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg",
                            children: [
                                MONTHS[month],
                                ", ",
                                year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToNextMonth,
                            className: "p-1 hover:bg-white/10 rounded transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "w-5 h-5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-1 mb-2",
                        children: DAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-xs font-medium text-white/60 py-2",
                                children: day
                            }, day, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-1",
                        children: days.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `aspect-square flex items-center justify-center text-sm rounded transition-colors ${day === selectedDay ? "bg-[var(--color-primary)] text-white font-semibold" : day ? "text-white/80 hover:bg-white/10 cursor-pointer" : "text-transparent"}`,
                                children: day
                            }, index, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(CalendarWidget, "3WSkrqrFjtldUULqoVweJQV4TSw=");
_c = CalendarWidget;
var _c;
__turbopack_context__.k.register(_c, "CalendarWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChartDemo",
    ()=>BarChartDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const data = [
    {
        name: "Mon",
        value1: 40,
        value2: 30
    },
    {
        name: "Tue",
        value1: 50,
        value2: 35
    },
    {
        name: "Wed",
        value1: 45,
        value2: 40
    },
    {
        name: "Thu",
        value1: 60,
        value2: 45
    },
    {
        name: "Fri",
        value1: 55,
        value2: 50
    },
    {
        name: "Sat",
        value1: 70,
        value2: 55
    },
    {
        name: "Sun",
        value1: 65,
        value2: 60
    }
];
function BarChartDemo() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("7D");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg",
                            children: "Trade Volume"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1",
                            children: [
                                "1D",
                                "7D",
                                "30D"
                            ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: activeFilter === filter ? "default" : "outline",
                                    size: "sm",
                                    onClick: ()=>setActiveFilter(filter),
                                    className: "h-7 px-2 text-xs",
                                    children: filter
                                }, filter, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: 200,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                tick: {
                                    fill: "rgba(255,255,255,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: "rgba(255,255,255,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                tick: {
                                    fill: "rgba(255,255,255,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: "rgba(255,255,255,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: "rgba(30, 41, 59, 0.95)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "8px",
                                    color: "white"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "value1",
                                fill: "var(--color-primary)",
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "value2",
                                fill: "var(--color-complementary)",
                                radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(BarChartDemo, "+2FLegvLjhUWgxMxOpI935umRuo=");
_c = BarChartDemo;
var _c;
__turbopack_context__.k.register(_c, "BarChartDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaChartDemo",
    ()=>AreaChartDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const data = [
    {
        name: "Mon",
        value1: 40,
        value2: 20
    },
    {
        name: "Tue",
        value1: 50,
        value2: 25
    },
    {
        name: "Wed",
        value1: 45,
        value2: 30
    },
    {
        name: "Thu",
        value1: 60,
        value2: 35
    },
    {
        name: "Fri",
        value1: 55,
        value2: 40
    },
    {
        name: "Sat",
        value1: 70,
        value2: 45
    },
    {
        name: "Sun",
        value1: 65,
        value2: 50
    }
];
function AreaChartDemo() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("7D");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg",
                            children: "Revenue Trend"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1",
                            children: [
                                "1D",
                                "7D",
                                "30D"
                            ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: activeFilter === filter ? "default" : "outline",
                                    size: "sm",
                                    onClick: ()=>setActiveFilter(filter),
                                    className: "h-7 px-2 text-xs",
                                    children: filter
                                }, filter, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: 200,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                        data: data,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "colorPrimary",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "5%",
                                                stopColor: "var(--color-primary)",
                                                stopOpacity: 0.8
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "95%",
                                                stopColor: "var(--color-primary)",
                                                stopOpacity: 0
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "colorComplementary",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "5%",
                                                stopColor: "var(--color-complementary)",
                                                stopOpacity: 0.8
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "95%",
                                                stopColor: "var(--color-complementary)",
                                                stopOpacity: 0
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                tick: {
                                    fill: "rgba(255,255,255,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: "rgba(255,255,255,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                tick: {
                                    fill: "rgba(255,255,255,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: "rgba(255,255,255,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: "rgba(30, 41, 59, 0.95)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    borderRadius: "8px",
                                    color: "white"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                type: "monotone",
                                dataKey: "value1",
                                stackId: "1",
                                stroke: "var(--color-primary)",
                                fill: "url(#colorPrimary)"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                                type: "monotone",
                                dataKey: "value2",
                                stackId: "1",
                                stroke: "var(--color-complementary)",
                                fill: "url(#colorComplementary)"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(AreaChartDemo, "+2FLegvLjhUWgxMxOpI935umRuo=");
_c = AreaChartDemo;
var _c;
__turbopack_context__.k.register(_c, "AreaChartDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoughnutChartDemo",
    ()=>DoughnutChartDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
"use client";
;
;
;
const data = [
    {
        name: "Confirmed",
        value: 272,
        color: "var(--color-primary)"
    },
    {
        name: "Unconfirmed",
        value: 48,
        color: "rgba(255,255,255,0.2)"
    }
];
const total = 321;
const percentage = Math.round(272 / total * 100);
function DoughnutChartDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-lg",
                    children: "Schedule Status"
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-32 h-32",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                    width: "100%",
                                    height: "100%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                            data: data,
                                            cx: "50%",
                                            cy: "50%",
                                            innerRadius: 35,
                                            outerRadius: 50,
                                            startAngle: 90,
                                            endAngle: -270,
                                            dataKey: "value",
                                            children: data.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                    fill: entry.color
                                                }, `cell-${index}`, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-white",
                                            children: [
                                                percentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full",
                                            style: {
                                                backgroundColor: "var(--color-primary)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/80",
                                            children: [
                                                "Scheduled ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-[var(--color-primary)]",
                                                    children: "321"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full",
                                            style: {
                                                backgroundColor: "var(--color-primary)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/80",
                                            children: [
                                                "Confirmed ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-[var(--color-primary)]",
                                                    children: "272"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-white/80",
                                            children: [
                                                "Unconfirmed ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/60",
                                                    children: "48"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = DoughnutChartDemo;
var _c;
__turbopack_context__.k.register(_c, "DoughnutChartDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ControlCenterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$palette$2d$expansion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/palette-expansion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$user$2d$profile$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$notifications$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$content$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$calendar$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$area$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$doughnut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function ControlCenterPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1600px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-white mb-2",
                            children: "Control Center Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60",
                            children: "Customize your design system colors and see them update in real-time"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-white mb-6",
                                            children: "Color Customization"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorWheel"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-white mb-6",
                                            children: "Color Palette"
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$palette$2d$expansion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaletteExpansion"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-9 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$user$2d$profile$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfileCard"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$notifications$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationsPanel"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$content$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentCard"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$calendar$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarWidget"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChartDemo"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$area$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChartDemo"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$doughnut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChartDemo"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = ControlCenterPage;
var _c;
__turbopack_context__.k.register(_c, "ControlCenterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=56fe5_My%20design%20system_design-system-playground_control-center-UI-Page_f5ea1efa._.js.map