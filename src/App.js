import './App.css';

let name = "Mrityunjay";
function App() {
  return (
<>
<nav>
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</nav>
<div className="container">
  <h1>Hello {name}</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem corporis nobis aspernatur quod nisi molestias, ducimus saepe? Vel odio aut possimus autem alias porro cum et labore sint perferendis vero iusto vitae, a laudantium?</p>
</div>
</>  );
}

export default App;
