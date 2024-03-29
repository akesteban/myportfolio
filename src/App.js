import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from './overrides/react-mdl';
import Main from "./components/main";
import {Link} from 'react-router-dom';

function App() {
  return (
      <div className="demo-big-content">
          <Layout fixedHeader>
              <Header className="header-color" title="ANNA ESTEBAN" scroll>
                  <Navigation>
                      <Link to="/aboutme">About Me </Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                      <a href="/">Link</a>
                  </Navigation>
              </Drawer>
              <Content>
                <Main></Main>
              </Content>/>
          </Layout>
      </div>
    
  );
}

export default App;
