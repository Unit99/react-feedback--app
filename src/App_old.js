
function App(){
    const title = 'Blog post'
    const body = 'this is my blog post'
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'}
    ]

    {/* conditionals */}
    const loading = false
    const showComments = true

    if(loading) return <h1>loading...</h1>

    const commentBlock = (<div className="comments">
    <h3>Comments({comments.length})</h3>
    <ul>
        {comments.map((comment, index)=>(
            <li key={index}>{comment.text}</li>
        ))}
    </ul>
    </div>)

    return (
        <>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showComments && commentBlock}
            
        </>
    )
}

export default App