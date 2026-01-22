export default function CharacterCard({ charName, charImg }) {
    return (
        <div className='p-4 border rounded flex flex-col justify-center items-center gap-4'>
            <div className="card-header">
                <img src={charImg} alt={charName} />
            </div>
            <div className="card-body">
                <span>{charName}</span>
            </div>
        </div>
    )
}