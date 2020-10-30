import React, { useState, useEffect } from 'react'
import M from "materialize-css"

import jailbase from '../apis/jailbase'

const OrganizationSelector = ({ region }) => {

    const [ organizations, setOrganizations ] = useState([])
    const [ loading, setLoading ] =useState(true)
    
    const options = () => {
        if (loading) {
            return <option>Default</option>
        }
        const filteredOptions = organizations.filter(organization => organization.state === region)
        return filteredOptions.map(option => <option value={option.source_id} key={option.source_id} >{option.county}</option> )
    }

    useEffect(() => {
        M.AutoInit()
        const fetchOrganizations = async (region) => {
            const fetchedOrganizations = await jailbase.get('organizations')
            setOrganizations(fetchedOrganizations.data.records)
            setLoading(false)
        }
        fetchOrganizations()
    }, [loading, region])

    

    return(
        <div className="input-field col s12">
            <select
                onChange={(e) => null}
                defaultValue={''}
                disabled={loading}
            >
                {options()}
            </select>
            <label>Select a aState</label>
        </div>
    )
}

export default OrganizationSelector