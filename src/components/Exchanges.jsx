import React from 'react';
import millify from 'millify';
import HTMLReactParser from 'html-react-parser';
import { Table } from 'antd';

import { useGetCryptoExchangesQuery } from '../services/crytpoApi.js';
import Loader from './Loader';

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery();
  const exchanges = data?.data?.exchanges;
  if (isFetching) return <Loader />;

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
    },
    {
      title: 'Description',
      dataIndex: 'iconUrl',
      key: 'iconUrl',
      render: (iconUrl) => (
        <img src={iconUrl} alt='icon' style={{ width: '15px' }} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
      render: (value) => millify(value),
    },
    {
      title: 'Market',
      dataIndex: 'marketShare',
      key: 'marketShare',
      render: (value) => `${millify(value)}%`,
    },
  ];

  return (
    <>
      <Table
        rowKey='name'
        columns={columns}
        dataSource={exchanges}
        size='medium'
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{HTMLReactParser(record.description)}</p>
          ),
          rowExpandable: (record) => typeof record.description === 'string',
        }}
      />
    </>
  );
};

export default Exchanges;
