import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Landing from './Landing'
import SearchForm from './SearchForm'
import Results from './Results'
import RecordsContext from '../contexts/RecordsContext'


const App = () => {
    const [ searchResults, setSearchResults ] = useState([])

    return(
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/results" render={() => (
                        <RecordsContext.Provider value={searchResults}>
                            <Results />
                        </RecordsContext.Provider>
                    )} />
                    <Route path="/search"   render={(props) => (
                        <SearchForm {...props} setResults={setSearchResults} />
                      )} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App