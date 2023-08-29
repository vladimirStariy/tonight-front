import { FC, useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

/*

 КНОПКА ЛОГАУТА
<button onClick={() => store.logout()}
                className="btn btn-primary"
            >
                logout
            </button> 

*/

const LoginScreen: FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Container 
            className="d-flex justify-content-md-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card>
                <Card.Body>
                    <input 
                            className="form-control mb-2"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="username"
                        />
                        <input
                            className="form-control mb-2"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="password"
                        />
                </Card.Body>
                <Card.Footer>
                    <button 
                        className="btn btn-primary"
                    >
                        Login
                    </button>
                </Card.Footer>
            </Card>

            

        </Container>
    )
}

export default LoginScreen;