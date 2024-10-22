import profile from '../../assets/images/profile.png'


export default function Header() {
  return (
    <header className='flex justify-between items-center border-b-2 max-w-7xl mx-auto'>
      <h1 className="text-3xl font-bold">Knowledge-cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
}
