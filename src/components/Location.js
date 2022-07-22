/*global kakao */
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const FullScreen = styled.div`
    width: 100vw;
    height: 1vh;
    position: relative;
`

const markerData = [
    {
        title: "콜드스퀘어",
        lat: 37.62197524055062,
        lng: 127.16017523675508,
    },
    {
        title: "하남돼지집",
        lat: 37.620842424005616,
        lng: 127.1583774403176,
    },
    {
        title: "수유리우동",
        lat: 37.624915253753194,
        lng: 127.15122688059974,
    },
    {
        title: "맛닭꼬",
        lat: 37.62456273069659,
        lng: 127.15211256646381,
    },
];

const Location = () => {
    let map;

    useEffect(() => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
            level: 5,
        };

        //map
        map = new kakao.maps.Map(container, options);

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            console.log(latlng);

            markerData.push({ title: 'hello', lat: latlng.La, lng: latlng.Ma });

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(latlng.La, latlng.Ma),
                title: 'hello', // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            });

            console.log(markerData)

            var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            message += '경도는 ' + latlng.getLng() + ' 입니다';

        });
    }, [])

    useEffect(() => {
        console.log('markerupdate')
        markerData.forEach((el) => {
            // 마커를 생성합니다
            new kakao.maps.Marker({
                //마커가 표시 될 지도
                map: map,
                //마커가 표시 될 위치
                position: new kakao.maps.LatLng(el.lat, el.lng),
                //마커에 hover시 나타날 title
                title: el.title,
            });
        });
    }, [markerData])



    const [sidebar, setSidebar] = useState(false);

    return (
        <FullScreen>
            <div onClick={() => setSidebar(e => !e)}><AiOutlineMenu /></div>
            {sidebar && <Sidebar />}
            <div id="map" style={{ zIndex: "-1", width: "calc(100vw - 18px)", height: "700px" }}></div>
        </FullScreen>
    )
}

export default Location;