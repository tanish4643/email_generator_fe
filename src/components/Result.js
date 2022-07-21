import successIcon from './../images/success.png';
import errorIcon from './../images/error.png';

export default function Result({result,resetForm}){
    const {status,message} = result;

    if(status){
        return(
            <div className="form_div result_div">
                <div className="icon_back" style={{ backgroundColor: 'rgba(77, 223, 142, 0.5)'}}>
                    <img className="status_img" src={successIcon} />
                </div>
                <p>{message}</p>
                <button className="submit_class" onClick={() => resetForm()}>
                    Reset
                </button>
            </div>
        )
    }

    return(
        <div className="form_div result_div" style={{border: '5px solid #E43E31'}}>
            <div className="icon_back" style={{ backgroundColor: 'rgba(229, 62, 49, 0.5)'}}>
                <img className="status_img" src={errorIcon} />
            </div>
            <p>{message}</p>
            <button className="submit_class" onClick={() => resetForm()}>
                Reset
            </button>
        </div>
    )
}