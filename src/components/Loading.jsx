function Loading()
{   
    const loadingGif = `./src/assets/images/pikachu-running.gif`;  

    return(
        <div className="loading">
            Loading...
            <img src={loadingGif} alt="" />
        </div>
    );
}

export default Loading