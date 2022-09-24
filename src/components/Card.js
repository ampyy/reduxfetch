export function Card(argument) {

  const post = argument.item
  return (
    <div className="card" key={post.id} >
      <img src={post.avatar} alt="Avatar" className="card-img" />
      <div className="container">
        <h4>
          <b className="card-name">
            {post.first_name} {post.last_name}
          </b>
        </h4>
        <p className="card-email">{post.email}</p>
        
      </div>
    </div>
  );
}
