import { useEffect, useState } from "react";
import Person from "./Person";

function People() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3338/init");
      const json = await res.json();
      console.log(json);
      setPeople(json);
    };
    getData();
  }, []);

  return (
    <>
      {people.map((item, idx) => (
        <Person name={item.name} key={`${item.name}-${idx}`} />
      ))}
    </>
  );
}

export default People;
