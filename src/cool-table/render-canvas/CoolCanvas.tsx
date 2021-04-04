import React, { useEffect, useRef, useState } from 'react';
import { Painter, Sprite } from '@cool-canvas/index';
import IPainter from '@cool-canvas/painter/painter.interface';

const Container = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [app, setApp] = useState<IPainter | null>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }
        const painter = new Painter({
            el: canvasRef.current,
            width: 300,
            height: 300,
        });

        const text = new Sprite({
            content: {
                type: 'text',
                text: 'Cool Canvas',
            },
            style: {
                width: 0,
                height: 0,
                left: 0,
                top: 0,
            },
        });

        painter.add(text);
        painter.paint();
        setApp(painter);
    }, []);

    return (
        <canvas id="cool-canvas" ref={canvasRef} width="300" height="300" ></canvas>
    )
}

export default Container;
