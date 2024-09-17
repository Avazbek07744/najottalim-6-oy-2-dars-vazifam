import React from 'react'

const Card = ({ data }) => {
    const { firstName, lastName, image, phone, email, address, cars } = data

    return (
        <div className='w-max m-auto w-[420px] rounded-xl bg-[#00FFFF] p-5 hover transition duration-700 text-gray-500'>
            <img className='w-96 m-auto' src={image} alt="" />
            <span className='text-center flex gap-5 justify-center mt-3 mb-5'>
                <h1>Isim: {lastName}</h1>
                <h1>Familiya: {firstName}</h1>
            </span>
            <h4 className='capitalize mb-1'>telefon: {phone}</h4>
            <h4>Email: {email}</h4>
            <div className='flex gap-20 mt-3 mb-5'>
                <p>Adress:</p>
                <div>
                    <span className='flex gap-1'>
                        <input type="checkbox" name="" id="salom" />
                        <p>Region: {address.region}</p>
                    </span>
                    <span className='flex gap-1'>
                        <input type="checkbox" name="" id="alik" />
                        <p>Zip: {address.zip}</p>
                    </span>
                </div>
            </div>
            <div className="row">
                {cars.length > 0 ? (
                    <div className="flex gap-20">
                        <span className='flex gap-2'>
                            <input type="checkbox" name="" id="salom" />
                            <p>{cars[0]}</p>
                        </span>
                        <span className='flex gap-2'>
                            <input type="checkbox" name="" id="alik" />
                            <p>{cars[1]}</p>
                        </span>
                    </div>
                ) : <p>😿😥😥😥😿</p>}
            </div>
        </div>
    )
}


export default Card
