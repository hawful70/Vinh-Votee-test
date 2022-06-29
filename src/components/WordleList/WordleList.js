import { Table } from 'antd';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as selector from 'redux/wordle/selector';
import { renderColumns } from "./columns/render-columns";

const WordleList = () => {
  const { data, isLoading } = useSelector((state) => ({
    data: selector.selectData(state),
    isLoading: selector.selectIsLoadingList(state)
  }));

  const columns = useMemo(() => {
    return renderColumns();
  }, []);

  const tableProps = useMemo(
    () => ({
      columns,
      loading: isLoading,
      dataSource: data,
      rowKey: 'slot',
      pagination: false,
      className: 'wordle-management-table',
    }),
    [columns, data, isLoading],
  );

  return (
    <Table {...tableProps} />
  );
};

export default WordleList;
