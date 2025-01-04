import { GitHub } from "@material-ui/icons";

function Header()
{    
    const titleImage = `./src/assets/images/title.png`;

    const openGithub = () => 
    {
        window.open("https://github.com/Ishan-Nobu/react-pokedex");
    }

    return(
        <>  
            <div className="pokeHeader">
                <div className="githubIconDupe">
                    <GitHub/>
                </div>
                <div className="title">
                    <img src={titleImage} width={400} height={206} alt="title image"/>
                </div>
                <div className="githubIcon" onClick={() => openGithub()}>
                    <GitHub/>
                </div>
            </div>
        </>
    );
}

export default Header