export default function Input() {
    return (
            <div className='p-4 border rounded flex justify-center items-center gap-4'>
                <label htmlFor="search">search</label>
                <input type="text" name="search" id="search" className='w-full' placeholder="Type character name here..." />
                <button type="submit" className="bg-sky-400 text-white p-4 rounded cursor-pointer">Search</button>
            </div>
    )
}