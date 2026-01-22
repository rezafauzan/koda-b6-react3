export default function CharacterCardContainer(props) {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {props.children}
        </div>
    )
}