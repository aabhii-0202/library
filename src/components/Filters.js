import React from 'react'

function Filters({
    title,
    setTitle,
    author,
    setAuthor,
    subject,
    setSubject,
    Publishdate,
    setPublishdate,
}) {
  return (
    <div>
        <h2>Filters</h2>
        <form>
            <label>Title:</label>
            <input
                type="text"
                value={title}
                onChange={(text) => setTitle(text.target.value)}
            />
            <label>Author:</label>
            <input
                type="text"
                value={author}
                onChange={(text) => setAuthor(text.target.value)}
            />
            <label>Subject:</label>
            <input
                type="text"
                value={subject}
                onChange={(text) => setSubject(text.target.value)}
            />
            <label>Publish date:</label>
            <input
                type="date"
                value={Publishdate}
                onChange={(text) => setPublishdate(text.target.value)}
            />
        </form>
    </div>
  )
}

export default Filters