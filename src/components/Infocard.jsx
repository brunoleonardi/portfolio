import { IconButton } from "@mui/material";
import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { isMobile } from "../App";

const InfoCard = ({ scrollToSection, setViewMode, viewMode, title, icon, iconColor }) => {
    const handleClick = () => {
        if (scrollToSection) {
            scrollToSection(isMobile() ? 2 : 1)
            return
        }
        setViewMode(title)
    }

    return (
        <div className={`info-card ${viewMode === title ? 'activated' : ''}`} onClick={handleClick}>
            <div className='icon-border' style={{ background: iconColor }}>
                {icon}
            </div>
            <div className='info-setup'>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-content'>
                    Clique e saiba mais
                </div>
            </div>
            <IconButton sx={{ marginRight: '-20px', marginLeft: isMobile() ? '-10px' : '-20px' }}><ChevronRightIcon /></IconButton>
            {/* <iframe className='iconIframe' style={{ top: '-90px', height: '180px' }} src="https://lottie.host/embed/ebf9c7ed-1283-400e-b364-fea1397b8cbc/D4dorOwRBc.json"></iframe> */}
        </div>
    )
}

export default InfoCard