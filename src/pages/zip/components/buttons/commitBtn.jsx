



const CommitBtn = ({ onClick}) => { 
    return (
      <button
        onClick={onClick}
        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Commit
      </button>
    );
};
    
export default CommitBtn;