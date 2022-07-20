import { useState } from "react"

const nameRegex = new RegExp(/^([a-zA-Z]{1,}[ ][a-zA-Z]{1,}){1,}$/);
const domainReg = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/);

export default function Form({loading, fetchEmail}){
    const [data, setData] = useState({
        fullName: "",
        domain: ""
    });

    const validateProps = () => {
        if(nameRegex.test(data.fullName) && domainReg.test(data.domain))
            fetchEmail(data);
    }

    return(
        <div className="form_div">
            <label>Full Name:</label>
            <input  className={`field_class ${
                        data.fullName !== "" && (
                            nameRegex.test(data.fullName) ? "success_input" : "error_input"
                        )
                    }`} type="text" 
                    placeholder="Tanish Arora" autoFocus 
                    value={data.fullName}
                    onChange={(e) => setData({
                        ...data, fullName: e.target.value
                    })}
            />
            <label>Domain:</label>
            <input  className={`field_class ${
                        data.domain !== "" && (
                            domainReg.test(data.domain) ? "success_input" : "error_input"
                        )
                    }`} type="text" 
                    placeholder="babbel.com" value={data.domain}
                    onChange={(e) => setData({
                        ...data, domain: e.target.value
                    })}
            />
            {
            loading ?
            <img className='loading_class' /> :
            <button className="submit_class" onClick={() => validateProps()}>
                Submit
            </button>
            }
        </div>
    )
}