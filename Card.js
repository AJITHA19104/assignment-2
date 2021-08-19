function Card(props){
    return(
        <div className='card'>
            <div className='card-img'>
                <img className='image'src={props.image}/>

            </div>
            <div className='card-body'>
                <h2 className='title'>{props.title}</h2>
                <h3 className='subtitle'>{props.subtitle}</h3>
                <p className='desc'>{props.desc}</p>
                <button className='card-btn'>StartLearning </button>
            </div>

        </div>
    )
}
export default Card;