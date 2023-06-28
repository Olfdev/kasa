import {Link} from 'react-router-dom'
import AptData from '../logements.json';

export default function Gallery() {
  return (
    <section className="locs-tiles">
      {AptData.map((data) => (
        <Link to={`/apt/${data.id}`} key={data.id}>
          <article className="locs-tile">
            <img src={data.cover} alt="image logement"/>
            <div className="apt-title-bkg">
              <h4 className="apt-title">{data.title}</h4>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
}