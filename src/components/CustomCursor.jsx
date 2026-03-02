import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const dotSpringConfig = { damping: 40, stiffness: 450 };
    const ringSpringConfig = { damping: 35, stiffness: 80 };

    const cursorX = useSpring(mouseX, dotSpringConfig);
    const cursorY = useSpring(mouseY, dotSpringConfig);

    const ringX = useSpring(mouseX, ringSpringConfig);
    const ringY = useSpring(mouseY, ringSpringConfig);

    const [cursorState, setCursorState] = useState('default');

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleHover = (e) => {
            const target = e.target.closest('a, button, .interactive');
            if (target) {
                setCursorState('hover');
            } else {
                setCursorState('default');
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="cursor-wrapper" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 999999 }}>
            <motion.div
                className="cursor-dot"
                style={{
                    left: cursorX, top: cursorY,
                    position: 'absolute', width: '5px', height: '5px',
                    backgroundColor: 'var(--gold)', borderRadius: '50%',
                    translateX: '-50%', translateY: '-50%',
                }}
            />

            <motion.div
                className="cursor-ring"
                animate={{
                    scale: cursorState === 'hover' ? 1.4 : 1,
                    width: cursorState === 'hover' ? '80px' : '40px',
                    height: cursorState === 'hover' ? '80px' : '40px',
                    backgroundColor: cursorState === 'hover' ? 'rgba(191, 155, 48, 0.05)' : 'transparent',
                    borderColor: cursorState === 'hover' ? 'var(--gold)' : 'rgba(26, 54, 160, 0.2)',
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 100 }}
                style={{
                    left: ringX, top: ringY,
                    position: 'absolute', border: '1px solid',
                    borderRadius: '50%', translateX: '-50%', translateY: '-50%',
                }}
            />
        </div>
    );
};

export default CustomCursor;
