import _ from 'lodash';
import XLSX from 'xlsx';

const DEFAULT_NAME = 'db-data';
const DEFAULT_TYPE = 'xlsx';

const convertDataForXLSX = (data) => data.map((item) => {
  Object.keys(item).map((key) => {  // eslint-disable-line
    const value = item[key];

    if (_.isArray(value)) {
      item[key] = value.join(',');  // eslint-disable-line
    }
  });

  return item;
});

export const downloadFile = (options) => {
  const {
    fileName = DEFAULT_NAME,
    fileType = DEFAULT_TYPE,
    data,
  } = options;
  const downloadFileName = `${fileName}.${fileType}`;
  const XLSXData = convertDataForXLSX(data);
  const worksheet = XLSX.utils.json_to_sheet(XLSXData);
  const newWorkbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(newWorkbook, worksheet, 'SheetJS');
  XLSX.writeFile(newWorkbook, downloadFileName);
};
