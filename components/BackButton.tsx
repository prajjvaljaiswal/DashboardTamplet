import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

interface BackButtonProp{
    text: String;
    link: String;
}

const BackButton = ({text ,link}: BackButtonProp) => {
    return ( 
        <Link href={link} className="flex hover:underline text-gray-500 gap-1 items-center mb-5 font-bold">
            <ArrowLeftCircle size={18}/>
            {text}
        </Link>
     );
}
 
export default BackButton;