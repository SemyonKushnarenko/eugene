import { FC } from "react";

const Coordinates: FC<{ tap: {x: number, y: number} | null, pointer: {x: number, y: number} | null }> = ({ tap, pointer }) => (
    <div style={{
        position: 'fixed',
        top: 10,
        left: 10,
        background: 'rgba(0,0,0,0.7)',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: 8,
        fontFamily: 'monospace',
        zIndex: 1000,
        minWidth: 180,
    }}>
        <div>Tap: {tap ? `${tap.x.toFixed(0)}, ${tap.y.toFixed(0)}` : '--'}</div>
        <div>Pointer: {pointer ? `${pointer.x.toFixed(0)}, ${pointer.y.toFixed(0)}` : '--'}</div>
    </div>
);

export default Coordinates;
