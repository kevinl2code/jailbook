import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Landing from './Landing'
import SearchForm from './SearchForm'


const App = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/search" component={SearchForm} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App