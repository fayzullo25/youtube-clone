import Card from "../components/Card";

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Home() {
  return (
    <div className="flex flex-wrap p-3 gap-2">
      {data.map((elem) => {
        return <Card />;
      })}
    </div>
  );
}
export default Home;
