
import { useState } from "react";

const UpdateToolCheckList = () => {

    const [stepsArr, setStepsArray] = useState([
        { id: 0, name: "Set Award Template", completed: false },
        { id: 1, name: "Set Style and Adjust Year Text", completed: false },
        { id: 2, name: "Download and Check Award Image", completed: false },
        { id: 3, name: "Award Image Approval", completed: false },
        { id: 4, name: "Set Background Image", completed: false },
        { id: 5, name: "Adjust Product Image", completed: false },
        { id: 6, name: "Download and Check Image", completed: false },
        { id: 7, name: "Adjust Award Image", completed: false },
        { id: 8, name: "Submit", completed: false },
    ]);



    return (
        <div>
            {stepsArr.map((item, index) => {
                return (
                    <div key={index} className='flex flex-row w-max px-12 h-fit '>
                        <div>
                            {item.completed ? (
                                <div className='h-fit w-fit absolute'>
                                    <img className='h-16 w-16 stroke-white ' src={greenCheck} />{" "}
                                </div>
                            ) : (
                                ""
                            )}
                            <img src={emptyCircle} className='h-16 w-16 stroke-white ' />
                        </div>
                        <h1 className='text-white text-start w-48 whitespace-nowrap my-auto  '>{item.name}</h1>
                    </div>
                );
            })}
        </div>
    )
}

export default UpdateToolCheckList
    