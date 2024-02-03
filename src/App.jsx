import Todo from './components/Todo';
import './app.css';
function App() {
    return (
        <>
            <head>
                <title>My ToDo App</title>
            </head>
            <div className='container text-center'>
                <h1>My Todos</h1>
                <div className='row'>
                    <div className='col'>
                        <Todo text='Learn React' />
                    </div>
                    <div className='col'>
                        <Todo text='Master React' />
                    </div>
                    <div className='col'>
                        <Todo text='This is ToDo #3' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
