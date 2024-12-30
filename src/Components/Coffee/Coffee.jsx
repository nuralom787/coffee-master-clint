import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, photo } = coffee;


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-jade-six.vercel.app/coffee/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee Data has been deleted.",
                                icon: "success"
                            })
                            const remaining = coffees.filter(cf => cf._id !== id);
                            setCoffees(remaining);
                        }
                    });
            }
        });

    }


    return (
        <div className="bg-gray-300 p-8 rounded-md flex items-center gap-4">
            <img className="w-32" src={photo} alt="" />
            <div className="text-start flex-1">
                <p className="font-semibold text-base text-[#1B1A1A]">Name: <span className="font-normal text-[#5C5B5B]">{name}</span></p>
                <p className="font-semibold text-base text-[#1B1A1A]">Chef: <span className="font-normal text-[#5C5B5B]">{chef}</span></p>
                <p className="font-semibold text-base text-[#1B1A1A]">Price: <span className="font-normal text-[#5C5B5B]">890 Taka</span></p>
            </div>
            <div className="space-y-2">
                <Link title="View Details" className="font-semibold text-xl bg-[#D2B48C] p-3 text-white rounded block" to={`/details/${_id}`}>
                    <MdRemoveRedEye />
                </Link>
                <Link title="Update Info" className="font-semibold text-md bg-[#3C393B] p-3 text-white rounded block" to={`/update/${_id}`}>
                    <FaPen />
                </Link>
                <button onClick={() => handleDelete(_id)} title="Delete Items" className="font-semibold text-xl bg-[#EA4744] p-3 text-white rounded">
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Coffee;