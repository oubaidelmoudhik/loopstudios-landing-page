import interactive from '../../images/mobile/image-interactive.jpg';

export default function BelowHero() {
  return (
    <section className='content'>
      <img src={interactive} alt='' />
      <div className='content__text'>
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
