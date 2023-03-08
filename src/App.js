import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Feedbackform from './components/Feedbackform'
import AboutIcon from './components/AboutIcon'
import AboutPage from './pages/AboutPage'

const App = ()=>{
    const [feedback, setFeedback] = useState(FeedbackData)

    const newBg = 'orange'
    const newText = 'black'

    const addFeedback = (newFeedback)=>{
        //console.log(newFeedback)

        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
                
    }

    const deleteFeedback = (id)=> {
        //console.log('App', id)
        if(window.confirm('Are you sure you want to delete ?')){
            setFeedback(
                feedback.filter((item)=> item.id !== id)
            )
            
            console.log(id)
        }
    }

    return (
        <Router>
            <Header bgColor={newBg} textColor={newText} />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <Feedbackform handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            <AboutIcon />
                        </>
                    }/>
                
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
    
