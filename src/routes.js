import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./routes.css";
// Landing
import Header from "./pages/Landing/Header";
import Jumbo from "./pages/Landing/Jumbo";
import ContentInfo from "./pages/Landing/ContentInfo";
import Footer from "./pages/Landing/Footer";
// Home
import HomeJumbo from "./pages/Home/HomeJumbo";
import CardSearch from "./pages/Home/CardSearch";
import DataTable from "./pages/Home/DataTable";
// Keranjang

import KerangjangPembelian from "./pages/Keranjang/KeranjangPembelian";
import PreviewPembayaran from "./pages/Keranjang/KeranjangPembelian/PreviewPembayaran";
function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/keranjang">
            <Kerangjang />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <Header />
      <Jumbo />
      <ContentInfo />
      <Footer />
    </div>
  );
}
function Home() {
  return (
    <div>
      <Header />
      <HomeJumbo />
      <CardSearch />
      <DataTable />
      <Footer />
    </div>
  );
}
function Kerangjang() {
  return (
    <div>
      <Header />
      <KerangjangPembelian />
      <PreviewPembayaran />
      <Footer />
    </div>
  );
}

export default Routes;
