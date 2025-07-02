import '../css/Home.css'

function Home() {
    return (
        <div>
            <div className="homeMain" style={{ backgroundImage: `url(${require('../assets/newputCover.jpg')})` }} />
            <p>
                Newput is a custom software development company with offices in Silicon Valley, USA and India. We're here to supplement your team and turn your ideas into reality. We're a team of developers who have worked with several Silicon Valley startups & large companies and successfully shipped many products.
            </p>
        </div>
    );
}

export default Home;