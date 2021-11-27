import { Fragment, useState } from "react";
import Card from "./Card";

export default function CardContainer() {
    const [url, setUrl] = useState(null);
   
    const changeURL = () => { setUrl(document.querySelector("#API-url").value); }
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            changeURL();
        }
    }
    
    return (
        <Fragment>
            <label htmlFor="API-url" className="form-label text-white fw-bold fs-3 text-center d-block">
                GitHub API
            </label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                    https://api.github.com/users/
                </span>
                <input type="text" className="form-control" id="API-url" aria-describedby="basic-addon3" autoFocus onKeyDown={handleKeyDown} />
                <button className="btn btn-dark input-group-text" onClick={changeURL}>
                    Search  
                </button>
            </div>
            <div className="row">
                <Card data={url} />
            </div>
        </Fragment>
    );
}