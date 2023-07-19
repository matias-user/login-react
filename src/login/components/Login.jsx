import { login } from "../../helpers/login";

const urlLogin = "http://localhost:8080";

export const Login = () => {

    
    const handleClick = () => {
        login(urlLogin);
    }

    return (

        <div className="card" style={{ maxWidth: "18rem" }} >

            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Usuario</label>
                    <input type="email" className="form-control" id="userName" placeholder="name@example.com" />
                </div>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" aria-labelledby="passwordHelpBlock" />

                <button 
                    type="button" 
                    className="btn btn-primary d-block mx-auto my-2"
                    onClick={ handleClick }>
                        Iniciar sesíon
                    </button>
            </div>
        </div>
    )
}
