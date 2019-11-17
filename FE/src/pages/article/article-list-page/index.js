import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table, Divider, Tag, Button, Modal,
} from 'antd';

function ArticleListPage() {
  const onDeleteClick = (id) => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>{id}</p>
        </div>
      ),
      onOk() { },
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to="/">{text}</Link>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="primary">
            <Link to="/">View</Link>
          </Button>
          <Divider type="vertical" />
          <Button type="danger" onClick={() => onDeleteClick(record.name)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default ArticleListPage;
