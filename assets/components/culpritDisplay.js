import React from "react";
import sus from "../img/sus.jpg";
import yip from "../img/yip.jpg";

export default function CupritDisplay(){
    return (
        <>
        <div className='col-lg-9'>
            <div className="row g-3">
              <div className="col-lg-3">
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={sus}
                    class="w-100" alt="Blue Jeans Jacket" />
                </div>
              </div>
              <div className="col-lg-3">
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={yip}
                    class="w-100" alt="Blue Jeans Jacket" />
                </div>
              </div>
            </div>
         </div>
        </>
    )
}