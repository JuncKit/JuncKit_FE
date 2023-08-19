import { TestData } from './service/TestService';
import { useEffect } from 'react';
import styled from 'styled-components';
import Map from './components/Map';
// import Chart from './components/Chart';

function App() {
    useEffect(() => {
        TestData().then((response) => {
            console.log(response);
        });
    }, []);
    const TopBoxWrapper = styled.div`
        display: flex;
        padding-left: 45px;
        margin-bottom: 25px;
    `;
    const TopBox = styled.div`
        margin-right: 24px;
        width: 313px;
        height: 164px;
        background-color: #d9d9d9;
        margin-top: 152px;
    `;
    const Chart = styled.div`
        background-color: #d9d9d9;
        margin-right: 24px;
        width: 650px;
        height: 341px;
    `;

    return (
        <>
            <TopBoxWrapper>
                <TopBox />
                <TopBox />
                <TopBox />
                <TopBox />
            </TopBoxWrapper>
            <TopBoxWrapper>
                <Chart />
                <Map />
            </TopBoxWrapper>

            {/* <Chart /> */}
            <div className="App">서버 띄우자</div>
        </>
    );
}

export default App;
