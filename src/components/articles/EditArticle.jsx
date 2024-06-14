import '../../assets/styles/EditArticle.css'

export default function EditArticle() {

  return (
    <section className='editarticle-container'>
      <h2 className='editarticle-header'>Edit article</h2>
        <form action="" className='editarticle-form'>
            <label htmlFor="">
                Title
                <input type="text" name='title' placeholder='Title' />
            </label>
            <label htmlFor="">
                Short description
                <input type="text" name='email' placeholder='Description' />
            </label>
            <label htmlFor="">
                Text
                <textarea name="text" placeholder='Text'></textarea>
            </label>
            <div className='tags-input'>
              <div>Tags</div>
              <div className='tag-btns'>
                <input type="text" name='tag' placeholder='Tag' />
                <div className='delete-btn'>
                  <img src="/delete.svg" alt="Delete Icon" />
                  <button>Delete</button>
                </div>
                <div className='add-btn'>
                  <img src="/add.svg" alt="Add Icon" />
                  <button>Add tag</button>
                </div>
              </div>
            </div>
            <button>Send</button>
        </form>
    </section>
  )
}