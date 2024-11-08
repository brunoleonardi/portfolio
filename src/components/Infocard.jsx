import { motion } from 'framer-motion';
import { IconButton } from "@mui/material";
import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useIsMobile } from './IsMobile';

const InfoCard = ({ scrollToSection, setViewMode, viewMode, title, icon, iconColor, desc, modeDesc }) => {
    const isMobile = useIsMobile();

    const handleClick = () => {
        if (scrollToSection) {
            scrollToSection(isMobile ? 2 : 1);
            return;
        }
        setViewMode(title);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0 }}
            className={`info-card ${viewMode ? 'hideImg' : ''} ${viewMode === title ? 'activated' : ''}`}
            onClick={handleClick}
        >
            <div className='icon-border' style={{ background: iconColor }}>
                {icon}
            </div>
            <div className='info-setup'>
                <div className='card-title'>{title}</div>
                <div className='card-content'>
                    {viewMode === title ? (
                        modeDesc
                    ) : (
                        desc
                    )}
                </div>
            </div>
            <IconButton sx={{ marginRight: '-20px', marginLeft: isMobile ? '-10px' : '-20px' }}>
                <ChevronRightIcon />
            </IconButton>
        </motion.div>
    );
};

export default InfoCard;
