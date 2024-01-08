export default function Header () {
  return (
    <header className='flex justify-between items-center logo'>
      <img src='logo.png' className='h-20 md:h-24' alt='Logo Rick and Morty App' />
      <img src='title.png' className='h-20 md:h-24' alt='Title Rick and Morty App' />
    </header>
  )
}
