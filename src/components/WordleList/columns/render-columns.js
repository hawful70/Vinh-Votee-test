export const renderColumns = () => {
  const columns = [
    {
      title: 'Slot',
      dataIndex: 'slot',
      width: '10%',
    },
    {
      title: 'Guess',
      dataIndex: 'guess',
      width: '10%',
    },
    {
      title: 'Result',
      dataIndex: 'result',
    },
  ];

  return columns;
};
