


const ColorBox = ({ color, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="color-box w-8 h-8 rounded-full cursor-pointer"
            style={{ backgroundColor: color }}
        ></div>
    );
};

export default ColorBox;
