import React from 'react'
import styled from 'styled-components';

const SideDiv = styled.div`
    position: fixed;
    top:25px;
    left:0;
    width: 300px;
    height: calc(100vh - 30px);
    background-color:white;
    z-index:1;
`

function Sidebar() {
    return (
        <SideDiv></SideDiv>
    )
}

export default Sidebar;