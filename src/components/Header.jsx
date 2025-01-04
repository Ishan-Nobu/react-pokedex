function Header()
{      
    const titleImage = `./src/assets/images/title.png`;

    return(
        <div className="title">
            <img src={titleImage} width={400} height={206} alt="title image" />
        </div>
    );
}

export default Header