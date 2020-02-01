import React, { useEffect } from 'react';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { uniqueId } from 'lodash';
import {
  Table, Divider, Tag, Button, Modal,
} from 'antd';
import {
  setPagination as setPaginationAction,
  getAllArticles as getAllArticlesAction,
} from '@src/actions/article';

function ArticleListPage(props) {
  const {
    list, loading, paginationData, getAllArticles,
  } = props;

  useEffect(() => {
    getAllArticles();
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
    props.setPagination(pagination);
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
      loading={loading}
      columns={columns}
      dataSource={list}
      pagination={paginationData}
      onChange={handleTableChange}
    />
  );
}

ArticleListPage.defaultProps = {
  loading: false,
  list: [],
};

ArticleListPage.propTypes = {
  loading: PropsType.bool,
  list: PropsType.arrayOf(PropsType.object),
  getAllArticles: PropsType.func.isRequired,
  setPagination: PropsType.func.isRequired,
  paginationData: PropsType.objectOf(PropsType.any).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { article } = state;

  return {
    list: article.list,
    loading: article.loading,
    paginationData: article.pagination,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log('mapDispatchToProps', dispatch);
//   return {
//     dispatch,
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  {
    getAllArticles: getAllArticlesAction,
    setPagination: setPaginationAction,
  },
)(ArticleListPage);
