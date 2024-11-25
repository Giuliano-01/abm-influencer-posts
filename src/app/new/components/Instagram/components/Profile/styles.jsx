import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 100px;
`
    export const ProfileImageContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    export const ProfileInfoContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
        export const ProfileUserSettings = styled.div`
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;
        `
        export const ProfileStats = styled.div`
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            list-style: none;
            margin: 2% 2%;
        `
        export const ProfileBio = styled.div`
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            list-style: none;
        `