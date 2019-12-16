import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 20px;
    grid-gap: 10px;
`

function WidgetContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

WidgetContainer.propTypes = {

}

export default WidgetContainer

