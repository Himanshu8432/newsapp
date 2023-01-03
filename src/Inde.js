import React, { useState } from 'react'
import App from './App';
// import reportWebVitals from './reportWebVitals';
import News from './components/news';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'

const Inde = () => {
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setPro] = useState(0)

  return (
    <div> <><Router>
      <div><LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
      //  onLoaderFinished={() => setProf(setPro)}
      />
        <App /></div>

      <Routes>
        <Route path="home" element={<News setPro={setPro} apikey={apikey} key="h" country="in" category="general" pageSize={5} />}></Route>
        <Route path="/" element={<News setPro={setPro} apikey={apikey} key="general" country="in" category="general" pageSize={5} />}></Route>
        <Route path="/business" element={<News setPro={setPro} apikey={apikey} key="business" country="in" category="business" pageSize={5} />}></Route>
        <Route path="/technology" element={<News setPro={setPro} apikey={apikey} key="technology" country="in" category="technology" pageSize={5} />}></Route>
        <Route path="/sports" element={<News setPro={setPro} apikey={apikey} key="sports" country="in" category="sports" pageSize={5} />}></Route>
        <Route path="/health" element={<News setPro={setPro} apikey={apikey} key="health" country="in" category="health" pageSize={5} />}></Route>
        <Route path="/entertainment" element={<News setPro={setPro} apikey={apikey} key="entertainment" country="in" category="entertainment" pageSize={5} />}></Route>
        <Route path="/science" element={<News setPro={setPro} apikey={apikey} key="science" country="in" category="science" pageSize={5} />}></Route>
        <Route path="/general" element={<News setPro={setPro} apikey={apikey} key="m" country="in" category="general" pageSize={5} />}></Route>
      </Routes>
    </Router>
    </></div>
  )

}
export default Inde
