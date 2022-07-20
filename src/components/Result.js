export default function Result({result,resetForm}){
    const {message} = result;

    return(
        <div className="form_div result_div">
            <p>{message}</p>
            <button className="submit_class" onClick={() => resetForm()}>
                Reset
            </button>
        </div>
    )
}