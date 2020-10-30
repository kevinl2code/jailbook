import React, { useEffect } from 'react'
import M from "materialize-css"

const StateSelector = ({ updateRegion }) => {

    useEffect(() => {
        M.AutoInit()
    }, [])

    const regions = [
        ["Any State", ""],
        ["Alaska", "AK"],
        ["Alabama", "AL"],
        ["Arkansas", "AR"],
        ["Arizona", "AZ"],
        ["California", "CA"],
        ["Colorado", "CO"],
        ["Connecticut", "CT"],
        ["Delaware", "DE"],
        ["Florida", "FL"],
        ["Georgia", "GA"],
        ["Hawaii", "HI"],
        ["Iowa", "IA"],
        ["Idaho", "ID"],
        ["Illinois", "IL"],
        ["Indiana", "IN"],
        ["Kansas", "KS"],
        ["Kentucky", "KY"],
        ["Louisiana", "LA"],
        ["Massachusetts", "MA"],
        ["Maryland", "MD"],
        ["Maine", "ME"],
        ["Michigan", "MI"],
        ["Minnesota", "MN"],
        ["Missouri", "MO"],
        ["Mississippi", "MS"],
        ["Montana", "MT"],
        ["North Carolina", "NC"],
        ["North Dakota", "ND"],
        ["Nebraska", "NE"],
        ["New Hampshire", "NH"],
        ["New Jersey", "NJ"],
        ["New Mexico", "NM"],
        ["Nevada", "NV"],
        ["New York", "NY"],
        ["Ohio", "OH"],
        ["Oklahoma", "OK"],
        ["Oregon", "OR"],
        ["Pennsylvania", "PA"],
        ["Puerto Rico", "PR"],
        ["Rhode Island", "RI"],
        ["South Carolina", "SC"],
        ["South Dakota", "SD"],
        ["Tennessee", "TN"],
        ["Texas", "TX"],
        ["Utah", "UT"],
        ["Virginia", "VA"],
        ["Virgin Islands", "VI"],
        ["Vermont", "VT"],
        ["Washington", "WA"],
        ["Wisconsin", "WI"],
        ["West Virginia", "WV"],
        ["Wyoming", "WY"]
    ]

    const renderOptions = () => regions.map((region) => <option value={region[1]} key={region[1]} >{region[0]}</option> )

    return(
        <div className="input-field col s12">
            <select
                onChange={(e) => updateRegion(e.target.value)}
                defaultValue={''}
            >
                {renderOptions()}
            </select>
            <label>Select a State</label>
        </div>
    )

}

export default StateSelector