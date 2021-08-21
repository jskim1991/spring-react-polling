import {useEffect, useState} from "react";
import axios from "axios";
import {poll} from "./util";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getResponse = async () => {
            const fetchBackend = () => axios.get("/api/test")
            const validateFn = result => "00" === result.data.result
            const response = await poll(fetchBackend, validateFn, 3000)
            return response
        }

        getResponse().then(r => {
            console.log(r)
            setData(r.data.data)
        })
    }, [])

    return (
        <div>
            {
                data.length > 0 ?
                    <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data.map((d, idx) => {
                                return <tr key={idx}>
                                <td>{d.key}</td>
                                <td>{d.value}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                    : <div>Loading</div>
            }
        </div>
    );
}

export default App;
