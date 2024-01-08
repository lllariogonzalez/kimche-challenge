const SkeletonCharacters = () => {
  return (
    <div className='animate-pulse min-h-screen w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
      {[...Array(20)].map((_, index) => (
        <div key={index} className='animate-pulse bg-zinc-700 rounded-lg w-full h-full aspect-square' />
      ))}
    </div>
  )
}

export default SkeletonCharacters
