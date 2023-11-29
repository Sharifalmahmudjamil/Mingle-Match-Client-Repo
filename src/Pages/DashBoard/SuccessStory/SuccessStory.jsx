import { useLoaderData } from "react-router-dom";


const SuccessStory = () => {
    const story = useLoaderData();

    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>

                            <th>Male BioData Id</th>
                            <th>Female BioData Id</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {


                            story.map((success, index) =>
                                <tr key={success._id}>
                                    <th>{index + 1}</th>
                                    <td>{success.selfId}</td>
                                    <td>{success.partnerId}</td>


                                    <td>
                                        {/* The button to open modal */}
                                        <label htmlFor="my_modal_6" className="btn btn-outline bg-rose-300">View Story</label>
                                            
                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal" role="dialog">
                                            <div className="modal-box bg-rose-200">
                                                <h3 className="font-bold text-lg">Success</h3>
                                                <p className="py-4">{success.story}</p>
                                                <div className="modal-action">
                                                    <label htmlFor="my_modal_6" className="btn btn-outline">Close!</label>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuccessStory;