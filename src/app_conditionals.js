import React from 'react'

function App(){
    const title = 'Post title'
    const body = 'this is blog post'
    const comments = [
        {id: 1, text: 'this is comment one'},
        {id: 2, text: 'this is comment two'},
        {id: 3, text: 'this is comment three'}
    ]

    const loading = false
    const showComments = true
    const commentBlock = (
        <div className='comments'>
                <h2>Comments({comments.length})</h2>
                <ul>
                    {comments.map((comment)=> (
                        <li key={comment.id}>{comment.text}</li>
                    ))}
                </ul>
            </div>
    )

    if(loading) return <h1>loading...</h1>

    return (
        //fragments
        <>
            <h1>{title.toUpperCase()}</h1>
            <p>
                {body}
            </p>   

            {/* conditionals */}            
            {showComments && commentBlock}     
            {/* showComments ? commentBlock : null */}   
        </>
    )
}

export default App