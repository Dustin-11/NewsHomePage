
import web3Mobile from '../assets/images/image-web-3-mobile.jpg'
import retroComputer from '../assets/images/image-retro-pcs.jpg'
import laptopKeys from '../assets/images/image-top-laptops.jpg'
import gamingGrowth from '../assets/images/image-gaming-growth.jpg'

const MainContent = () => {
    return (
        <>
            <main>
                <div className="mainImg-wrapper">
                    <img className="mainImg" src={web3Mobile} />
                </div>
                <h1 className="mainContent_Heading">The Bright Future of Web 3.0?</h1>
                <div className="mainTextButton_Wrapper">
                    <p className="mainContent_Text">
                        We dive into the next evolution of the web that claims to put the power of the
                    platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className="mainContent_Button">READ MORE</button>
                </div>
            </main>
            <aside className="aside">
                <h1 className="asideHeading">New</h1>
                <article className="asideArticle">
                    <h3 className="articleHeading">Hydrogen VS Electric Cars</h3>
                    <p className="articleText">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className="styleLine" />
                </article>
                <article className="asideArticle">
                    <h3 className="articleHeading">The Downsides of AI Artistry</h3>
                    <p className="articleText">What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr className="styleLine" />
                </article>
                <article className="asideArticle">
                    <h3 className="articleHeading">Is VC Funding Drying Up?</h3>
                    <p className="articleText">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    <hr className="styleLine" />
                </article>
            </aside>
            <div className="newsArticle_Container">
                <article>
                    <div className="newsImage_Container">
                        <img className="newsImage" src={retroComputer} />
                    </div>
                    <div className="newsContent_Container">
                        <h1 className="newsNumber">01</h1>
                        <h3 className="newsHeader">Reviving Retro PCs</h3>
                        <p className="newsText">What happens when old PCs are given modern upgrade?</p>
                    </div>
                </article>
                <article>
                    <div className="newsImage_Container">
                        <img className="newsImage" src={laptopKeys} />
                    </div>
                    <div className="newsContent_Container">
                        <h1 className="newsNumber">02</h1>
                        <h3 className="newsHeader">Top 10 Laptops of 2022</h3>
                        <p className="newsText">Our best picks for various needs and budgets.</p>
                    </div>
                </article>
                <article>
                    <div className="newsImage_Container">
                        <img className="newsImage" src={gamingGrowth} />
                    </div>
                    <div className="newsContent_Container">
                        <h1 className="newsNumber">03</h1>
                        <h3 className="newsHeader">The Growth of Gaming</h3>
                        <p className="newsText">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </div>
        </>

    );
};


export { MainContent };