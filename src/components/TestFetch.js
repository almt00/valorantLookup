import { useState, useEffect } from "react";

export default function TestFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
      .then((response) => response.json())
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <div className="App">agentes</div>;
}
