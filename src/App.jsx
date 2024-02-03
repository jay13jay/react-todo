import Todo from './components/Todo';
import './app.css';
import Navigation from './components/Navigation';
import { Col, Container, Row } from 'react-bootstrap';
function App() {
    const myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <>
            <head>
                <title>My ToDo App</title>
            </head>
            <Navigation />
            {/* <div className='container text-center'> */}
            <Container className='text-center'>
                <h1>My Todos</h1>
                <Row>
                    <Col>
                        <Todo text='Learn React' />
                    </Col>
                    <Col>
                        <Todo text='Master React' />
                    </Col>
                    <Col>
                        <Todo title='This is ToDo #3' text={myText} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
