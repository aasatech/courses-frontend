export const Button = ({lable,className }) => {
 
    return (
        <div>
            <button class={className}>
                {lable}
            </button>
        </div>
    )
}


// {`${isExplore ? 'bg-pink-500' : 'hover:bg-pink-500'} text-white font-semibold hover:text-white py-3 px-4 border border-white-500 hover:border-pink rounded`}