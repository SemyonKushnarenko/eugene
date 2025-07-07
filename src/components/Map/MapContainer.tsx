import { FC, useState } from "react";
import Map from "./Map";
import { Button, Box, ClickAwayListener } from "@mui/material";

const MapContainer: FC = () => {
    const [showMap, setShowMap] = useState(false);

    return (
        <Box>
            <Button
                variant="contained"
                onClick={e => {
                    e.stopPropagation()
                    setShowMap(true)
                }}
                sx={{ 
                    position: 'absolute', 
                    bottom: 16, 
                    right: 16, 
                    zIndex: 10,
                    py: '18px',
                    px: '22px',
                    bgcolor: '#6C5DD3',
                    borderRadius: '16px',
                }}
            >
                <img 
                    width={42}
                    height={32}
                    src="/icons/map.svg"
                    alt=""
                />
            </Button>
            <ClickAwayListener onClickAway={() => setShowMap(false)}>
                <Box
                    sx={{
                        position: 'fixed',
                        left: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '72vh',
                        bgcolor: 'background.paper',
                        boxShadow: 6,
                        zIndex: 10,
                        transform: showMap ? 'translateY(0)' : 'translateY(100%)',
                        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        flexDirection: 'column',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        overflow: 'hidden',
                    }}
                >
                    <img
                        onClick={() => setShowMap(false)}
                        style={{
                            position: 'fixed',
                            right: 16,
                            top: 16,
                            color: "white",
                            zIndex: 11,
                        }}
                        src="/icons/close.svg"
                        width={24}
                        height={24}
                    />
                    <Map />
                </Box>
            </ClickAwayListener>
        </Box>
    );
}

export default MapContainer;