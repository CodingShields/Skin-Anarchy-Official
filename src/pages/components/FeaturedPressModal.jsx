import {XCircleIcon} from '@heroicons/react/24/outline'

const FeaturedPressModal = ({open, close, link}) => {
    return open && (
        <div className="absolute w-full h-full z-40 top-1/2 left-0 animate-fadeIn">
            <div className="flex flex-col justify-center items-center place-content-center w-3/4 h-3/4 m-auto bg-white">
                <XCircleIcon className="w-8 h-8 ml-auto text-red-500 cursor-pointer" onClick={close} />
                <div className="flex flex-col justify-center items-center w-full h-full px-2">
                     <iframe src={link} width="100%" height="100%"></iframe>
                </div>
               
            </div>
        </div>
    )
}


export default FeaturedPressModal