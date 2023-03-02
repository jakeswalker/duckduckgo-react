import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
// Bootstrap Icons
import { MegaphoneFill, ChevronDown, Twitter, Reddit, ChatLeftText, Envelope, List, X, Search, CheckCircleFill, ChevronCompactDown } from "react-bootstrap-icons";
const TopMenu = () => (
  <Container fluid className="p-0">
    <Navbar className="justify-content-end py-4 ">
      <Nav className="mx-sm-0 mx-md-3">
        <Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="py-0 px-sm-1 px-md-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <MegaphoneFill className="fs-5"/>&nbsp;
              <ChevronDown className="fs-6"/>
            </Dropdown.Toggle>
            <Dropdown.Menu className="list-unstyled rounded-3 py-0 overflow-hidden">
              <Dropdown.Item className="text-white" href="#"><Twitter/> Twitter</Dropdown.Item>
              <Dropdown.Item className="text-white" href="#"><Reddit/> Reddit</Dropdown.Item>
              <Dropdown.Item className="text-white" href="#"><ChatLeftText/> Blog</Dropdown.Item>
              <Dropdown.Item className="text-white" href="#"><Envelope/> Newsletter</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Link>
        <Nav.Link>
          <SideMenu/>
        </Nav.Link>
      </Nav>
    </Navbar>
  </Container>
);
function SideMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="dark" className="sideMenuOpen py-0 px-sm-1 px-md-2 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideMenu" onClick={() => setOpen(!open)} aria-controls="collapseSideMenu" aria-expanded={open}>
        <List className="fs-5"/>
      </Button>>
        <Collapse className="sideMenu overflow-scroll" in={open} dimension="width" id="collapseSideMenu">
            <Card className="text-white m-0" body style={{ width: '205px' }}>
              <Button variant="dark" className="sideMenuClose py-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSideMenu" onClick={() => setOpen(!open)} aria-controls="collapseSideMenu" aria-expanded={open}>
                <X className="fs-2"/>
              </Button>
              <Row className="pb-3">
                <Col>
                  <div className="sideMenuTitles py-2">SETTINGS</div>
                  <ul className="list-unstyled">
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Themes</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">All Settings</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">!Bang Search Shortcuts</a></li>
                  </ul>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col>
                  <div className="sideMenuTitles py-2">PRIVACY ESSENTIALS</div>
                  <ul className="list-unstyled">
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Private Search</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">App and Extension</a></li>
                  </ul>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col>
                  <div className="sideMenuTitles py-2">WHY PRIVACY</div>
                  <ul className="list-unstyled">
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Privacy Blog</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Privacy Newsletter</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Help Spread DuckDuckGo!</a></li>
                  </ul>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col>
                  <div className="sideMenuTitles py-2">WHO WE ARE</div>
                  <ul className="list-unstyled">
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">About Us</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Privacy Policy</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Careers</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Press Kit</a></li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="sideMenuTitles py-2">KEEP IN TOUCH</div>
                  <ul className="list-unstyled">
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Twitter</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Reddit</a></li>
                    <li><a className="sideMenuLists text-decoration-none text-white" href="#">Help</a></li>
                  </ul>
                </Col>
              </Row>
            </Card>
        </Collapse>
    </>
  );
}
const Logo = () => (
  <Row className="mx-0 mb-3">
    <Col>
      <img width="205px" className="img-fluid mx-auto d-block" src="/duckduckgo-logo.png" alt="DuckDuckGo logo."/>
    </Col>
  </Row>
);
const SearchBar = () => (
  <Row className="mx-0 py-4">
    <Col sm={10} md={8} lg={6} className="mx-auto">
      <InputGroup size="lg">
        <Form.Control type="text" className="rounded-1 border-0 fs-6" placeholder="Search the web without being tracked"/>
          <Button variant="dark" type="button" className="search border-0"><Search/></Button>
      </InputGroup>
    </Col>
  </Row>
);
const Info = () => (
  <Row className="mx-0 pt-2">
    <Col className="text-center">
      <h2><strong>Tired of being traced online? We can help.</strong></h2>
      <p className="m-0 pb-1">Get seamless privacy protection on your browser for free with one download:</p>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item"><CheckCircleFill className="checkMark"/> Private Search</li>
        <li className="list-inline-item"><CheckCircleFill className="checkMark"/> Tracker Blocking</li>
        <li className="list-inline-item"><CheckCircleFill className="checkMark"/> Site Encryption</li>
      </ul>
      <Button variant="primary" type="button" className="addChrome1 text-white rounded-3 mt-2 py-2">Add DuckDuckGo to Chrome</Button>
      <p className="mt-3" style={{fontSize: '12px'}}>Trusted by tens of millions worldwide!</p>
    </Col>
  </Row>
);
const Cards = () => (
  <Container fluid className="p-0">
    <Row className="mx-0 my-4">
      <Col className="text-center">
        <h6><strong>Privacy Protection For Any Device</strong></h6>
      </Col>
    </Row>
    <Row className="justify-content-center mx-0">
      <Col xs={7} sm={5} md={3} className="text-center mb-3">
        <Card className="rounded-4 py-4" style={{minHeight: '310px'}}>
          <Card.Body>
            <img className="mx-auto d-block mb-4" style={{minHeight: '75px'}} src="/laptop.svg" alt="A laptop."/>
              <h5 className="card-title"><strong>Privacy for Chrome</strong></h5>
              <p className="card-text">Browse as usual, and we'll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one <a className="cardLinks text-decoration-none" href="#">Chrome
                Extension</a>.</p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={7} sm={5} md={3}  className="text-center mb-3">
        <Card className="rounded-4 py-4" style={{minHeight: '310px'}}>
          <Card.Body>
            <img className="mx-auto d-block mb-4" style={{minHeight: '75px'}} src="/search.svg" alt="A magnifying glass."/>
              <h5 className="card-title"><strong>Private Search Engine</strong></h5>
              <p className="card-text">Search privately with our app or extension, add private web search to your favorite browser, or search directly at <a className="cardLinks text-decoration-none" href="#">duckduckgo.com</a>.</p>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={7} sm={5} md={3} className="text-center mb-3">
        <Card className="rounded-4 py-4" style={{minHeight: '310px'}}>
          <Card.Body>
            <img className="mx-auto d-block mb-4" style={{minHeight: '75px'}} src="/mobile.svg" alt="A mobile phone."/>
              <h5 className="card-title"><strong>Privacy Browswer App</strong></h5>
              <p className="card-text">Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on <a className="cardLinks text-decoration-none" href="#">iOS &
                Android</a>.</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
const GreenBackground = () => (
  <Row className="greenBG mx-0">
    <Col className="text-center">
      <h1><strong>We don’t store your <br/>personal information. Ever.</strong></h1>
      <p className="fs-5 mt-3">Our privacy policy is simple: we don’t collect <br/>or share any of your personal information.</p>
      <Button variant="dark" type="button" className="addChrome2 rounded-3 mt-2 py-2">Add DuckDuckGo to Chrome</Button>
    </Col>
    <Container>
      <img className="img-fluid mx-auto d-block" style={{ maxWidth: '60vw' }} src="/monster.svg" alt="A lab monster."/>
    </Container>
  </Row>
);
const FAQs = () => (
  <Container fluid className="p-0">
    <Row className="justify-content-center mx-0">
      <Col xs={11} sm={8} md={6} className="text-center">
        <h2 className="mt-5 py-5"><strong>Frequently Asked Questions</strong></h2>
        <hr/>
     </Col>
    </Row>
    <Row className="row justify-content-center mx-0">
      <Col xs={11} sm={8} md={6}>
        <Accordion flush defaultActiveKey="0" className="text-white">
          <Accordion.Item eventKey="0">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How does DuckDuckGo make money?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">We make our money from private ads on our search engine. On other search engines, ads are based on profiles compiled about you using your personal information like search, browsing, and purchase
              history. Since
              we don’t collect that information, search ads on DuckDuckGo are based on the search results page you are viewing, not on you as a person. For example, if you search for cars, we’ll show you ads about cars. <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>What does Google know about me?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless
              you stop them with DuckDuckGo!). And that’s just the tip of the iceberg. <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="2">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>Why use DuckDuckGo instead of Google?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">Ever notice ads constantly following you around? That’s in part because Google tracks your searches and hides trackers on millions of websites. By contrast, our private search engine doesn’t track your searches and our <a className="learnMore text-decoration-none" href="#">DuckDuckGo browser extension and mobile app</a> block Google’s (and many other companies’) trackers across the Internet, helping to keep your browsing history more private, as it should be. And that’s just the beginning — by using DuckDuckGo you also escape the manipulation of the filter bubble and can use the Internet faster (after all that tracking code is disabled). <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="3">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How do DuckDuckGo search results compare to Google’s?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have everything you’ve come to expect in an online search experience, and a few <a className="learnMore text-decoration-none" href="#">bonus features</a> that make searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no search history on DuckDuckGo, you escape the filter bubble of manipulated results. <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="4">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>Is DuckDuckGo an “unfiltered” search engine?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">Unlike some other search engines, we don’t alter search results based on someone’s previous search history. In fact, since we don’t track our users we don’t have access to search histories at all! Those other search engines show you results based on a data profile about you and your online activity (including your search history), and so can be slanted towards what they think you will click on the most based on this profiling. This effect is commonly known as the <a className="learnMore text-decoration-none" href="#">search filter bubble</a>, but using DuckDuckGo can help you escape it. <br/><br/>

              This does not mean our search results are generally “unfiltered” because, for every search you make online, a search engine’s job is to filter millions of possible results down to a ranked order of just a handful. In other words, a search engine has to use algorithms programmed by people to determine what shows up first in the list of results, what shows up second, and so on. Otherwise, for every search you’d just get a completely random set of results, which of course wouldn’t be very useful.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="5">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>Is DuckDuckGo owned by Google?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">No, we are not and have never been owned by Google. We have been an independent company since our founding in 2008 and, unlike some other search engines, we don’t rely on Google’s results for any of our search results. You may notice that we offer a Google Chrome extension and a Google Android app, but these are also not in partnership with Google and actually aim to protect you from Google’s online trackers.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="6">
            <Accordion.Header><h5 className="text-white"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>What’s the difference between using DuckDuckGo and Incognito mode?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">It is a myth that you can’t be tracked while using so-called “Incognito” mode. In fact, Incognito mode mainly just deletes information on your computer and does nothing to stop Google from saving your searches, nor does it stop companies, Internet service providers, or governments from being able to track you across the Internet. By contrast, DuckDuckGo search is completely anonymous and if you add our app & extension on top, we help keep you private when browsing off of search results. <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="7">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How popular is DuckDuckGo?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">We don’t track our users, so it’s actually impossible for us to know how many users in total are using our products. However, we are able to make an estimate based on the number of searches we get per month. Our best guess — over 50 million people! <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
          <Accordion.Item eventKey="8">
            <Accordion.Header><h5 className="text-white fs-5"><ChevronCompactDown/></h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h5 className="text-white"><strong>How does the DuckDuckGo app & extension work?</strong></h5></Accordion.Header>
            <Accordion.Body className="accordion-body">The DuckDuckGo Privacy Browser mobile app and Privacy Essentials desktop extension both come with our best-in-class tracker blocker, encryption enforcer, and private search engine – all in one simple package. This gives you all the key privacy protection tools to search and browse privately, curbing the constant monitoring of your Internet activity by companies like Google and Facebook. <a className="learnMore text-decoration-none" href="#">Learn more</a>.
            </Accordion.Body>
          </Accordion.Item>
          <hr/>
        </Accordion>
        <Container className="text-center mt-4 mb-5 pt-3 pb-5">
          <Button type="button" variant="primary" className="addChrome1 text-white rounded-3 mt-2 py-2">Add DuckDuckGo to Chrome</Button>
        </Container>
      </Col>
    </Row>
  </Container>
);
const DuckDuckGo = () => (
  <Container fluid className="p-0">
    <TopMenu/>
    <Logo/>
    <SearchBar/>
    <Info/>
    <Cards/>
    <GreenBackground/>
    <FAQs/>
  </Container>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DuckDuckGo/>);