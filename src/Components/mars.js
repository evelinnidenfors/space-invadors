import { useEffect, useState } from "react";

export default function Mars() {
  const apiUrl =
    "https://api.nasa.gov/planetary/apod?api_key=" +
    process.env.REACT_APP_NASA_MARS_API_KEY;
  const [space, setSpace] = useState();

  useEffect(() => {
    const fetchData = () => {
      return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSpace(data);
          console.log(data);
        });
    };
    fetchData();
  }, []);

  if (space == null) {
    return <p>hi</p> ;
  }
  return (
    <div className="wrapper" style={{backgroundImage: `url(${space.url})`}} >
          {/* <img className="background" src={space.url} alt="hero" /> */}
          <h1>{space.title}</h1>
          <p>Copyright {space.copyright}</p>
    </div>
  );
}
