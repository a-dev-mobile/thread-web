import { Link, useNavigate } from "react-router-dom";
import ProfileInfo from "../Cards/ProfileInfo"
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
const NavBar = () => {
    const { navigate } = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const onLogout = () => {
        // Handle logout logic here
        console.log('Logged out');
        navigate("/login")
       

    };


    const handleSearch = () => {
        navigate(`/search/${searchQuery}`);


    };
    const onClearSearch = () => {
        setSearchQuery('');

    };

    return (
        <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>

            <h2 className='text-xl font-medium text-blue-800 py-2'>Notes</h2>
            <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}


            />
            <ProfileInfo onLogout={onLogout} />
        </div>
    )
}

export default NavBar