
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full border-b '>
            <div className='wrapper flex items-center justify-between'>
                <Link className='w-36' href={"/"}>
                    <Image alt='logo' height={38} width={128} src={"/assets/images/logo.svg"} />
                </Link>
                <div className='flex w-32 justify-end gap-3'>

                </div>

            </div>
        </header>
    )
}

export default Header
