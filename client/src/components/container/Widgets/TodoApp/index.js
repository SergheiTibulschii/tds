import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Widget from 'components/container/Widgets/Widget'
import TodoItem from './TodoItem'
import { Input, List } from 'semantic-ui-react'

const TodoAppContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    & div.input {
        flex-grow: 1;
    }
`

function TodoApp(props) {
    return (
        <Widget name='Todo App' sections='3'>
            <TodoAppContainer>
                <Input />
                <List>
                    <TodoItem text='Some todo text'/>
                    <TodoItem text='Some todo text 1'/>
                    <TodoItem text='Some todo text 2'/>
                </List>
            </TodoAppContainer>
        </Widget>
    )
}

TodoApp.propTypes = {

}

export default TodoApp


