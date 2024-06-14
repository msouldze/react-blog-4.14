import '../assets/styles/Signin.css'

export default function Singin() {
  return (
    <section className='signin-container'>
        <h2 className='signin-header'>Sing In</h2>
        <form action="" className='signin-form'>
            <label htmlFor="">
                Email address
                <input type="email" name='email' placeholder='Email address' />
            </label>
            <label htmlFor="">
                Password
                <input type="password" name='password' placeholder='Password' />
            </label>
            <button>Login</button>
        </form>
        <div className='signin-footer'>
          Don’t have an account? <a href="">Sign Up</a>.
        </div>
    </section>
  )
} 