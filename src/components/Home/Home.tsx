import { imgs } from '../../consts';
import './Home.scss';

type Props = {};

export default function Home({}: Props) {
  return (
    <section id="home" className="home container">
      <div className="home-info">
        <h4 className="home-subheader">
          Awe through tradition
          <div className="underline" />
        </h4>
        <h2 className="home-header">Ramen Tatsunoya</h2>
        <p className="home-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          necessitatibus at repudiandae, tenetur nihil iusto ullam excepturi
          reiciendis ipsam reprehenderit.
        </p>
        <button className="btn">View Menu</button>
      </div>

      <div className="home-img">
        <img src={imgs.home} alt="home-img" />
      </div>
    </section>
  );
}
