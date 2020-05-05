import React from "react";
import { Card, Button } from "react-bootstrap";
function KeranjangPembelian() {
  return (
    <div className="container mb-5" style={{}}>
      <h2 className="mt-4 mb-3">Keranjang saya</h2>
      <Card className="cardContainer">
        {/* <Card.Body> */}
        <div className="row pl-4 pr-4 text-center">
          <div className="col-sm">
            <h5>Train 2</h5>
            <h5>Ekonomi</h5>
            <h6 style={{ color: "orange", marginBottom: 45 }}>Pending</h6>
            <h5>Name</h5>
            <h5>Ibra</h5>
          </div>
          <div className="col-sm">
            <h5>08:00</h5>
            <p style={{ fontSize: 12 }}>01-12-2020</p>
            <h5>09:00</h5>
            <p style={{ fontSize: 12 }}>02-13-2020</p>
            <h5>Nama pemesan</h5>
            <h5>iIbra</h5>
          </div>
          <div className="col-sm">
            <h5>Jakarta</h5>
            <p style={{ fontSize: 12 }}>Statisun manggarai</p>
            <h5>Surabaya</h5>
            <p style={{ fontSize: 12 }}>Statiun surabaya</p>
            <h5>Telepon</h5>
            <h5>08343409243</h5>
          </div>
          <div className="col-sm" style={{ marginTop: 130 }}>
            <h5>Email</h5>
            <h5>Ibra@gmail.com</h5>
          </div>
          <div className="col-sm">
            <h3>Kereta api</h3>
            <p>04-02-2020</p>
            <Button variant="success" style={{ marginTop: 60 }}>
              Bayar sekarang
            </Button>
          </div>
        </div>
        {/* </Card.Body> */}
      </Card>
    </div>
  );
}

export default KeranjangPembelian;
