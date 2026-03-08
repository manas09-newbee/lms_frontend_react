import StudentLayout from "../layouts/StudentLayout";

function TestPage() {
  return (
    <StudentLayout>
      <h1>Available Tests</h1>

      <div className="card">
        <h3>Java Mid Term Test</h3>
        <p>Duration: 60 Minutes</p>
        <button className="btn-primary">Start Test</button>
      </div>
    </StudentLayout>
  );
}

export default TestPage;