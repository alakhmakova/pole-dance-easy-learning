import './Hero.css';
import leafUrl from '../assets/images/leaf.svg';
import branchUrl from '../assets/images/hero-branch.svg';
import sparkleUrl from '../assets/images/sparkle.svg';
import flowersUrl from '../assets/images/hero-flowers.svg';

// Hero section at the top of the home page (from the mockup): slogan, short text, two buttons
// and a framed illustration with hand-drawn flowers, a branch and gold sparkles around it.
export default function Hero() {
    return (
        <section className='hero container'>
            <div className='hero-text'>
                <span className='eyebrow'><img src={leafUrl} alt='' />Online pole lessons</span>
                <h1>Listen to your body, <em>grow</em> your pole skills</h1>
                <p>Choose a category, unlock the elements your body is ready for, and move at your own pace. Every element follows the IPSF Code of Points.</p>
                <div className='hero-actions'>
                    {/* A link to #catalog: the browser scrolls down to the element with id="catalog" on this page. */}
                    <a className='btn' href='#catalog'>Browse categories</a>
                    {/* TODO: scroll to the membership banner once it exists. Now the button does nothing. */}
                    <button type='button' className='btn btn-ghost'>See membership</button>
                </div>
            </div>
            {/* Illustration in an arched frame. The decorations are pictures without meaning (alt=""),
                placed around the frame with position: absolute (see Hero.css). */}
            <div className='hero-art'>
                <div className='paper'>
                    <img src='/images/elements/f46.jpg' alt='Illustration of the Handstand Hip Hold Split: a back bend with one hand on the floor and legs in a split along the pole' />
                </div>
                <img className='deco deco-branch' src={branchUrl} alt='' />
                <img className='deco deco-sparkle-big' src={sparkleUrl} alt='' />
                <img className='deco deco-sparkle-small' src={sparkleUrl} alt='' />
                <img className='deco deco-flowers' src={flowersUrl} alt='' />
            </div>
        </section>
    );
}
