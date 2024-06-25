


const Cards = () => {


    return (
        
        <ul role="list" className="space-y-3">
            {items.map((item) => (
                <li key={item.id} className="px-6 py-4 overflow-hidden bg-white rounded-md shadow">
                    {/* Your content */}
                </li>
            ))}
        </ul>

    )
}

export default Cards