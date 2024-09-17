
const Car = (props) => {
    let { cars } = props

    return (
        <button className=" text-xl me-2 border border-white px-5 py-1 rounded-md text-white bg-[#00ffff] flex items-center gap-5 act transition duration-700"><p className="bg-white w-max p-1 rounded-3xl"></p>{cars}</button>
    )
}

export default Car
