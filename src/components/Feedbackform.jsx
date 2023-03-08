import {useState} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

const Feedbackform = ({handleAdd})=> {
    const[text, setText] = useState('')
    const[rating, setRating] = useState('')
    const[btnDisabled, setBtnDisabled] = useState(true)
    const[msg, setMsg] = useState('')

    const handleTextChange = (e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMsg(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMsg('Text must be at least 10 characters long')
        }else{
            setBtnDisabled(false)
            setMsg(null)
        }

        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }

            handleAdd(newFeedback)
            setText('')
        }


    }


  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating)=> setRating(rating)} />
            <div className="input-group">
                <input 
                    type='text'
                    onChange={handleTextChange}
                    value={text}
                    placeholder='Write a review' />
                    
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>

            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>
  )
}

export default Feedbackform