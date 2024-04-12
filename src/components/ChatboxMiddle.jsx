import React from "react";
import Bag from "../images/Bag.png";
import YellowTick from "../images/YellowTick.png";
import Slider from "../images/Slider.svg";
const ChatboxMiddle = () => {
  return (
    <div className="middle">
      <div className="first-chat">
        <div className="chat-box">
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </div>
        <div className="time-stamp">4.45 PM</div>
      </div>
      <div className="second-chat">
        <div className="chat-box2">
          I am looking for a hand bag, with long strap .
        </div>
        <div className="time-stamp2">4.46 PM</div>
      </div>
      <div className="third-section">
        <div className="sec-heading">Popular tags for handbag</div>
        <div className="options">
          <div className="option-tab">
            <div className="option-1">Clutch</div>
            <div className="option-1">Fabric Lining</div>
            <div className="option-1">Baggit</div>
            <div className="option-1 last">Multi Compartment</div>
          </div>
          <div className="chevoron">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#4C82EF"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="fourth-section">
        <div className="bag-box">
          <div className="main-bag">
            <div className="bag-wrapper">
              <img src={Bag} />
              <div className="bag-desc">
                <div className="bag-name">
                  <span>Bags on Timpu</span>
                  <img src={YellowTick} />
                </div>
                <div className="product-num">
                  <span>1132 products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      fill="#949494"
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p>Or set filter and help us choose the best bag for you.</p>
          </div>
          <div className="time-stamp">4.48 PM</div>
        </div>
        <div className="filter-wrapper">
          <div className="filters">
            <div className="filter-header">Search Filter</div>
            <div className="filter-icon">
              <img src={Slider} />
              Filter
            </div>
          </div>
          <div className="filter-lists">
            <div className="filter1">
              Strap - Long
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#4c82ef"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>
            <div className="filter">
              Colour
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#737373"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>

            <div className="filter">
              Size
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#737373"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>

            <div className="filter">
              Brand
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#737373"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>

            <div className="filter">
              Material
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="#737373"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatboxMiddle;
