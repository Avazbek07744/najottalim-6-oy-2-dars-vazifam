import React from 'react'

const Card = ({ data }) => {
    const { firstName, lastName, image, phone, email, address, cars } = data

    return (
        <div className='w-max m-auto border border-black rounded-xl bg-[#00FFFF] p-5 hover transition duration-700 text-gray-500'>
            <img className='w-64' src={image} alt="" />
            <span className='text-center flex gap-5 justify-center mt-3 mb-5'>
                <h1>Isim: {lastName}</h1>
                <h1>Familiya: {firstName}</h1>
            </span>
            <h4 className='capitalize mb-1'>telefon: {phone}</h4>
            <h4>Email: {email}</h4>
            <div className='flex gap-20 mt-3 mb-5'>
                <p>Adress:</p>
                <div>
                    <p >Region: {address.region}</p>
                    <p>Zip: {address.zip}</p>
                </div>
            </div>
            <div className="row">
                {cars.length > 0 ? (
                    <div className="flex gap-20">
                        <p>{cars[0]}</p>
                        <p>{cars[1]}</p>
                    </div>
                ) : <p>😿😥😥😥😿</p>}
            </div>
        </div>
    )
}


export default Card
