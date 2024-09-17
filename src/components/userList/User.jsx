import React from 'react'
import Car from '../Car/Car'
import Adres from '../adres/Adres'

const User = ({ data }) => {
    const { firstName, lastName, image, phone, email, address, cars } = data

    return (
        <div>
            <div className='m-auto max-w-[410px] rounded-xl bg-[#00FFFF] p-5 hover transition duration-700 text-gray-500'>
                <img className='w-96 m-auto' src={image} alt="" />
                <span className='text-center flex gap-5 justify-center mt-3 mb-5'>
                    <h1>{lastName}</h1>
                    <h1>{firstName}</h1>
                </span>
                <h4 className='capitalize mb-1'>telefon: {phone}</h4>
                <h4>Email: {email}</h4>
                <Adres data = {address}/>
                <div className='flex flex-wrap gap-3'>
                    {
                        cars.length > 0 && cars.map(function (v, i) {
                            return <Car cars={v} key={i} />
                        })
                    }
                    {
                        cars.length <= 0 && <p>Mashinasi yo'q 😿😥😥😥😿</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default User
