import { FaChevronDown } from "react-icons/fa";

const ServiceToDo = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#F9A51A]">filter by <FaChevronDown/></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            h1
        </div>
    );
};

export default ServiceToDo;