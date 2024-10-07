import { BsPhoneFlip } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const HomeContact = () => {
    return (
        <div className="flex gap-6 justify-around items-center">
            <div className="flex gap-4 items-center">
                <div>
                    <BsPhoneFlip className=""/>
                </div>
                <div>
                <p>Give us a Call</p>
                <h3>1-888-123-4567</h3>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div>
                   <MdOutlineMailOutline className=""/> 
                </div>
             <div>
             <p>Send us a Message</p>
             <h3>medical-clinic@mail.com</h3>
             </div>
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    <SlLocationPin className=""/>
                </div>
               <div>
               <p>Visit our Location</p>
               <h3>3213 Suitland Street</h3>
               </div>
            </div>
        </div>
    );
};

export default HomeContact;