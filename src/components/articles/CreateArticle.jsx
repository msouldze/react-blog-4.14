import { useState } from 'react';
import { Form, redirect } from 'react-router-dom';
import TagButton from '../TagButton';
import '../../assets/styles/CreateArticle.css';

export default function CreateArticle() {
  
  const [tags, setTags] = useState([]);
  // const [formData, setFormData] = useState({
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: tags,
  //   createdAt: Date.now()
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Perform form submission logic, e.g., sending data to a server
  //   console.log("Form submitted:", formData);
  //   // Redirect to a new route after form submission
  //   history.push("/dashboard");
  // };


  return (
    <section className='create-container'>
      <h2 className='create-header'>Create new article</h2>
        <Form method='post' action='/new-article' className='create-form' onSubmit={handleSubmit}>
            <label htmlFor="">
                Title
                <input
                  type="text"
                  name='title'
                  placeholder='Title'
                  value={formData.title}
                  onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Short description
                <input
                  type="text"
                  name='description'
                  placeholder='Description'
                  value={formData.description}
                  onChange={handleChange}
                />
            </label>
            <label htmlFor="">
                Text
                <textarea
                  name="body"
                  placeholder='Text'
                  value={formData.body}
                  onChange={handleChange}
                ></textarea>
            </label>
            <div className='tags-input'>
              <div>Tags</div>
              <div className='tag-btns'>
                {tags.map(tag => <TagButton key={tag} tag={tag} tags={tags} setTags={setTags} />)}
                <TagButton tags={tags} setTags={setTags} />
              </div>
            </div>
            <button>Send</button>
        </Form>
    </section>
  )
}

export const articleAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    title: data.get('title'),
    description: data.get('description'),
    body: data.get('body'),
    tagList: tags,
    createdAt: Date.now()
  }

  return redirect('/');
}