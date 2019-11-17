import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { uniqueId } from 'lodash';
import {
  Table, Divider, Tag, Button, Modal,
} from 'antd';
import { getArticleList } from '../../../services/article';

function ArticleListPage() {
  const [tableLoading, setTableLoading] = useState(true);
  const [articleData, setArticleData] = useState({ list: [] });
  const [paginationData, setPaginationData] = useState({});

  useEffect(() => {
    async function loadData() {
      setTableLoading(true);
      const res = await getArticleList({
        pageSize: paginationData.pageSize,
        currentPage: paginationData.current,
      });

      setArticleData(res);
      setPaginationData({ ...paginationData, total: res.total });
      setTableLoading(false);
    }

    loadData();
  }, [paginationData.current]);

  const onDeleteClick = (id) => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>{id}</p>
        </div>
      ),
      onOk: () => {
        console.log('ok');
      },
    });
  };

  const handleTableChange = (pagination) => {
    setPaginationData(pagination);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Link to="/">{text}</Link>,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            const key = uniqueId('tag');

            return (
              <Tag color="geekblue" key={key}>
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
          <Button type="danger" onClick={() => onDeleteClick(record.id)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      loading={tableLoading}
      columns={columns}
      dataSource={articleData.list}
      pagination={paginationData}
      onChange={handleTableChange}
    />
  );
}

export default ArticleListPage;
