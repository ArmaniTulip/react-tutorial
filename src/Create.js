import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Armani');
    const [isPending, setIsPending] = useState(false)

    const handleSubmit= (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added')
            setIsPending(false)
        })
        
    }

    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
             type="text"
             required 
             value={title}
             onChange={(e) => setTitle(e.target.value)}/>
            <label>Blog body:</label>
            <textarea
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select
            value = {author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="Armani">Armani</option>
                <option value="Marissa">Marissa</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button>Adding Blog...</button>}

        </form>
        </div>
        
      );
}
 
export default Create;