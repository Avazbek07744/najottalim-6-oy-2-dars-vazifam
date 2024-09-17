
const Adres = ({data}) => {

    let { region,zip } = data
    console.log(region);
    return (
        <div>
            <div className='flex gap-20 mt-3 mb-5'>
                <p>Adress:</p>
                <div className="w-[200px] py-1 px-5 rounded">
                    <span className=''>
                        <p className="flex items-center gap-3 text-orange-500"><h4 className="p-1 bg-white w-max rounded-3xl"></h4> {region}</p>
                    </span>
                    <span className=''>
                    <p className="flex items-center gap-3 text-orange-500"><h4 className="p-1 bg-white w-max rounded-3xl"></h4> {zip}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Adres
