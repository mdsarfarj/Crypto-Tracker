import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WatchListIcon from "../../WatchListIcon/WatchListIcon.jsx";

const Grid = ({ coin,index }) => {

  
  return (
    
    <Link to={`/coin/${coin.id}`} className="grid-item-link">
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.1*index}}
      className={
        coin.price_change_percentage_24h > 0
          ? "grid-item"
          : "grid-item grid-red"
      }
    >
      <div className="data-flex">
        <img src={coin.image} alt="" className="coin-logo" draggable="false" />
        <div className="name-col">
          <div>
            <p className="coinSymbol">{coin.symbol}</p>
            <p className="coinName">{coin.name}</p>
          </div>

          <div className="WatchListIcon">
            <WatchListIcon coinId={coin.id}/>
          </div>
        </div>

      </div>
      <div className="chip-flex">
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "price-chip"
              : "price-chip chip-red"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "icon-chip"
              : "icon-chip chip-red"
          }
        >
          {coin.price_change_percentage_24h > 0 ? (
            <TrendingUpIcon />
          ) : (
            <TrendingDownIcon />
          )}
        </div>
      </div>
        <p className={
            coin.price_change_percentage_24h > 0
              ? "Coin-price"
              : "Coin-price Coin-price-red"
          }>
              ${coin.current_price.toLocaleString()}
          </p>
          <p className="total-volume">
            Total Volume: ${coin.total_volume.toLocaleString()}
          </p>
          <p className="mkt-Cap">
            Market Cap: ${coin.market_cap.toLocaleString()}
          </p>
    </motion.div>
    </Link>
  );
};

export default Grid;
