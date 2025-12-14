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
    const previousAngleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rotationAngle, setRotationAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
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
    // Sync rotation angle when theme changes externally (not during drag)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColorWheel.useEffect": ()=>{
            if (!isDragging) {
                setRotationAngle(theme.primary.h);
            }
        }
    }["ColorWheel.useEffect"], [
        theme.primary.h,
        isDragging
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
            // Handle continuous rotation without glitches
            if (previousAngleRef.current !== null) {
                let delta = angle - previousAngleRef.current;
                // Normalize delta to handle wrap-around
                if (delta > 180) {
                    delta -= 360;
                } else if (delta < -180) {
                    delta += 360;
                }
                // Accumulate rotation for smooth continuous rotation
                setRotationAngle({
                    "ColorWheel.useCallback[calculateAngle]": (prev)=>prev + delta
                }["ColorWheel.useCallback[calculateAngle]"]);
            } else {
                // Initialize rotation angle on first calculation
                setRotationAngle(angle);
            }
            previousAngleRef.current = angle;
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
            // Reset rotation tracking when starting a new drag
            previousAngleRef.current = null;
            setRotationAngle(theme.primary.h);
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
        calculateAngle,
        theme.primary.h
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
            // Sync rotation offset with current hue when drag ends
            rotationOffsetRef.current = theme.primary.h;
            previousAngleRef.current = null;
        }
    }["ColorWheel.useCallback[handleEnd]"], [
        theme.primary.h
    ]);
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
                    newHue = 359; // End of the color spectrum (0-359)
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
        className: "flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-[256px] h-[256px]",
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
              )`
                },
                onMouseDown: handleStart,
                onTouchStart: handleStart,
                onKeyDown: handleKeyDown,
                onFocus: ()=>setIsFocused(true),
                onBlur: ()=>setIsFocused(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 w-1",
                        style: {
                            height: "50%",
                            transform: `translate(-50%, -100%) rotate(${rotationAngle}deg)`,
                            transformOrigin: "center bottom",
                            transition: isDragging ? "none" : "transform 0.1s"
                        },
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-3 border-white",
                            style: {
                                backgroundColor: primaryHex
                            }
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 w-1 opacity-60",
                        style: {
                            height: "50%",
                            transform: `translate(-50%, -100%) rotate(${theme.complementary.h}deg)`,
                            transformOrigin: "center bottom",
                            transition: "transform 0.1s"
                        },
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white/80",
                            style: {
                                backgroundColor: compHex
                            }
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                            lineNumber: 255,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 245,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full z-10 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[80%] h-[80%] rounded-full opacity-80 blur-[10px]",
                            style: {
                                background: `linear-gradient(135deg, ${primaryHex}, ${compHex})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                            lineNumber: 265,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                        lineNumber: 264,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
                lineNumber: 196,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(ColorWheel, "QHipl1ElgGeHiPemD8ux+kP6UDo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"]
    ];
});
_c = ColorWheel;
var _c;
__turbopack_context__.k.register(_c, "ColorWheel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorSidebar",
    ()=>ColorSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-wheel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/design-system-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/lib/color-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
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
function ColorSidebar() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"])();
    const { mode, setMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { buttonTextColor, setButtonTextColor, borderRadius, setBorderRadius } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"])();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tints: false,
        shades: false,
        neutralLighter: false,
        neutralDarker: false
    });
    const primaryHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToHex"])(theme.primary.h, theme.primary.s, theme.primary.l);
    const compHex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hslToHex"])(theme.complementary.h, theme.complementary.s, theme.complementary.l);
    const toggleSection = (section)=>{
        setExpanded((prev)=>({
                ...prev,
                [section]: !prev[section]
            }));
    };
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col gap-8 p-6 h-full transition-colors ${mode === "dark" ? "bg-black" : "bg-gray-50"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-[42px] items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$wheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorWheel"], {}, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-[21px] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorInfoCard, {
                                label: "PRIMARY",
                                hex: primaryHex,
                                hsl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHsl"])(theme.primary.h, theme.primary.s, theme.primary.l),
                                color: primaryHex
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorInfoCard, {
                                label: "COMPLEMENTARY",
                                hex: compHex,
                                hsl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$color$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatHsl"])(theme.complementary.h, theme.complementary.s, theme.complementary.l),
                                color: compHex
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[7px] rounded-lg w-full",
                style: {
                    background: `linear-gradient(to right, ${primaryHex}, ${compHex})`
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end w-full border rounded-lg overflow-hidden",
                style: {
                    borderColor: "var(--color-primary)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode("dark"),
                        className: `flex-1 h-12 px-6 transition-all border-r ${mode === "dark" ? "bg-[var(--color-primary)] text-white shadow-[0px_3px_4px_0px_rgba(0,0,0,0.3)]" : isDark ? "bg-transparent hover:bg-white/5 text-gray-400" : "bg-transparent hover:bg-gray-100 text-gray-600"}`,
                        style: {
                            borderRightColor: "var(--color-primary)"
                        },
                        "aria-pressed": mode === "dark",
                        "aria-label": "Dark Mode",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-bold",
                            children: "Dark Mode"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMode("light"),
                        className: `flex-1 h-12 px-6 transition-all ${mode === "light" ? "bg-[var(--color-primary)] text-white shadow-[0px_3px_4px_0px_rgba(0,0,0,0.3)]" : isDark ? "bg-transparent hover:bg-white/5 text-gray-400" : "bg-transparent hover:bg-gray-100 text-gray-600"}`,
                        "aria-pressed": mode === "light",
                        "aria-label": "Light Mode",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-bold",
                            children: "Light Mode"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`,
                        children: "Button Text Color"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end w-full border rounded-lg overflow-hidden",
                        style: {
                            borderColor: "var(--color-primary)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setButtonTextColor("dark"),
                                className: `flex-1 h-10 px-4 transition-all border-r ${buttonTextColor === "dark" ? "bg-[var(--color-primary)] text-white shadow-[0px_2px_3px_0px_rgba(0,0,0,0.3)]" : isDark ? "bg-transparent hover:bg-white/5 text-gray-400" : "bg-transparent hover:bg-gray-100 text-gray-600"}`,
                                style: {
                                    borderRightColor: "var(--color-primary)"
                                },
                                "aria-pressed": buttonTextColor === "dark",
                                "aria-label": "Dark Text",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Dark"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setButtonTextColor("light"),
                                className: `flex-1 h-10 px-4 transition-all ${buttonTextColor === "light" ? "bg-[var(--color-primary)] text-white shadow-[0px_2px_3px_0px_rgba(0,0,0,0.3)]" : isDark ? "bg-transparent hover:bg-white/5 text-gray-400" : "bg-transparent hover:bg-gray-100 text-gray-600"}`,
                                "aria-pressed": buttonTextColor === "light",
                                "aria-label": "Light Text",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: "Light"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`,
                                children: "Border Radius"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm font-mono ${isDark ? "text-white/60" : "text-gray-600"}`,
                                children: [
                                    borderRadius,
                                    "px"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: "0",
                        max: "32",
                        step: "1",
                        value: borderRadius,
                        onChange: (e)=>setBorderRadius(parseInt(e.target.value, 10)),
                        className: "w-full h-2 rounded-lg appearance-none cursor-pointer",
                        style: {
                            background: isDark ? `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${borderRadius / 32 * 100}%, rgba(255,255,255,0.1) ${borderRadius / 32 * 100}%, rgba(255,255,255,0.1) 100%)` : `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${borderRadius / 32 * 100}%, #e5e7eb ${borderRadius / 32 * 100}%, #e5e7eb 100%)`
                        },
                        "aria-label": "Border radius slider",
                        "aria-valuemin": 0,
                        "aria-valuemax": 32,
                        "aria-valuenow": borderRadius
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                        title: "Lighter Tones (Tints)",
                        colors: theme.tints,
                        isExpanded: expanded.tints,
                        onToggle: ()=>toggleSection("tints")
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                        title: "Darker Tones (Shades)",
                        colors: theme.shades,
                        isExpanded: expanded.shades,
                        onToggle: ()=>toggleSection("shades")
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                        title: "Neutral Lighter",
                        colors: theme.neutralLighter,
                        isExpanded: expanded.neutralLighter,
                        onToggle: ()=>toggleSection("neutralLighter")
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PaletteSection, {
                        title: "Neutral Darker",
                        colors: theme.neutralDarker,
                        isExpanded: expanded.neutralDarker,
                        onToggle: ()=>toggleSection("neutralDarker")
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(ColorSidebar, "6fyOcuCcUp/HbtX2M0poxDetTWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useColorTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"]
    ];
});
_c = ColorSidebar;
function ColorInfoCard({ label, hex, hsl, color }) {
    _s1();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const copyToClipboard = async (text)=>{
        try {
            await navigator.clipboard.writeText(text);
            addToast({
                title: "Copied!",
                description: `${label} ${text} copied to clipboard`,
                variant: "success",
                duration: 2000
            });
        } catch (error) {
            addToast({
                title: "Copy failed",
                description: "Unable to copy to clipboard",
                variant: "error",
                duration: 3000
            });
        }
    };
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `border rounded-lg p-3 flex gap-4 items-start transition-colors ${isDark ? "border-white/20" : "border-gray-300"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg shrink-0 w-[76px] h-[76px]",
                style: {
                    backgroundColor: color
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-[11px] uppercase tracking-wide ${isDark ? "text-[#c5c1bd]" : "text-gray-600"}`,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: isDark ? "text-[#c5c1bd]" : "text-gray-600",
                                children: "HEX"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>copyToClipboard(hex),
                                className: `hover:opacity-80 transition-colors font-mono ${isDark ? "text-white" : "text-gray-900"}`,
                                "aria-label": `Copy ${label} hex value: ${hex}`,
                                children: hex
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: isDark ? "text-[#c5c1bd]" : "text-gray-600",
                                children: "HSL"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>copyToClipboard(hsl),
                                className: `hover:opacity-80 transition-colors font-mono ${isDark ? "text-white" : "text-gray-900"}`,
                                "aria-label": `Copy ${label} HSL value: ${hsl}`,
                                children: hsl
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
_s1(ColorInfoCard, "D5MHXB81NEYCOddktyVT4McwHSk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = ColorInfoCard;
function PaletteSection({ title, colors, isExpanded, onToggle }) {
    _s2();
    const { addToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
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
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                "aria-expanded": isExpanded,
                "aria-controls": `palette-section-${title.toLowerCase().replace(/\s+/g, "-")}`,
                className: `w-full flex items-center justify-between pl-4 pr-2 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${isDark ? "hover:bg-white/5" : "hover:bg-gray-200"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-lg ${isDark ? "text-[#bbb]" : "text-gray-700"}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-5 h-5 transition-transform ${isDark ? "text-[#bbb]" : "text-gray-700"} ${isExpanded ? "" : "-rotate-90"}`,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `palette-section-${title.toLowerCase().replace(/\s+/g, "-")}`,
                className: "grid grid-cols-3 gap-3 mt-4",
                role: "region",
                "aria-label": `${title} color swatches`,
                children: colors.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>copyToClipboard(color),
                        "aria-label": `Copy color ${color} to clipboard`,
                        className: `backdrop-blur-sm border rounded-xl p-3 flex flex-col gap-2 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${isDark ? "bg-slate-800/70 border-white/10 hover:border-white/20" : "bg-white border-gray-300 hover:border-gray-400"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-12 rounded-lg shadow-inner",
                                style: {
                                    backgroundColor: color
                                },
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 386,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-mono font-semibold ${isDark ? "text-white" : "text-gray-900"}`,
                                        children: color
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isDark ? "text-slate-400" : "text-gray-600",
                                        style: {
                                            fontSize: "10px"
                                        },
                                        children: [
                                            "+",
                                            PERCENTAGES[index],
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                                lineNumber: 391,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                        lineNumber: 376,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx",
        lineNumber: 347,
        columnNumber: 5
    }, this);
}
_s2(PaletteSection, "D5MHXB81NEYCOddktyVT4McwHSk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = PaletteSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ColorSidebar");
__turbopack_context__.k.register(_c1, "ColorInfoCard");
__turbopack_context__.k.register(_c2, "PaletteSection");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Card = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s(({ className, ...props }, ref)=>{
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border backdrop-blur-sm shadow-sm transition-colors", isDark ? "border-white/10 bg-neutral-900/90 text-white" : "border-gray-200 bg-white text-gray-900", className),
        style: {
            borderRadius: "var(--border-radius)"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
})), "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx",
        lineNumber: 37,
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
        lineNumber: 49,
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
        lineNumber: 64,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserProfileCard() {
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-24 h-24 rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/dff1d7255654f23e342cabe6f9ffcbfc8188a4c3.png",
                            alt: "Mary Pereira profile picture",
                            fill: true,
                            className: "object-cover object-top",
                            sizes: "96px",
                            style: {
                                objectPosition: 'center top'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `p-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] -mt-1 ${isDark ? "hover:bg-white/10" : "hover:bg-gray-200"}`,
                        "aria-label": "More options",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                            className: `w-4 h-4 ${isDark ? "text-white/60" : "text-gray-600"}`
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`,
                        children: "Mary Pereira"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm ${isDark ? "text-white/80" : "text-gray-600"}`,
                        children: "Product Designer"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1.5 rounded-md text-xs font-medium border bg-transparent ${isDark ? "border-[var(--color-primary)]/60 text-[var(--color-primary)]/90" : "border-[var(--color-primary-darker)]/60 text-[var(--color-primary-darker)]"}`,
                                style: isDark ? {
                                    filter: 'brightness(1.3)'
                                } : {},
                                role: "listitem",
                                children: "UI UX Designer"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-3 py-1.5 rounded-md text-xs font-medium border bg-transparent ${isDark ? "border-[var(--color-primary)]/60 text-[var(--color-primary)]/90" : "border-[var(--color-primary-darker)]/60 text-[var(--color-primary-darker)]"}`,
                                style: isDark ? {
                                    filter: 'brightness(1.3)'
                                } : {},
                                role: "listitem",
                                children: "Product Management"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `px-3 py-1.5 rounded-md text-xs font-medium border bg-transparent ${isDark ? "border-[var(--color-primary)]/60 text-[var(--color-primary)]/90" : "border-[var(--color-primary-darker)]/60 text-[var(--color-primary-darker)]"}`,
                            style: isDark ? {
                                filter: 'brightness(1.3)'
                            } : {},
                            role: "listitem",
                            children: "AI Engineer"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(UserProfileCard, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/design-system-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-[var(--color-primary)] hover:opacity-90",
            outline: "",
            ghost: ""
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 px-3",
            lg: "h-11 px-8"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s(({ className, variant, size, asChild = false, ...props }, ref)=>{
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { buttonTextColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"])();
    const isDark = mode === "dark";
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    // Determine text color for primary buttons based on button text color setting
    const getPrimaryTextColor = ()=>{
        return buttonTextColor === "dark" ? "text-gray-900" : "text-white";
    };
    // For non-primary variants, use theme-aware colors
    const getNonPrimaryTextColor = ()=>{
        return isDark ? "text-white" : "text-gray-900";
    };
    const variantClasses = {
        default: `bg-[var(--color-primary)] ${getPrimaryTextColor()} hover:opacity-90`,
        outline: isDark ? `border-[var(--color-button-outline-border)] bg-neutral-800/50 hover:bg-neutral-800/70 ${getNonPrimaryTextColor()}` : `border-[var(--color-button-outline-border)] bg-neutral-100 hover:bg-neutral-200 ${getNonPrimaryTextColor()}`,
        ghost: isDark ? `bg-neutral-800/50 hover:bg-neutral-800/70 ${getNonPrimaryTextColor()}` : `bg-neutral-100 hover:bg-neutral-200 ${getNonPrimaryTextColor()}`
    };
    // Apply text color via inline style for primary buttons to ensure it always takes precedence
    const textColorStyle = variant === "default" || variant === undefined ? {
        color: buttonTextColor === "dark" ? "#111827" : "#ffffff"
    } // gray-900 or white
     : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size
        }), variant === "outline" && variantClasses.outline, variant === "ghost" && variantClasses.ghost, variant === "default" && `bg-[var(--color-primary)] hover:opacity-90`, className),
        style: {
            borderRadius: "var(--border-radius)",
            ...textColorStyle,
            ...props.style
        },
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx",
        lineNumber: 71,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "RWLyS4fKIIP6lPuWHT4GxA+1dPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"]
    ];
})), "RWLyS4fKIIP6lPuWHT4GxA+1dPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"]
    ];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const notifications = [
    {
        id: 1,
        name: "Mary Pereira",
        message: "has invited you to access the project",
        time: "1h",
        hasActions: true
    },
    {
        id: 2,
        name: "Mary Pereira",
        message: "changed status of task in the project",
        time: "1h",
        hasActions: false
    },
    {
        id: 3,
        name: "Mary Pereira",
        message: "added new tasks to the project",
        time: "1h",
        hasActions: false
    }
];
function NotificationsPanel() {
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-full flex flex-col p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`,
                        children: "Notifications"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-sm ${isDark ? "text-white" : "text-gray-900"}`,
                                children: "Unread"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-primary)] text-white min-w-[24px] text-center",
                                children: "6"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-y-auto min-h-0 mb-6",
                children: [
                    notifications.map((notif, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 pb-4",
                                    role: "article",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/images/dff1d7255654f23e342cabe6f9ffcbfc8188a4c3.png",
                                                        alt: `${notif.name} profile picture`,
                                                        fill: true,
                                                        className: "object-cover object-top",
                                                        style: {
                                                            objectPosition: 'center top'
                                                        },
                                                        sizes: "40px"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between gap-2 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`,
                                                                            children: notif.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                                            lineNumber: 81,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: isDark ? "text-white/30" : "text-gray-400",
                                                                            children: "•"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                                            lineNumber: 86,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `text-xs ${isDark ? "text-white/60" : "text-gray-600"}`,
                                                                            children: notif.time
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                                            lineNumber: 87,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: `p-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] flex-shrink-0 ${isDark ? "hover:bg-white/10" : "hover:bg-gray-200"}`,
                                                                    "aria-label": "More options",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                        className: `w-4 h-4 ${isDark ? "text-white/60" : "text-gray-600"}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                                        lineNumber: 99,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-sm mb-0 ${isDark ? "text-white/70" : "text-gray-700"}`,
                                                            children: notif.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                            lineNumber: 63,
                                            columnNumber: 13
                                        }, this),
                                        notif.hasActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    className: "flex-1 h-8",
                                                    "aria-label": "Accept invitation",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Accept"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "flex-1 h-8",
                                                    "aria-label": "Deny request",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Deny request"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                index < notifications.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `border-b mb-4 ${isDark ? "border-white/10" : "border-gray-300"}`
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, notif.id, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-lg p-3 flex gap-3 items-start mt-auto ${isDark ? "bg-white/5" : "bg-blue-50"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm flex-1 ${isDark ? "text-white/80" : "text-gray-900"}`,
                                children: "We have updated our Terms and Condition. Please review"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex gap-4 pt-4 border-t ${isDark ? "border-white/10" : "border-gray-300"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        className: "flex-1 h-9",
                        children: "Mark all as read"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        className: "flex-1 h-9",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(NotificationsPanel, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--color-primary)] data-[state=unchecked]:bg-[var(--color-switch-unchecked-bg)]", className),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Input = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s(({ className, type, ...props }, ref)=>{
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full border px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50", isDark ? "border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-white placeholder:text-white/50" : "border-[var(--color-input-border)] bg-[var(--color-input-bg)] text-gray-900 placeholder:text-gray-500", className),
        style: {
            borderRadius: "var(--border-radius)"
        },
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/input.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
})), "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ContentCard() {
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-32 bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-complementary)]/20 relative",
                style: {
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-3 right-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-2 py-1 rounded text-xs font-semibold bg-green-500 ${isDark ? "text-white" : "text-white"}`,
                        children: "Ativo"
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6 space-y-4 flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`,
                                children: "Título Principal do Item"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm ${isDark ? "text-white/70" : "text-gray-600"}`,
                                children: "Esta é uma descrição de exemplo que demonstra como o texto aparece com as cores personalizadas do sistema de design."
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 32,
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
                                        className: isDark ? "text-white" : "text-gray-900",
                                        children: "Toggle Ativo"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        id: "switch1",
                                        defaultChecked: true
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "switch2",
                                        className: isDark ? "text-white" : "text-gray-900",
                                        children: "Toggle Inativo"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                        id: "switch2"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            placeholder: "Input Placeholder"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 61,
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
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "flex-1",
                                children: "Primary Button"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ContentCard, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
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
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToPreviousMonth,
                            "aria-label": "Previous month",
                            className: `p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 ${isDark ? "hover:bg-white/10 focus:ring-offset-slate-800" : "hover:bg-gray-200 focus:ring-offset-white"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                className: `w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: `text-lg ${isDark ? "text-white" : "text-gray-900"}`,
                            id: "calendar-month-year",
                            children: [
                                MONTHS[month],
                                ", ",
                                year
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToNextMonth,
                            "aria-label": "Next month",
                            className: `p-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 ${isDark ? "hover:bg-white/10 focus:ring-offset-slate-800" : "hover:bg-gray-200 focus:ring-offset-white"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: `w-5 h-5 ${isDark ? "text-white" : "text-gray-900"}`,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-1 mb-2",
                        role: "row",
                        children: DAYS.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-center text-xs font-medium py-2 ${isDark ? "text-white/60" : "text-gray-600"}`,
                                role: "columnheader",
                                "aria-label": day,
                                children: day
                            }, day, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-7 gap-1",
                        role: "grid",
                        "aria-labelledby": "calendar-month-year",
                        children: days.map((day, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `aspect-square flex items-center justify-center text-sm rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${day === selectedDay ? "bg-[var(--color-primary)] text-white font-semibold" : day ? isDark ? "text-white/80 hover:bg-white/10 cursor-pointer" : "text-gray-900 hover:bg-gray-200 cursor-pointer" : "text-transparent cursor-default"}`,
                                "aria-label": day ? `Day ${day}` : undefined,
                                "aria-pressed": day === selectedDay,
                                disabled: !day,
                                children: day
                            }, index, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(CalendarWidget, "hrlLlrJZ+xTswFvtzlkb2Uvf10M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
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
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("7D");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: `text-lg ${isDark ? "text-white" : "text-gray-900"}`,
                            children: "Trade Volume"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                            lineNumber: 28,
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
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    className: "min-h-[200px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                tick: {
                                    fill: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                tick: {
                                    fill: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: isDark ? "rgba(30, 41, 59, 0.95)" : "rgba(255, 255, 255, 0.95)",
                                    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                                    borderRadius: "8px",
                                    color: isDark ? "white" : "black"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                                lineNumber: 70,
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
                                lineNumber: 82,
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
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(BarChartDemo, "kGZoc5dwSy5CTJxElaW3HjJGH84=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
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
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("7D");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: `text-lg ${isDark ? "text-white" : "text-gray-900"}`,
                            children: "Revenue Trend"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                            lineNumber: 35,
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
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    className: "min-h-[200px]",
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
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "95%",
                                                stopColor: "var(--color-primary)",
                                                stopOpacity: 0
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                        lineNumber: 59,
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
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "95%",
                                                stopColor: "var(--color-complementary)",
                                                stopOpacity: 0
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "name",
                                tick: {
                                    fill: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                tick: {
                                    fill: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
                                    fontSize: 12
                                },
                                axisLine: {
                                    stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                contentStyle: {
                                    backgroundColor: isDark ? "rgba(30, 41, 59, 0.95)" : "rgba(255, 255, 255, 0.95)",
                                    border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
                                    borderRadius: "8px",
                                    color: isDark ? "white" : "black"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                                lineNumber: 103,
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
                                lineNumber: 115,
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
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(AreaChartDemo, "kGZoc5dwSy5CTJxElaW3HjJGH84=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: `text-lg ${isDark ? "text-white" : "text-gray-900"}`,
                    children: "Schedule Status"
                }, void 0, false, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex-1 flex flex-col justify-center",
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
                                                    lineNumber: 44,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`,
                                            children: [
                                                percentage,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                            lineNumber: 30,
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
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm ${isDark ? "text-white/80" : "text-gray-700"}`,
                                            children: [
                                                "Scheduled ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-semibold ${isDark ? "text-[var(--color-primary)]" : "text-[var(--color-primary-darker)]"}`,
                                                    children: "321"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 60,
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
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm ${isDark ? "text-white/80" : "text-gray-700"}`,
                                            children: [
                                                "Confirmed ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-semibold ${isDark ? "text-[var(--color-primary)]" : "text-[var(--color-primary-darker)]"}`,
                                                    children: "272"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-3 h-3 rounded-full ${isDark ? "bg-white/20" : "bg-gray-300"}`
                                        }, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm ${isDark ? "text-white/80" : "text-gray-700"}`,
                                            children: [
                                                "Unconfirmed ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: isDark ? "text-white/60" : "text-gray-500",
                                                    children: "48"
                                                }, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(DoughnutChartDemo, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = DoughnutChartDemo;
var _c;
__turbopack_context__.k.register(_c, "DoughnutChartDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadixThemesComponent",
    ()=>RadixThemesComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/design-system-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
;
var _s = __turbopack_context__.k.signature();
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
function RadixThemesComponent() {
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { buttonTextColor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"])();
    const isDark = mode === "dark";
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        notifications: true,
        darkMode: false,
        autoSave: true
    });
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 rounded-lg bg-[var(--color-primary)]/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: `w-5 h-5 ${isDark ? "text-[var(--color-primary)]" : "text-[var(--color-primary-darker)]"}`
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: `text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`,
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`,
                                    children: "Manage your preferences"
                                }, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "space-y-6 flex-1 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 pb-2 border-b ${isDark ? "border-white/10" : "border-gray-300"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: `w-4 h-4 ${isDark ? "text-white/60" : "text-gray-600"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`,
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "name",
                                                className: `text-sm ${isDark ? "text-white" : "text-gray-900"}`,
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                placeholder: "Enter your name",
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "email",
                                                className: `text-sm ${isDark ? "text-white" : "text-gray-900"}`,
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "email",
                                                type: "email",
                                                placeholder: "Enter your email",
                                                value: formData.email,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        email: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 pb-2 border-b ${isDark ? "border-white/10" : "border-gray-300"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: `w-4 h-4 ${isDark ? "text-white/60" : "text-gray-600"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`,
                                        children: "Preferences"
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "notifications",
                                                        className: `text-sm ${isDark ? "text-white" : "text-gray-900"}`,
                                                        children: "Notifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mt-0.5 ${isDark ? "text-white/50" : "text-gray-600"}`,
                                                        children: "Receive email notifications"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                id: "notifications",
                                                checked: settings.notifications,
                                                onCheckedChange: (checked)=>setSettings({
                                                        ...settings,
                                                        notifications: checked
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 145,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "darkMode",
                                                        className: `text-sm ${isDark ? "text-white" : "text-gray-900"}`,
                                                        children: "Dark Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mt-0.5 ${isDark ? "text-white/50" : "text-gray-600"}`,
                                                        children: "Use dark theme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                id: "darkMode",
                                                checked: settings.darkMode,
                                                onCheckedChange: (checked)=>setSettings({
                                                        ...settings,
                                                        darkMode: checked
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                        htmlFor: "autoSave",
                                                        className: `text-sm ${isDark ? "text-white" : "text-gray-900"}`,
                                                        children: "Auto Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs mt-0.5 ${isDark ? "text-white/50" : "text-gray-600"}`,
                                                        children: "Automatically save changes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 177,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                id: "autoSave",
                                                checked: settings.autoSave,
                                                onCheckedChange: (checked)=>setSettings({
                                                        ...settings,
                                                        autoSave: checked
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-32 rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/radix-theme-illustration.jpg",
                            alt: "Radix Theme illustration",
                            fill: true,
                            className: "object-cover",
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex gap-3 pt-4 border-t ${isDark ? "border-white/10" : "border-gray-300"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                className: "flex-1",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "flex-1",
                                children: "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(RadixThemesComponent, "C5888/mDbHMtxxUgqJ2Zhte5BV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$design$2d$system$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDesignSystem"]
    ];
});
_c = RadixThemesComponent;
var _c;
__turbopack_context__.k.register(_c, "RadixThemesComponent");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/color-picker/color-sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$user$2d$profile$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/user-profile-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$notifications$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/notifications-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$content$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/content-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$calendar$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/calendar-widget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/bar-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$area$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/area-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$doughnut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/doughnut-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$radix$2d$themes$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/demo-components/radix-themes-component.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/components/theme-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const { mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = mode === "dark";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen p-6 transition-colors ${isDark ? "bg-gradient-to-br from-black via-slate-950 to-black" : "bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1600px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: `text-4xl font-bold mb-2 transition-colors ${isDark ? "text-white" : "text-gray-900"}`,
                            children: "Control Center Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: isDark ? "text-white/60" : "text-gray-600",
                            children: "Customize your design system colors and see them update in real-time"
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "lg:col-span-3",
                            "aria-label": "Color customization panel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-0 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$color$2d$picker$2f$color$2d$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorSidebar"], {}, void 0, false, {
                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "lg:col-span-9",
                            "aria-label": "Design system component previews",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-6 min-h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$user$2d$profile$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserProfileCard"], {}, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$calendar$2d$widget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarWidget"], {}, void 0, false, {
                                                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$notifications$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationsPanel"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$content$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentCard"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$radix$2d$themes$2d$component$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadixThemesComponent"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$bar$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChartDemo"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$area$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChartDemo"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$demo$2d$components$2f$doughnut$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChartDemo"], {}, void 0, false, {
                                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Dropbox/Cursor-ai-agent/My design system/design-system-playground/control-center-UI-Page/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ControlCenterPage, "j79Dy2L3ZDsOtiOS5cYpoZxyy9w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Dropbox$2f$Cursor$2d$ai$2d$agent$2f$My__design__system$2f$design$2d$system$2d$playground$2f$control$2d$center$2d$UI$2d$Page$2f$components$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ControlCenterPage;
var _c;
__turbopack_context__.k.register(_c, "ControlCenterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=56fe5_My%20design%20system_design-system-playground_control-center-UI-Page_e8bb4fb4._.js.map