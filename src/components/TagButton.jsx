import { useState } from 'react'

export default function TagButton({tag = '', tags, setTags}) {
  const [tagName, setTagName] = useState('');

  function handleChange(e) {
    setTagName(e.target.value);
  }

  function handleAddTag(e) {
    e.preventDefault();
    setTags([...tags, tagName]);
    setTagName('');
  }

  function handleDeleteTag(e) {
    e.preventDefault();
    const value = e.target.closest('.tag-btn').children[0].value;
    const filteredTags = tags.filter(tag => tag !== value);
    setTags([...filteredTags]);
  }

  return (
    <div className='tag-btn'>
      <input type="text" name='tag' value={tag || tagName} placeholder='Tag' onChange={handleChange} />
      <div className='delete-btn' onClick={handleDeleteTag}>
        <button>Delete</button>
        <img src="/delete.svg" alt="Delete Icon" />
      </div>
      {!tag && 
        <div className='add-btn' onClick={handleAddTag}>
          <button>Add tag</button>
          <div>+</div>
        </div>
      }
    </div>
  )
}