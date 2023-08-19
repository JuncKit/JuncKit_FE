import { TestData } from './service/TestService';
import { useEffect } from 'react';
import styled from 'styled-components';

function App() {
    useEffect(() => {
        TestData().then((response) => {
            console.log(response);
        });
    }, []);

    return <div className="App">서버 띄우자</div>;
}

export default App;
