//import {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

const FeedbackItem = ({item, handleDelete})=>{
    //const [rating, setRating] = useState(10)
    //const [text, setText] = useState('this is an example of a feedback')

    // how to use event listener functions
    // const handleClick = ()=>{
    //     setRating((prev)=>{
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }

    return(
        <Card reverse={true}>
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> handleDelete(item.id)} className="close">
                <FaTimes color='#fff' />
            </button>
            <div className="text-display"> {item.text}
            </div>
            {/* <button onClick={handleClick}>Click here</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem