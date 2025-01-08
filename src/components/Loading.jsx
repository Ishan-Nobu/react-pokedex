
function Loading()
{   
    const loadingGif = `./pikachu-running.gif`;  

    return(
        <div className="loading">
            Loading...
            <img src={loadingGif} alt="" />
        </div>
    );
}

export default Loading