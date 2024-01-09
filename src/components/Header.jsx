export default function Header () {
  return (
    <header className='flex justify-between items-center logo'>
      <img src='logo.webp' className='h-20 md:h-24 w-20' width={200} height={229} alt='Logo Rick and Morty App' />
      <img src='title.webp' className='h-20 md:h-24 w-full' width={656} height={200} alt='Title Rick and Morty App' />
    </header>
  )
}
