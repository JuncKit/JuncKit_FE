import React, { useEffect } from 'react';
import styled from 'styled-components';
import Map from './components/Map';
import { useRecoilValue } from 'recoil';
import { MapState } from './recoil/JunckitState';

function App() {
    const mapStates = useRecoilValue(MapState);

    const TopBoxWrapper = styled.div`
        display: flex;
        padding-left: 45px;
        margin-bottom: 25px;
    `;
    const Wrapper = styled.div`
        display: flex;
    `;
    const TopBox = styled.div`
        margin-right: 24px;
        width: 313px;
        height: 395px;
        background-color: #d9d9d9;
        margin-top: 152px;
    `;
    const RightBox = styled.div`
        margin-right: 24px;
        width: 312px;
        height: 164px;
        background-color: #d9d9d9;
        margin-top: 152px;
    `;
    const Chart = styled.div`
        background-color: #d9d9d9;
        margin-right: 24px;
        width: 650px;
        height: 230px;
    `;
    const State = styled.div`
        position: absolute;
        margin-left: 44.5%;
        top: 350px;
    `;

    return (
        <>
            <TopBoxWrapper>
                <Wrapper>
                    <TopBox ><img></img></TopBox>
                    <TopBox />
                </Wrapper>
                <Wrapper>
                    <RightBox />
                    <RightBox />
                </Wrapper>
            </TopBoxWrapper>
            <TopBoxWrapper>
                {mapStates === '사하구' && <Chart>gtrrrrrrrrt</Chart>}
                {mapStates === '사상구' && <Chart></Chart>}
                {mapStates === '수영구' && <Chart></Chart>}
                {mapStates === '금정구' && <Chart></Chart>}
                {mapStates === '기장군' && <Chart></Chart>}
                <State>
                    <Map />
                </State>
            </TopBoxWrapper>
        </>
    );
}

export default App;
