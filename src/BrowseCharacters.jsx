import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { Link, useNavigate } from "react-router-dom";

const BrowseCharacters = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  const fetchCharacters = async () => {
    const fetchedCharacters = [
      {
        id: 1,
        name: "Spider-Man",
        thumbnail:
          "https://cdn.unifiedcommerce.com/content/product/large/0670889355869.jpg",
          image:
          "https://e0.pxfuel.com/wallpapers/417/896/desktop-wallpaper-spider-man-marvel-comics-and-earth-1610-ultra-background-peter-parker-comic.jpg",
        comics: [
          "Amazing Fantasy #15",
          "The Amazing Spider-Man",
          "Ultimate Spider-Man",
          "The Superior Spider-Man",
        ],
        intro:
          "Spider-Man, created by writer Stan Lee and artist Steve Ditko, broke the mold when he swung onto the comic book scene. Unlike other superheroes, Peter Parker was a teenage lead hero—a relatable everyman juggling school, work, and relationships. Bitten by a radioactive spider, he gained incredible powers, including super strength, agility, and a precognitive “spider sense.” Armed with homemade web-shooters and a sense of responsibility, Spider-Man fights crime while navigating the challenges of being a young hero. From the classic Lee/Ditko tales to the modern adventures of Miles Morales, Spider-Mans web-slinging legacy continues to captivate fans worldwide. 🕷️🚀",
      },
      {
        id: 2,
        name: "Iron Man",
        thumbnail:
          "https://i.pinimg.com/736x/a2/0a/36/a20a3642c5165ddc69d4e749abc0d6f7.jpg",
        image:
          "https://wallpapercave.com/wp/wp2538842.jpg",
        comics: [
          "Tales of Suspense #39-99",
          "The Invincible Iron Man",
          "Extremis Era",
          "Superior Iron Man",
          "Tony Stark: Iron Man",
        ],
        intro:
          "Iron Man, a.k.a. Tony Stark, epitomizes the intersection of brilliance and heroism. As the CEO of Stark Industries, he's a technological visionary, constantly pushing the boundaries of innovation. But it's when he dons the sleek red-and-gold armor that he truly shines. After being captured in a war zone and sustaining a severe heart wound, Stark builds the Iron Man suit to escape captivity. Now, he fights evil not only with cutting-edge tech but also with unwavering determination. His journey—from self-centered playboy to selfless Avenger—makes Iron Man a symbol of resilience and ingenuity in the Marvel Universe. So, whether he's battling supervillains or upgrading his suit, Tony Stark proves that true heroism lies not just in the metal, but in the heart beneath it. 🚀🔥",
      },
      {
        id: 3,
        name: "Captain America",
        thumbnail:
          "https://www.goodcomicstoread.com/wp-content/uploads/2021/06/best-captain-america.jpg",
          image: "https://th.bing.com/th/id/OIP.HbuMIju6jTcYbbEMM4ihWgHaEK?rs=1&pid=ImgDetMain",
        comics: [
          "Captain America Comics #1-73",
          "Tales of Suspense #59-99",
          "Captain America",
        ],
        intro:
          "Captain America, created by Joe Simon and Jack Kirby, burst onto the scene in 1941. Steve Rogers, a scrawny but determined young man, volunteers for a top-secret experiment that transforms him into the ultimate super soldier. Clad in the stars-and-stripes, Captain America fights Nazis, supervillains, and cosmic threats. His unwavering commitment to justice, honor, and the American way makes him a beacon of hope in a complex world. Whether leading the Avengers or standing alone, Captain America embodies the best of humanity—courage, sacrifice, and resilience. So, salute the flag, grab your shield, and join Captain America on his timeless quest to defend freedom and uphold the ideals that make him a true hero. 🇺🇸🔴⚪🔵",
      },
      {
        id: 4,
        name: "Deadpool",
        thumbnail:
          "https://i.pinimg.com/474x/3e/18/79/3e187987302fc3de543325989d18d2f0--radio-tags.jpg",
          image:
          "https://2.bp.blogspot.com/-dpN787yxwmw/XoQYIXkHrHI/AAAAAAAAWyA/0tQa2R-q8ecJ8YlgLLWqafYBB5fHLm1UQCLcBGAsYHQ/w914-h514-p-k-no-nu/deadpool-marvel-comics-uhdpaper.com-4K-4.2980-wp.thumbnail.jpg",
        comics: [
          "Deadpool Vol. 1: The Circle Chase",
          "Cable & Deadpool",
          "Deadpool Kills the Marvel Universe",
          "Deadpool: Wade Wilson's War",
          "Deadpool: World's Greatest (Vol. 6)",
        ],
        intro:
          "Wade Wilson, aka Deadpool, is a wisecracking mercenary with a penchant for violence and a mouth that never stops. After a rogue experiment grants him accelerated healing powers (and leaves him horribly scarred), he adopts the alter ego Deadpool. Armed with katanas, pistols, and a twisted sense of humor, he takes on contracts, battles supervillains, and occasionally saves the day—usually while cracking inappropriate jokes. Whether he’s slicing through enemies or breaking down the fourth wall, Deadpool's chaotic charm has made him a fan favorite. So, buckle up, because with Deadpool, anything goes! 🚀🔥",
      },
    ];
    setCharacters(fetchedCharacters);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="characters-list-container">
        <h2>Browse Characters</h2>
        <ul className="characters-list">
          {characters.map(character => (
            <li key={character.id} className="character">
              <Link
                to={`/character-details/${character.id}`}
                onClick={() => onCharacterSelect(character)}
              >
                <img src={`${character.thumbnail}`} alt="" className="character-thumbnail"/>
              </Link>
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseCharacters;
