function Loading()
{   
    const loadingGif = `./pikachu-running.gif`;  

    return(
        <div className="loading">
            <h4>  Loading...  </h4>
            <img src={loadingGif} alt="" />
        </div>
    );
}

export default Loading