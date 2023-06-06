import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", colour: "bg-orange-400", score: 2 },
    { name: "Apple", colour: "bg-red-500", score: 3 },
    { name: "Banana", colour: "bg-yellow-300", score: 1 },
    { name: "Lime", colour: "bg-green-400", score: 5 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Colour",
      render: (fruit) => <div className={`p-3  m-2 ${fruit.colour}`}></div>,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
