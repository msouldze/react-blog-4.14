import '../assets/styles/Signup.css'

export default function Singup() {
  return (
    <section className='signup-container'>
        <h2 className='signup-header'>Create new account</h2>
        <form action="" className='signup-form'>
            <label htmlFor="">
                Username
                <input type="text" name='username' placeholder='Username' />
            </label>
            <label htmlFor="">
                Email address
                <input type="email" name='email' placeholder='Email address' />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name='password' placeholder='Password' />
            </label>
            <label htmlFor="">
                Repeat Password
                <input type="password" name='password' placeholder='Password' />
            </label>
            <div className="checkbox" htmlFor="">
                <input type="checkbox" />
                <div>I agree to the processing of my personal information</div>
            </div>
            <button>Create</button>
        </form>
        <div className='signup-footer'>
            Already have an account?<a href="">Sign In</a>.
        </div>
    </section>
  )
}