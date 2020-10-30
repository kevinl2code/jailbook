import React, { useState, useEffect } from 'react'


import StateSelector from './StateSelector'
import OrganizationSelector from './OrganizationSelector'

const SearchForm = () => {

    const [ formData, setFormData ] = useState({ firstName: '', lastName: '', region: '', sourceID: '' })

    const updateRegion = (selectedRegion) => setFormData({ ...formData, region: selectedRegion })

    return(
        <div>
            <div className="row">
                <form className="col s8 offset-s2" onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <StateSelector updateRegion={updateRegion} />
                    <OrganizationSelector region={formData.region} />
                </form>
            </div>
        </div>
    )
}

export default SearchForm