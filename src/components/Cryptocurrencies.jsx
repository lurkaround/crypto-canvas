import React, { useState, useEffect } from 'react';
import millify from 'millify';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/crytpoApi.js';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input
            type='text'
            placeholder='Search cryptocurrencies'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row className='crypto-card-container' gutter={[32, 32]}>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={2} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/cryptodetails/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className='crypto-image'
                    alt='crypto icon'
                    src={currency.iconUrl}
                    hoverable
                  />
                }>
                <p>
                  Price: $
                  {millify(currency.price, {
                    precision: 2,
                  })}
                </p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
