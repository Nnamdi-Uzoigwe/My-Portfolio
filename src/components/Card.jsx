const Card = ({ children }) => {
    return (
        <div className="bg-[#003459] h-[100px] lg:h-[200px] w-[150px] lg:w-[210px] rounded-[8px] transform transition ease-in-out hover:scale-105 flex flex-col justify-evenly items-center p-4 lg:p-6">
            {children}
        </div>
    );
};

export default Card;
