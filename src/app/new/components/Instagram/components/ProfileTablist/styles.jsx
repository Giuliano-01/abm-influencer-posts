import { IconButton } from "@mui/material";
import styled from "styled-components";

export const ProfileTablistContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
`
    export const TabIconButton = styled(IconButton)`
        border: 1px solid #aaaaaa62;
        border-radius: .5rem;
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8%;
        color: black;
        outline: none;
        transition: .2s ease-in-out;
        box-shadow: 
            -6px -6px 14px rgba(255, 255, 255, .7),
            -6px -6px 10px rgba(255, 255, 255, .5),
            6px 6px 8px rgba(255, 255, 255, .075),
            6px 6px 10px rgba(0, 0, 0, .15);
        &:hover {
            box-shadow: 
                -2px -2px 6px rgba(255, 255, 255, .6),
                -2px -2px 4px rgba(255, 255, 255, .4),
                2px 2px 2px rgba(255, 255, 255, .05),
                2px 2px 4px rgba(0, 0, 0, .1);
        }
        &:active {
            box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
            inset -2px -2px 4px rgba(255, 255, 255, .5),
            inset 2px 2px 2px rgba(255, 255, 255, .075),
            inset 2px 2px 4px rgba(0, 0, 0, .15);
        }
    `