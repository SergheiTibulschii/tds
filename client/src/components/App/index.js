import React, { useState, Suspense, lazy } from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import GlobalStyles from 'global/styles'
import Select from 'react-select';
import { TodoApp } from 'components/container/Widgets'
import WidgetContainer from 'components/container/Widgets/WidgetsContainer'
import { Button } from 'semantic-ui-react'

const options = [
    {value: 'todo', label: 'Todo App'}
]

function App(props) {
    const [showTodo, setShowTodo] = useState(false)
    const handleWidgetSelect = selectedOption => {
        if(selectedOption.value === 'todo') setShowTodo(true)
    }
    return (
        <div>
            <Button>Click Here</Button>
            <Select
                placeholder='Select Widget'
                onChange={handleWidgetSelect}
                options={options}
            />
            <WidgetContainer>
                {
                    showTodo && <TodoApp />
                }
            </WidgetContainer>
            <GlobalStyles />
        </div>
    )
}

App.propTypes = {

}

export default App

