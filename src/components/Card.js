export function Card(argument) {
  return (
    <div className="card">
      <img src={argument.avatar} alt="Avatar" className="card-img" />
      <div className="container">
        <h4>
          <b className="card-name">
            {argument.first_name} {argument.last_name}
          </b>
        </h4>
        <p className="card-email">{argument.email}</p>
        
      </div>
    </div>
  );
}
