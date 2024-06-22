
async function signIn(formData: FormData){
  'use server'
    const email = formData.get("email");
    const password = formData.get("password");
    fetch("http://localhost:5001/users/signup", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({email,password})
    }).then(res => console.log(JSON.stringify(res)))
}

export default async function signup() {
  return(
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 text-black  rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <img
            src="A:\AIstorer\appinterface\src\images\software.png"
            alt="Logo"
            className="w-30 h-20"
          />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
          Sign Up
        </h1>
        <form action={signIn}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <a href="#" className="block text-right text-xs text-cyan-600 mt-2">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6"
          >
            Access
          </button>
        </form>
        <div className="text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-cyan-600">
              Register here
            </a>
          </p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-10">© 2023 WCS LAT</p>
      </div>
    </div>
  )
  }
  