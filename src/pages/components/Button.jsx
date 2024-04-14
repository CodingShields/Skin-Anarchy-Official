

const Button = ({ children, onClick, }) => {



    return (
        <button onClick={onClick} className='bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-4 rounded'>
            
            {children}
        </button>
    );
}

export default Button;