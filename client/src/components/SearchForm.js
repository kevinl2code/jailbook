import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import StateSelector from './StateSelector'
import OrganizationSelector from './OrganizationSelector'
import server from '../apis/server'

const SearchForm = ({ setResults }) => {

    const [ formData, setFormData ] = useState({ firstName: '', lastName: '', region: '', sourceID: '' })


    const updateRegion = (selectedRegion) => setFormData({ ...formData, region: selectedRegion })
    const updateSourceID = (selectedSource) => setFormData({ ...formData, sourceID: selectedSource})
    const updateFirstName = (e) => setFormData({ ...formData, firstName: e.target.value })
    const updateLastName = (e) => setFormData({ ...formData, lastName: e.target.value })

    const handleSubmit = () => server.post('/formsubmit', formData).then((res) => setResults(res.data.records))

    return(
        <div>
            <div className="row">
                <form className="col s8 offset-s2" onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" value={formData.firstName} onChange={e => updateFirstName(e)} />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" value={formData.lastName} onChange={e => updateLastName(e)} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <StateSelector updateRegion={updateRegion} />
                    <OrganizationSelector region={formData.region} updateSourceID={updateSourceID} />
                    <div className="col s12">
                        <div className="center-align">
                            <button 
                                className="btn waves-effect waves-light" 
                                type="submit" 
                                name="action"
                            >Search
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
                <Link to="/results">Results</Link>
            </div>
        </div>
    )
}

export default SearchForm