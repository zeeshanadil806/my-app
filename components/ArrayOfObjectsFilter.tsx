const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];
export default function ArrayOfObjectsFilter() {
  return (
    <div>
        {/* {people.map((nameP , id) => (
            <ul key={id}>{nameP.name} {nameP.age}</ul>
        ))} */}
        {people.filter(nameP => nameP.name.includes("a") && nameP.age < 40).sort().map((nameP , index) =>(
            <ul key={index}>{nameP.name} {nameP.age}</ul>
        ))}
    </div>
  )
}
