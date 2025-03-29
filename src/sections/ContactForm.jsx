
const ContactForm = () => {
    return (
        <div className="border-[0.5px] border-[#00a8e8] w-[280px] sm:w-[350px] lg:w-[500px] flex justify-center rounded-[8px] mx-auto">
            <form className="w-full py-3 sm:py-6 lg:py-10 px-4 sm:px-10 lg:px-20">
                    <div className="form-group mb-6">
                        <p className="text-normal sm:text-lg not-italic">Name</p>
                        <input 
                            type="text" 
                            required 
                            className="not-italic border-0 border-b-[1px] text-normal lg:text-lg bg-transparent py-2 border-[#00a8e8] w-[100%]" 
                        />
                    </div>

                    <div className="form-group mb-4">
                        <p className="text-normal sm:text-lg not-italic">Email Address</p>
                        <input 
                            type="email" 
                            required 
                            className="not-italic border-0 border-b-[1px] text-normal sm:text-lg bg-transparent py-2 border-[#00a8e8] w-[100%]"
                        />
                    </div>

                    <div className="form-group mb-8">
                        <p className="text-normal sm:text-lg not-italic">Message</p>
                        <textarea className="not-italic border-0 border-b-[0.5px] text-normal sm:text-lg bg-transparent py-2 border-[#00a8e8] w-[100%]">

                        </textarea>
                    </div>

                    <div className="flex justify-center">
                        <input 
                            type="submit" 
                            value="Send Message" 
                            className="not-italic bg-[#00a8e8] py-2 px-10 rounded-ss-[25px] rounded-ee-[25px] rounded-se-[25px] text-normal sm:text-lg" 
                        />
                    </div>
                    
            </form>
            
        </div>
    )
}

export default ContactForm