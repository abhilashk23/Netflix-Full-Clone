import React from 'react'
import Banner from '../Banner/Banner';
import requests from '../../../Services/Requests'
import Nav from '../Header/Nav';
import './HomeScreen.css'
import Rows from '../Rows/Rows'
//import requests from '../../../Services/Requests'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Rows title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow/>
            {/* <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow/> */}
            <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
            <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
            <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
            <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
            <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
        </div>
    )
}

export default HomeScreen
