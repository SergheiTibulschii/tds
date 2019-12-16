import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Input, List, Button } from 'semantic-ui-react'

const ItemInner = styled.div`
    display: flex;
    min-height: 40px;
`

function TodoItem({ text }) {
    const [value, setValue] = useState(text)
    const [edited, setEdited] = useState(false)
    const handleChange = (evt) => {
        const { value } = evt.target
        setValue(value)
    }
    const handleCancelEditing = () => {
        setValue(text)
    }
    const handleSaveEditing = () => {
        setEdited(false)
    }
    const handleBlur = () => {
        if(edited) {
            setValue(text)
            setEdited(false)
        }
    }
    const handleClick = (evt, action) => {
        evt.preventDefault()
        action()
    }

    useEffect(() => {
        setEdited(value !== text)
    }, [value])

    return (
        <List.Item>
            <ItemInner>
                <Input
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    transparent
                />
                {edited && (
                    <>
                        <Button icon='cancel' color='yellow' onMouseDown={e => handleClick(e, handleCancelEditing)}/>
                        <Button icon='save' color='blue' onMouseDown={e => handleClick(e, handleSaveEditing)}/>
                    </>
                )}
            </ItemInner>
        </List.Item>
    )
}

TodoItem.propTypes = {

}

export default TodoItem

