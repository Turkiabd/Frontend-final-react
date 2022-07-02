import React from "react";

const Inspo = () => {
  return (
    <div className="container-inspo">
      <p className="fw-light">
        here's some outfit inspiration you might like
      </p>

      <div className="row">
        {/* card1 */}
        <div className="col-6 col-md-4">
          <div className="card">
            <img
              src="https://images.asos-media.com/products/asos-design-oversized-rugby-polo-sweatshirt-with-tipping-in-navy/201399134-1-moonlitocean?$n_640w$&wid=513&fit=constrain"
              className="card-img-top"
              alt="outfit1"
            />
            <div className="card-body">
              <h6 className="display-6">oversized polo sweatshirt</h6>
              <p className="fw-light">
                Sweatshirt fabric We are a proud member of The Better Cotton
                Initiative Better Cotton is sourced via a system of Mass Balance
              </p>
              <a
                href="https://www.asos.com/asos-design/asos-design-oversized-rugby-polo-sweatshirt-with-tipping-in-navy/prd/201399134?colourWayId=201399135&cid=13517"
                className="btn btn-primary"
              >
                BUY THE LOOK
              </a>
            </div>
          </div>
        </div>

        {/* card2 */}
        <div className="col-6 col-md-4">
          <div className="card">
            <img
              src="https://images.asos-media.com/products/asos-design-wide-shorts-in-stone/201229920-1-stone?$n_640w$&wid=513&fit=constrain"
              className="card-img-top"
              alt="outfit1"
            />
            <div className="card-body">
              <h6 className="display-6">wide shorts in beige</h6>
              <p className="fw-light">
                Soft, stretch twill Made with recycled polyester Plastic bottles
                and textile waste are processed into plastic chips and melted
                into new fibres.
              </p>
              <a
                href="https://www.asos.com/asos-design/asos-design-wide-shorts-in-stone/prd/201229920"
                className="btn btn-primary"
              >
                BUY THE LOOK
              </a>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="col-6 col-md-4">
          <div className="card">
            <img
              src="https://images.asos-media.com/products/asos-design-oversized-borg-jacket-in-scenic-print/200402308-1-grey?$n_640w$&wid=513&fit=constrain"
              className="card-img-top"
              alt="outfit1"
            />
            <div className="card-body">
              <h5 className="display-6"> oversized borg jacket</h5>
              <p className="fw-light">
                Cosy borg Sheepskin-like fabric with a bumpy texture Lining:
                100% Polyester, Shell: 100% Polyester, Wadding: 100% Polyester..
              </p>
              <a
                href="https://www.asos.com/asos-design/asos-design-oversized-borg-jacket-in-scenic-print/prd/200402308?CTARef=Saved+Items+Image&pdpservermvt=pdp-edge-mvt_accClosed"
                className="btn btn-primary"
              >
                BUY THE LOOK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspo;
