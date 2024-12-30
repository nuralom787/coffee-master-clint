import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://coffee-store-server-jade-six.vercel.app/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, []);


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
                fetch(`https://coffee-store-server-jade-six.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User Data has been deleted Successfully.",
                                icon: "success"
                            })
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
        });
    };




    return (
        <div className="font-poppins text-center max-w-6xl mx-auto">
            <h1>Users: {users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table border border-black">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Last Logged At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.lastSignIn}</td>
                                    <td><button onClick={() => handleDelete(user._id)} className="btn btn-outline">X</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;