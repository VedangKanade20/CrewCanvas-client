

const GetStarted = () => {
  return (
      <div className='md:mx-[10%] bg-neutral-950/30 rounded-3xl py-5  flex flex-col gap-5 items-center justify-start mt-20 border border-neutral-800 shadow-lg backdrop-blur-md'>
        <h1 className='text-3xl font-semibold text-center text-neutral-300    '>Get Started with CrewCanvas</h1>
        <p className='text-lg text-neutral-500  text-center'>
            Join the CrewCanvas community and start collaborating with your team today. Sign up now to experience seamless project management, real-time collaboration, and powerful tools designed to enhance your team's productivity.
        </p>
        <button className='px-6 py-3 bg-gradient-to-br from-blue-500 to-purple-500  text-white rounded-lg  transition duration-300'>
            Sign Up Now
        </button>
    </div>
  )
}

export default GetStarted