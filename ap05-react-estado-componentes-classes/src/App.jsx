export default function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    (err) => {
      console.log(`Erro: ${err}`);
    }
  )
  return (
    <div>
      <i className="fa-solid fa-cat"></i>
      <p>Testando...</p>
    </div>
  );
}