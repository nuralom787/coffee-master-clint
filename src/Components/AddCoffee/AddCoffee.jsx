import Swal from 'sweetalert2'


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        // Create Form Data Object.
        const newCoffee = { name, supplier, category, chef, taste, details, photo };


        // Send Data To Server.
        fetch("https://coffee-store-server-jade-six.vercel.app/coffee", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Info Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log(data);
                }
            })

        console.log(newCoffee);


    };



    return (
        <div className="max-w-5xl mx-auto bg-gray-300 my-12 text-center px-6 py-10 md:p-20 rounded-md space-y-6">
            <div className="space-y-5">
                <h1 className="font-normal font-rancho text-5xl text-[#374151]">Add New Coffee</h1>
                <p className="font-poppins">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, commodi. Nesciunt illum ipsam, accusantium mollitia quas praesentium fugiat, odit odio!</p>
            </div>
            <div>
                <form onSubmit={handleAddCoffee} className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                        <div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter Coffee Name" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Supplier</span>
                                </label>
                                <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Enter Coffee Category" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Chef</span>
                                </label>
                                <input type="text" name="chef" placeholder="Enter Coffee Chef" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Taste</span>
                                </label>
                                <input type="text" name="taste" placeholder="Enter Coffee Taste" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Enter Coffee Details" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-3">
                        <label className="label">
                            <span className="label-text font-semibold text-[#1B1A1ACC] text-xl">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Photo URL" className="px-5 py-3 mt-2 rounded-md outline-0" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="Add Coffee" />
                        {/* <button className="btn btn-outline">Add Coffee</button> */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;