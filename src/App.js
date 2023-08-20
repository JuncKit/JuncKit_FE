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
        margin-left: 50px;
    `;
    const Wrapper = styled.div`
        display: flex;
    `;
    const TopBox = styled.div`
        margin-right: 24px;
        width: 313px;
        height: 395px;

        margin-top: 152px;

        background: #ffffff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    `;
    const RightBox = styled.div`
        margin-right: 24px;
        width: 312px;
        height: 164px;
        background-color: #22c86c;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 152px;
    `;
    const LeftBox = styled.div`
        margin-right: 24px;
        width: 312px;
        height: 164px;

        margin-top: 152px;

        /* Rectangle 47 */

        background: #d9d9d9;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    `;
    const Chart = styled.div`
        margin-right: 24px;
        width: 650px;
        height: 230px;

        /* Rectangle 49 */

        background: #ffffff;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    `;
    const State = styled.div`
        position: absolute;
        margin-left: 44.5%;
        top: 350px;
    `;

    return (
        <>
            <h1 style={{ position: 'absolute', marginLeft: '93px', marginTop: '83px' }}>Admin web page</h1>
            <TopBoxWrapper>
                <Wrapper>
                    <TopBox>
                        <img
                            src="/images/maker.png"
                            style={{ position: 'absolute', marginLeft: '20px', marginTop: '16px' }}
                        ></img>
                        <p style={{ position: 'absolute', marginLeft: '58px', marginTop: '18px', fontSize: '20px' }}>
                            부산 광역시 기장군 일광읍
                        </p>

                        <img
                            style={{ position: 'absolute', marginLeft: '58px', marginTop: '101px',width:"182px",height:"184px" }}
                            src="/images/chart.png"
                        ></img>
                        <img
                            src="/images/green.png"
                            style={{ position: 'absolute', marginLeft: '20px', marginTop: '306px' }}
                        ></img>
                        <p style={{ position: 'absolute', marginLeft: '42px', marginTop: '304px', fontSize: '16px' }}>
                            주거인구 59
                        </p>
                        <img
                            src="/images/black.png"
                            style={{ position: 'absolute', marginLeft: '20px', marginTop: '329px' }}
                        ></img>
                        <p style={{ position: 'absolute', marginLeft: '42px', marginTop: '325px', fontSize: '16px' }}>
                            직장인구 8
                        </p>
                        <img
                            src="/images/white.png"
                            style={{ position: 'absolute', marginLeft: '20px', marginTop: '352px' }}
                        ></img>
                        <p style={{ position: 'absolute', marginLeft: '42px', marginTop: '346px', fontSize: '16px' }}>
                            방문인구 33
                        </p>
                    </TopBox>
                    <TopBox>
                        <img
                            src="/images/graph1.png"
                            style={{ marginLeft: '10px', width: '275px', height: '188px' }}
                        ></img>
                        <img
                            src="/images/graph2.png"
                            style={{ marginLeft: '10px', width: '275px', height: '188px' }}
                        ></img>
                    </TopBox>
                </Wrapper>
                <Wrapper>
                    <RightBox>
                        <p
                            style={{
                                position: 'absolute',
                                fontSize: '50px',
                                color: 'white',
                                marginLeft: '32px',
                                marginTop: '16px',
                            }}
                        >
                            47.8%
                        </p>
                        <p
                            style={{
                                position: 'absolute',
                                fontSize: '15px',
                                color: 'white',
                                marginLeft: '32px',
                                marginTop: '95px',
                            }}
                        >
                            {' '}
                            (2020) 읍/면부 만 60세 이상 노인
                        </p>
                        <p
                            style={{
                                position: 'absolute',
                                fontSize: '20px',
                                color: 'white',
                                marginLeft: '32px',
                                marginTop: '115px',
                            }}
                        >
                            {' '}
                            경로당 이용 비율
                        </p>
                    </RightBox>
                    <LeftBox>
                        <p style={{ position: 'absolute', fontSize: '50px', marginLeft: '32px', marginTop: '16px' }}>
                            4.7%
                        </p>
                        <p style={{ position: 'absolute', fontSize: '15px', marginLeft: '32px', marginTop: '95px' }}>
                            {' '}
                            (2020) 부산시 전체 노인
                        </p>
                        <p style={{ position: 'absolute', fontSize: '20px', marginLeft: '32px', marginTop: '115px' }}>
                            {' '}
                            공공 여가문화시설 이용 비율
                        </p>
                    </LeftBox>
                </Wrapper>
            </TopBoxWrapper>
            <TopBoxWrapper>
                <img
                    src="/images/maker.png"
                    style={{ position: 'absolute', marginLeft: '20px', marginTop: '16px' }}
                ></img>
                <p style={{ position: 'absolute', marginLeft: '58px', marginTop: '18px', fontSize: '20px' }}>
                    {mapStates}
                </p>
                {mapStates === '사하구' && (
                    <Chart>
                        <img
                            src="/images/1.png"
                            style={{ width: '505px', height: '280px', marginLeft: '13%', marginTop: '-6%' }}
                        ></img>
                    </Chart>
                )}
                {mapStates === '사상구' && (
                    <Chart>
                        <img
                            src="/images/2.png"
                            style={{ width: '505px', height: '280px', marginLeft: '13%', marginTop: '-6%' }}
                        ></img>
                    </Chart>
                )}
                {mapStates === '수영구' && (
                    <Chart>
                        <img
                            src="/images/3.png"
                            style={{ width: '505px', height: '280px', marginLeft: '13%', marginTop: '-6%' }}
                        ></img>
                    </Chart>
                )}
                {mapStates === '금정구' && (
                    <Chart>
                        <img
                            src="/images/4.png"
                            style={{ width: '505px', height: '280px', marginLeft: '13%', marginTop: '-6%' }}
                        ></img>
                    </Chart>
                )}
                {mapStates === '기장군' && (
                    <Chart>
                        <img
                            src="/images/5.png"
                            style={{ width: '505px', height: '280px', marginLeft: '13%', marginTop: '-6%' }}
                        ></img>
                    </Chart>
                )}
                <State>
                    <Map />
                </State>
            </TopBoxWrapper>
        </>
    );
}

export default App;
