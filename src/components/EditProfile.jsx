import '../assets/styles/EditProfile.css'

export default function EditProfile() {
  return (
    <section className='editprofile-container'>
        <h2 className='editprofile-header'>Edit Profile</h2>
        <form action="" className='editprofile-form'>
            <label htmlFor="">
                Username
                <input type="text" name='username' placeholder='Username' />
            </label>
            <label htmlFor="">
                Email address
                <input type="email" name='email' placeholder='Email address' />
            </label>
            <label htmlFor="">
                New password
                <input type="password" name='password' placeholder='Password' />
            </label>
            <label htmlFor="">
                Avatar image (url)
                <input type="text" name='password' placeholder='Password' />
            </label>
            <button>Save</button>
        </form>
    </section>
  )
}