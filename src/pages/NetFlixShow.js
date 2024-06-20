import React from 'react'
import Row from '../components/row/Row'
import api from '../api/api'
import Banner from "../components/banner/Banner"
import Nav from "../components/nav/Nav"

const NetFlixShow = () => {

return (
<div>
  <Nav/>
  <Banner/>
<Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow></Row>
<Row title="Trending Now" fetchUrl={api.fetchTrending}></Row>
<Row title="Top Rated" fetchUrl={api.fetchTopRated}></Row>
<Row title="Action Movies" fetchUrl={api.fetchActionMovies}></Row>
<Row title="Comedy movies" fetchUrl={api.fetchComedyMovies}></Row>
<Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies}></Row>
<Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies}></Row>
<Row title="Documentaries" fetchUrl={api.fetchDocumentaries}></Row>
</div>
)
}

export default NetFlixShow