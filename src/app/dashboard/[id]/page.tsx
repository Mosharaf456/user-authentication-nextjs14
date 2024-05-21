// http://localhost:3000/dashboard/25
export default function DashboardList({ params } : { params: { id : string }}) {
  return (
    <div>
      <h1>DashboardList {params.id}</h1>
    </div>
  );
}