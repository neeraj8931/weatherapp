

const Error = (props) =>{

    let response =props.responseError;
    console.log(response,"testings")

    return(
        <>
            <div className="text-3xl relative top-1/3 w-4/5 mx-auto text-center">
            Opps...! <br />
            {response.error.message}
            </div>
        </>
    )


}

export default Error;