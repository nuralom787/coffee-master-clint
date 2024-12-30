import { useEffect, useState } from "react";
import Coffee from "../Coffee/Coffee";

const Home = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch("https://coffee-store-server-jade-six.vercel.app/coffee")
            .then(res => res.json())
            .then(data => {
                setCoffees(data);
                console.log(data);
            })
    }, []);



    return (
        <div className="px-36 bg-[url('../../../public/images/more/1.png')] grid grid-cols-1 md:grid-cols-2 gap-4 text-center font-poppins py-10">
            {
                coffees.map(coffee => <Coffee
                    key={coffee._id}
                    coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}
                ></Coffee>)
            }
        </div>
    );
};

export default Home;