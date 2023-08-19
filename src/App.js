import { TestData } from './service/TestService';
import { useEffect } from 'react';
// import styled from 'styled-components';
import Map from './components/Map';

function App() {
    useEffect(() => {
        TestData().then((response) => {
            console.log(response);
        });
    }, []);

    return (
        <>
            <Map />
            <div className="App">서버 띄우자</div>
        </>
    );
}

export default App;
