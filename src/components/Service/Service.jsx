import './service.css'


function Service({title}){
    return(
        <div className='app__service'>
            <div className="app__service-card">
                {title}
            </div>
        </div>
    )
}

export default Service