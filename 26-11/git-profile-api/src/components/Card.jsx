import { useEffect, useState } from "react";

export default function Card(props) {
    let [data, setData] = useState(null);
  
    useEffect(() => {
        if (props.data !== null) {
            console.log("haciendo fetch a https://api.github.com/users/" + props.data)
            fetch("https://api.github.com/users/" + props.data)
            .then(res => res.json())
            .then(data => setData(data));
        }         
    }, [props.data]);

    // FAKE DATA FOR TESTING
    // data = {
    //     "login": "pablo-nader",
    //     "id": 88169290,
    //     "avatar_url": "https://avatars.githubusercontent.com/u/88169290?v=4",
    //     "html_url": "https://github.com/pablo-nader",
    //     "name": "Pablo Nader",
    //     "bio": null,
    //     "followers": 0,
    //     "following": 0,
    //     "created_at": "2021-07-29T23:35:43Z",
    //     "updated_at": "2021-11-09T20:20:24Z"
    // };

    if (data !== null) {
        let created_at = new Date(data.created_at).toLocaleDateString();
        let updated_at = new Date(data.updated_at).toLocaleDateString();

        return (
            <div className="col">
                <div className="card bg-dark text-white mb-5">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={data.avatar_url} className="img-fluid rounded-start" alt={data.name} />                          
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title mb-4">{data.name}</h5>
                                <ul className="list-group list-group-flush rounded">
                                    <li className="list-group-item">
                                        <b>ID: </b> {data.id}
                                    </li>
                                    <li className="list-group-item">
                                        <b>User: </b> {data.login}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Followers: </b> {data.followers}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Following: </b> {data.following}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Created at: </b> {created_at}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Updated at: </b> {updated_at}
                                    </li>
                                </ul>

                                <a href={data.html_url} className="btn btn-info mt-2">Go GitHub Profile</a>
                            </div>              
                        </div>
                    </div>
                </div>
            </div>        
        );
    } else {
        return (
            <div className="d-flex align-items-center text-white mt-5" style={{maxWidth: "400px", margin: "auto"}}>
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        );
    }
}