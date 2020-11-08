import RecordsContext from '../contexts/RecordsContext'

const Results = () => {
    
    return(
        <div className="row">
            We found {`array.length`} results for {`object.first_name, object.last_name`} in {`county name`}
            <RecordsContext.Consumer>
                {(value) => console.log(value)}
            </RecordsContext.Consumer>
        </div>
    )
}

export default Results