import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import BuktiImg from "../../../assets/1.jpg";

function KeranjangPembelian() {
  return (
    <div className="container" style={{ marginBottom: 320 }}>
      <div className="container">
        <div className="container">
          <div className="container">
            <div className="container">
              <h2 className="mt-4 mb-3">Keranjang saya</h2>
              <Card className="cardContainer  text-center">
                <Card.Body>
                  <div className="row pl-4">
                    <div className="col-sm-2">
                      <h5>Train 2</h5>
                      <p style={{ fontSize: 12 }}>Ekonomi</p>
                      <p style={{ color: "orange", marginBottom: 30 }}>
                        Pending
                      </p>
                      <hr style={{ marginRight: 10 }} />
                    </div>
                    <div className="col-sm-2">
                      <h5>08:00</h5>
                      <p style={{ fontSize: 12 }}>01-12-2020</p>
                      <h5>09:00</h5>
                      <p style={{ fontSize: 12, marginBottom: 30 }}>
                        02-13-2020
                      </p>
                      <hr style={{ marginRight: 10 }} />
                    </div>
                    <div className="col-sm-2">
                      <h5>Jakarta</h5>
                      <p style={{ fontSize: 12 }}>Statisun manggarai</p>
                      <h5>Surabaya</h5>
                      <p style={{ fontSize: 12, marginBottom: 30 }}>
                        Statiun surabaya
                      </p>
                      <hr style={{ marginRight: 10 }} />
                    </div>
                    <div className="col-sm-2" style={{}}>
                      <h5>Nama pemesan</h5>
                      <p style={{ fontSize: 12 }}>iIbra</p>
                      <h5>Telepon</h5>
                      <p style={{ fontSize: 12 }}>08343409243</p>
                      <h5>Email</h5>
                      <p style={{ fontSize: 12, marginBottom: 30 }}>
                        Ibra@gmail.com
                      </p>
                      <hr style={{ marginRight: 10 }} />
                    </div>
                    <div className="col-sm-4">
                      <h3>Kereta api</h3>
                      <p>04-02-2020</p>
                      <Link to="/preview-keranjang">
                        <Button variant="warning">Bayar sekarang</Button>
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeranjangPembelian;
