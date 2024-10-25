import profile from '../../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between w-11/12 mx-auto mt-12 border-b-2 items-center p-4'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;