import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title="model S"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-s.jpg"
                LeftButtonText="Custiom order"
                RightButtonText="Existing inventory"
            />
            <Section
                title="model Y"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-y.jpg"
                LeftButtonText="Custiom order"
                RightButtonText="Existing inventory"
            /> 
            <Section
                title="model 3"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-3.jpg"
                LeftButtonText="Custiom order"
                RightButtonText="Existing inventory"
            />
            <Section
                title="model X"
                description="Order Online for Touchless Delivery"
                backgroundimg="model-x.jpg"
                LeftButtonText="Custiom order"
                RightButtonText="Existing inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundimg="solar-panel.jpg"
                LeftButtonText="Order now"
                RightButtonText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Cost Less Than a New Roof"
                backgroundimg="solar-roof.jpg"
                LeftButtonText="Order now"
                RightButtonText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                backgroundimg="solar-panel.jpg"
                LeftButtonText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh; 
`
