const TeamCard = ({name,photo,linkedin,instagram}) => {
    return(
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" 
                src={photo} alt="photo"/>
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">{name}</p>
                {/* <p class="text-base text-gray-400 font-normal">Software Engineer</p> */}
            </div>
        </div>   
    )
}

export default TeamCard;