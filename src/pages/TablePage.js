import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-400", score: 2 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "Lime", color: "bg-green-400", score: 5 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
