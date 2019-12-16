import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

const WidgetContainer = styled.div`
    grid-column: span ${props => props.sections};
`

const WidgetBody = styled.div`
    height: 400px;
    overflow: auto;
`

function Widget({ name, widgetFooter: Footer, sections, children }) {
    return (
        <WidgetContainer sections={sections}>
            <Card fluid>
                <Card.Content header={name} />
                <Card.Content>
                    <WidgetBody>
                        {children}
                    </WidgetBody>
                </Card.Content>
                {
                    Footer && (
                        <Card.Content extra>
                            <Footer />
                        </Card.Content>
                    )
                }
            </Card>
        </WidgetContainer>
    )
}

Widget.propTypes = {
    widgetName: PropTypes.string,
    widgetFooter: PropTypes.element
}

export default Widget

