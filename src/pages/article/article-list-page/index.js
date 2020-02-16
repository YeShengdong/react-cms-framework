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
import { downloadFile } from '@src/helpers/xlsx-helper';

function ArticleListPage(props) {
  const {
    listData, loading, paginationData, getAllArticles,
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
  /* eslint-disable */
  const handleDownload = () => {
    Modal.confirm({
      title: 'Are you sure download?',
      content: '',
      onOk: () => {
        const downloadOptions = {
          data: listData,
        };

        downloadFile(downloadOptions);
      },
    });
  };

  return (
    <div>
      <Button type="primary" icon="download" onClick={handleDownload}>
        Download
      </Button>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={listData}
        pagination={paginationData}
        onChange={handleTableChange}
        scroll={{ y: 600 }}
      />
    </div>
  );
}

ArticleListPage.defaultProps = {
  loading: false,
  listData: [],
};

ArticleListPage.propTypes = {
  loading: PropsType.bool,
  listData: PropsType.arrayOf(PropsType.object),
  getAllArticles: PropsType.func.isRequired,
  setPagination: PropsType.func.isRequired,
  paginationData: PropsType.objectOf(PropsType.any).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { article } = state;

  return {
    listData: article.listData,
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
