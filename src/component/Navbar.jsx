import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = [
        {
            title: "about",
            path: "/about"
        },
        {
            title: "contact",
            path: "/contact"
        },
    ]

    return (
        <div className='flex justify-between'>
            <h2 className='text-4xl font-bold'>Logo edited again</h2>
            <ul className='flex justify-around ml-6'>
                {
                    links?.map((link) => <Link key={link.path} href={link.path}><li>{link.title}</li></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;