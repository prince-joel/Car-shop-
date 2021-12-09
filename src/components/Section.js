import React from 'react'
import styled from 'styled-components'

function Section({ title, description,LeftButtonText, RightButtonText, backgroundimg}) {
    return (
        <Wrap bgimage={backgroundimg}>
            <ItemText>
                <h1>Model S</h1>
                <p> Order Online for Touchless Delivery </p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {LeftButtonText}
                    </LeftButton>
                    {RightButtonText &&
                        <RightButton>
                        {RightButtonText} 
                    </RightButton> 
                    }
                    
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>

              
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position: Center;
    background-repeat: no=-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between; // vertical;
    align-items: center; // horizontal;
    background-image: ${props => `url("/images/${props.bgimage} ")`}


`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
    

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width:256px;
    color: white;
    display: flex;
    justify-content:center;
    align-items:center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

    
`
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    position: fixed;
    Z-index: 1000;
    left: 45%;
    bottom: 10px;
    animation: animationDown infinite 1.5s;

`

const Buttons = styled.div``