import NavigationBar from "./NavigationBar";

const CharacterDetails = ({character}) => {
    return (
        <div>
            <NavigationBar/>
            <div className="character-details-container">
            <h1 className="character-name">{character.name}</h1>
            <div className="character-image-container">
            <img src={`${character.image}`} alt=""  className="character-image"/>
            </div>
            <p> {character.intro} </p>
            <div className="comic-list-container">
            <h3>Comic List:</h3>
            <ul>
                {character.comics.map(comic => (
                    <li>{comic}</li>
                ))}
            </ul>
            </div>

            </div>
        </div>
    );
};

export default CharacterDetails;